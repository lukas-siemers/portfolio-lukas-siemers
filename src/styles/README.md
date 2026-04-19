# styles

Everything styling-related lives here. Change things in one place, and every page picks it up.

## What's where

| File              | Purpose                                                  | When to edit                                      |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------- |
| `colors.css`      | All color tokens (CSS variables)                         | Change the palette, add a new color               |
| `fonts.ts`        | Next.js font loading (Inter, Newsreader)                 | Swap or add a Google/local font                   |
| `theme.css`       | Base body styles + reusable utility classes              | Add a new utility (`.label-md`, `.gradient-*`)    |
| `../app/globals.css` | Entry point — imports the above + Tailwind directives | Rarely; only to add new `@import`s or layers     |

## Related

- `tailwind.config.ts` (project root) — exposes the tokens above as Tailwind classes (`bg-surface`, `text-primary`, `font-serif`). Add a color here after you define it in `colors.css`.

## Pattern

```
colors.css (raw palette)
    ↓
tailwind.config.ts (maps palette → Tailwind classes)
    ↓
components / pages (use classes like `bg-surface-container-low text-primary`)
```

## Changing colors

1. Edit the RGB triplet in `colors.css` — e.g. change `--primary` from `173 198 255` to a new tone.
2. No other file needs to change. Every `text-primary`, `bg-primary`, `bg-primary/30`, etc. updates automatically.

## Adding a new color

1. Add it to `colors.css`: `--warning: 255 200 100;`
2. Add it to `tailwind.config.ts` under `theme.extend.colors`:
   ```ts
   warning: "rgb(var(--warning) / <alpha-value>)",
   ```
3. Use it anywhere: `bg-warning`, `text-warning/70`.

## Swapping a font

1. In `fonts.ts`, import a new family from `next/font/google` and wire a CSS variable.
2. In `tailwind.config.ts`, update the relevant entry under `theme.extend.fontFamily`.
3. Done — all pages using `font-sans` or `font-serif` re-render.
