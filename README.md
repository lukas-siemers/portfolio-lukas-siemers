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

The site runs on **Cloudflare Pages** (project `lukas-portfolio`). GitHub Actions ([`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)) handles it:

- **Pull requests to `main`:** lint, typecheck, and build.
- **Pushes to `main`:** the same checks, then a production deploy to lukassiemers.com.

The deploy needs two repository secrets (Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | A Cloudflare API token with the **Account → Cloudflare Pages → Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | The ID of the Cloudflare account that owns the Pages project |

To redeploy without a new commit, run the **CI/CD** workflow on `main` from the Actions tab.

## License

MIT
