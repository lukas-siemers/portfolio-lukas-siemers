# Setup

Run this once to finish bootstrapping the project.

## Option A — one-shot script (recommended)

Open **PowerShell** in this folder and run:

```powershell
cd C:\Users\Lukas\Desktop\Website\lukas-portfolio
.\setup.ps1
```

> If PowerShell blocks the script with an execution policy error, run:
> `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first, then retry.

This will:
1. Remove any partial `.git/` folder left from scaffolding.
2. `git init` with `main` as the default branch.
3. `npm install` all dependencies.
4. Make the initial commit.

## Option B — manual

```powershell
cd C:\Users\Lukas\Desktop\Website\lukas-portfolio
Remove-Item -Recurse -Force .git   # only if a broken .git folder exists
git init -b main
git config user.email "lukas.siemers123@gmail.com"
git config user.name "Lukas Siemers"
npm install
git add -A
git commit -m "Initial scaffold: Next.js 15 + TS + Tailwind + MDX portfolio"
```

## Push to GitHub

1. Go to <https://github.com/new> and create a repo named `lukas-portfolio` (or whatever you prefer). **Do not** initialize it with a README or .gitignore — this project already has both.

2. Link and push:

   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/lukas-portfolio.git
   git push -u origin main
   ```

## Run locally

```powershell
npm run dev
```

Open <http://localhost:3000>.

## Deploy to Vercel

1. Go to <https://vercel.com/new>.
2. Import your GitHub repo.
3. Accept all defaults — Vercel detects Next.js automatically.
4. First deploy takes ~90 seconds.

Every push to `main` will auto-deploy to production. Pushes to other branches create preview deploys.

## First edits to make

- `src/lib/site.ts` — your name, role, bio, email, social URLs.
- `src/lib/projects.ts` — replace sample projects with real ones.
- `content/blog/hello-world.mdx` — rewrite or delete.
- `src/app/about/page.tsx` — rewrite the about page.
- `public/` — drop in `favicon.ico`, `og.png`, and `resume.pdf` if you want one.
