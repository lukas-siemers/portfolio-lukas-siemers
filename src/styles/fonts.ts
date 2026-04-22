/*
  All fonts live here. To swap or add a font:
    1. Import from "next/font/google" (or "next/font/local")
    2. Add it to one of the exports below, wiring a CSS variable
    3. Reference that variable in tailwind.config.ts `fontFamily`

  The CSS variables get applied to <html> in src/app/layout.tsx.
*/
import { Inter, Newsreader } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Combined className for easy spreading onto <html>
export const fontVariables = `${inter.variable} ${newsreader.variable}`;
