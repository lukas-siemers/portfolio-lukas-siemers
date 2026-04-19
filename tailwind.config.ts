import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--surface-container-lowest) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--surface-container-low) / <alpha-value>)",
        "surface-container":
          "rgb(var(--surface-container) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--surface-container-high) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--surface-container-highest) / <alpha-value>)",
        "surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
        "surface-tint": "rgb(var(--surface-tint) / <alpha-value>)",
        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--on-surface-variant) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-container":
          "rgb(var(--primary-container) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
      },
      fontSize: {
        // Editorial Avant-Garde scale
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline-md": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "headline-sm": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1rem", { lineHeight: "1.6" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        sharp: "0.125rem",
      },
      spacing: {
        "section": "6rem",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "rgb(var(--on-surface))",
            a: {
              color: "rgb(var(--primary))",
              textDecoration: "none",
              borderBottom:
                "1px solid rgb(var(--primary) / 0.4)",
              transition: "border-color 150ms ease",
              "&:hover": {
                borderColor: "rgb(var(--primary))",
              },
            },
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-newsreader), Georgia, serif",
              color: "rgb(var(--on-surface))",
              letterSpacing: "-0.015em",
            },
            strong: { color: "rgb(var(--on-surface))" },
            code: {
              backgroundColor:
                "rgb(var(--surface-container-highest))",
              color: "rgb(var(--on-surface))",
              padding: "0.15em 0.35em",
              borderRadius: "0.125rem",
              fontSize: "0.9em",
              fontWeight: "400",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            blockquote: {
              fontStyle: "normal",
              borderLeftWidth: "0",
              paddingLeft: "0",
              color: "rgb(var(--on-surface-variant))",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
