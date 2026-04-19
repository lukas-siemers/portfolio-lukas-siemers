# Lukas — Personal Portfolio

Personal site and portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **MDX** for the blog.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | What it does                           |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Start the dev server with hot reload   |
| `npm run build`    | Production build                       |
| `npm run start`    | Serve the production build             |
| `npm run lint`     | Run ESLint                             |
| `npm run typecheck`| Run `tsc --noEmit`                     |

## Project structure

```
lukas-portfolio/
├── content/
│   └── blog/              # MDX blog posts
├── public/                # Static assets (images, favicon, resume.pdf)
├── src/
│   ├── app/               # App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Home
│   │   ├── about/
│   │   ├── projects/
│   │   ├── blog/
│   │   └── contact/
│   ├── components/        # Nav, Footer, ProjectCard, ThemeToggle
│   └── lib/               # projects.ts, posts.ts
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Editing content

- **Bio & links:** `src/lib/site.ts`
- **Projects:** `src/lib/projects.ts` — add entries to the array
- **Blog posts:** drop an `.mdx` file into `content/blog/` with frontmatter:

  ```md
  ---
  title: "My post title"
  date: "2026-04-19"
  description: "One-line summary for previews and OG."
  ---

  Your content here.
  ```

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Accept the defaults — Vercel auto-detects Next.js.
4. Add your custom domain in the Vercel project settings (Settings → Domains).

### Alternatives

- **Cloudflare Pages** — connect the repo, build command `npm run build`, output `/.next`.
- **Netlify** — install the `@netlify/plugin-nextjs` plugin; otherwise similar flow.

## Custom domain

Buy a domain at [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (cheapest, at cost) or Namecheap. In your DNS, add a CNAME from `www` to `cname.vercel-dns.com` and an A record for the apex to `76.76.21.21` (Vercel's docs have the current values — verify before configuring).

## License

MIT
