# Self-hosting `lukassiemers.com` on a Raspberry Pi 4

This is the runbook for the live production deployment of the portfolio.
Everything in this folder (`Caddyfile`, `docker-compose.yml`, `.env.example`)
is what runs on the Pi.

## Architecture

```
                ┌──────────────────────────────────────────────┐
   visitor ───► │  Cloudflare edge (TLS terminated here)       │
                │  lukassiemers.com  /  www.lukassiemers.com   │
                └──────────────────────┬───────────────────────┘
                                       │  outbound-only
                                       │  encrypted tunnel
                                       ▼
                ┌──────────────────────────────────────────────┐
                │  Raspberry Pi 4 (home network)               │
                │  static IP 192.168.1.50, behind home router  │
                │                                              │
                │  ┌────────────────┐    ┌──────────────────┐  │
                │  │ cloudflared    │───►│ Caddy (port 80)  │  │
                │  │ (tunnel)       │    │ serves /srv/html │  │
                │  └────────────────┘    └──────────────────┘  │
                │           Docker network: web                │
                └──────────────────────────────────────────────┘
```

Why this shape:

- **No router port forwarding.** The Pi never accepts an inbound connection
  from the public internet. `cloudflared` opens an outbound tunnel to
  Cloudflare and traffic flows back through it.
- **TLS at the edge.** Cloudflare handles HTTPS so Caddy only needs plain
  HTTP on port 80 inside the Docker network. No certs to renew on the Pi.
- **Static export.** The Next.js app is built with `output: "export"`, so
  it's just a folder of HTML/JS/CSS files. No Node runtime on the Pi —
  Caddy serves the files directly.

## What runs on the Pi

Two containers, defined in `docker-compose.yml`:

| Container          | Image                          | Role                                |
| ------------------ | ------------------------------ | ----------------------------------- |
| `portfolio-web`    | `caddy:2-alpine`               | Static file server on `web:80`      |
| `portfolio-tunnel` | `cloudflare/cloudflared:latest`| Outbound tunnel to Cloudflare       |

Both attach to the `web` Docker network so `cloudflared` can reach Caddy as
`http://web:80`. Neither container exposes a port to the host.

## On-disk layout (Pi)

```
~/portfolio/
├── docker-compose.yml      # copy of this file
├── Caddyfile               # copy of this file
├── .env                    # contains TUNNEL_TOKEN=...
└── out/                    # `next build` output, rsync'd from dev machine
```

## One-time setup

### Pi itself

1. Flash **Raspberry Pi OS Lite (64-bit)** with Raspberry Pi Imager.
   In Imager → Edit Settings:
   - Hostname: `lukas-siemers`
   - Username: `lukassiemers`, password set
   - Wi-Fi SSID and password
   - SSH enabled (password auth)
2. Boot the Pi and SSH in: `ssh lukassiemers@<pi-ip>`.
3. Set a static IP via NetworkManager:
   ```
   sudo nmtui
   ```
   Edit the active Wi-Fi connection → IPv4 = Manual → set address
   `192.168.1.50/24`, gateway `192.168.1.1`, DNS `1.1.1.1, 8.8.8.8`.
4. Install Docker:
   ```
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker $USER
   newgrp docker
   ```

### Cloudflare side

1. Buy domain through **Cloudflare Registrar** (no nameserver migration needed).
2. **Zero Trust → Networks → Tunnels → Create tunnel** named `portfolio`.
3. Copy the long `--token` value from the Docker install instructions —
   that goes into `.env` on the Pi as `TUNNEL_TOKEN=...`.
4. Add **two Published application routes** to the tunnel:

   | Subdomain | Domain              | Path | Service URL |
   | --------- | ------------------- | ---- | ----------- |
   | *(blank)* | `lukassiemers.com`  |      | `web:80`    |
   | `www`     | `lukassiemers.com`  |      | `web:80`    |

   Type is **HTTP** for both. Cloudflare auto-creates the `@` and `www`
   CNAME records pointing at `<tunnel-id>.cfargotunnel.com`, both Proxied
   (orange cloud).

### First deploy

From the dev machine (Windows PowerShell):

```powershell
cd C:\Users\Lukas\Desktop\Website\lukas-portfolio
npm run build

# Push the deploy folder once
scp -r deploy lukassiemers@192.168.1.50:~/portfolio-deploy
ssh lukassiemers@192.168.1.50 "mkdir -p ~/portfolio && cp -r ~/portfolio-deploy/* ~/portfolio/ && rm -rf ~/portfolio-deploy"

# Push the built site
scp -r out lukassiemers@192.168.1.50:~/portfolio/

# On the Pi: create .env from the template, paste the tunnel token,
# then bring the stack up.
ssh lukassiemers@192.168.1.50
  cd ~/portfolio
  cp .env.example .env
  nano .env             # paste TUNNEL_TOKEN
  docker compose up -d
```

Then visit `https://lukassiemers.com`.

## Updating the site

Whenever the code changes:

```powershell
cd C:\Users\Lukas\Desktop\Website\lukas-portfolio
npm run build
scp -r out lukassiemers@192.168.1.50:~/portfolio/
```

Caddy serves files directly off disk, so no container restart needed —
just hard-refresh the browser (Ctrl+Shift+R).

If you ever change `Caddyfile` or `docker-compose.yml`, push them too and
restart the affected container:

```
ssh lukassiemers@192.168.1.50
  cd ~/portfolio
  docker compose restart web      # for Caddyfile changes
  docker compose up -d             # for compose changes
```

## Troubleshooting

### Site loads but shows a Caddy 404

The `out/` folder didn't get copied. On the Pi:

```
ls ~/portfolio/out
```

Should show `index.html`, `_next/`, etc. If empty, re-run the `scp -r out`
command from the dev machine.

### `DNS_PROBE_FINISHED_NXDOMAIN` from your home network only

Local DNS cache or your router has cached a "doesn't exist" answer from
before the records were created. Verify it's just local with:

```powershell
nslookup www.lukassiemers.com 1.1.1.1
```

If `1.1.1.1` returns IPs, DNS is fine globally. Fix locally:

```powershell
ipconfig /flushdns
```

Then in Chrome: `chrome://net-internals/#dns` → Clear host cache. As a
last resort reboot the home router. Phones on cellular bypass all of this
and are a quick way to confirm.

### Tunnel container shows "no ingress rules matched"

The DNS record points at the tunnel but no Published application route
covers that hostname. Add the route in Zero Trust → Tunnels → Published
application routes. Changes take effect within a few seconds — no restart
needed.

### Pi unreachable on its static IP

Check from Windows:

```powershell
ping 192.168.1.50
arp -a | findstr "b8-27-eb dc-a6-32 e4-5f-01 2c-cf-67 d8-3a-dd"
```

The `arp` filter matches Raspberry Pi MAC OUI prefixes and shows the IP
the Pi is currently on if it differs from the configured static.

### Inspect tunnel logs

```
ssh lukassiemers@192.168.1.50
  cd ~/portfolio
  docker compose logs -f tunnel
```

Healthy output shows four registered connections (`connIndex 0..3`).

### Inspect Caddy logs

```
docker compose logs -f web
```

You'll see one log line per request — useful for confirming traffic is
arriving from the tunnel.

## Power-cycling the Pi safely

```
ssh lukassiemers@192.168.1.50
  sudo shutdown -h now
```

Wait for the green LED to stop flickering, then pull power. Boot back up
by reconnecting power; the stack auto-starts because both containers have
`restart: unless-stopped`.
