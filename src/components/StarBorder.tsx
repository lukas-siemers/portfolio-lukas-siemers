"use client";

/*
  StarBorder — animated shooting-star rim.
  Adapted from reactbits.dev/animations/star-border.

  Wraps any inline content with a thin, rounded rim whose two gradients
  travel along the top and bottom edges. The inner content provides its
  own background, which masks the gradients everywhere except the rim.

  Usage:
    <StarBorder className="rounded-xl">
      <a className="... bg-surface-container-low px-7 py-3.5 rounded-xl">...</a>
    </StarBorder>

  Keyframes live in styles/theme.css (star-movement-top / -bottom).
*/

import type { ReactNode } from "react";

export interface StarBorderProps {
  /** CSS color for the star gradients. Defaults to white. */
  color?: string;
  /** CSS animation-duration. Slower = calmer. Defaults to "6s". */
  speed?: string;
  /** Pixel thickness of the visible rim. Defaults to 1. */
  thickness?: number;
  /** Applied to the wrapper — use for border-radius, margin, etc. */
  className?: string;
  children: ReactNode;
}

export default function StarBorder({
  color = "white",
  speed = "6s",
  thickness = 1,
  className = "",
  children,
}: StarBorderProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ padding: `${thickness}px 0` }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-[-11px] right-[-250%] z-0 h-1/2 w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: "star-movement-bottom linear infinite alternate",
          animationDuration: speed,
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[-250%] top-[-10px] z-0 h-1/2 w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: "star-movement-top linear infinite alternate",
          animationDuration: speed,
        }}
      />
      <span className="relative z-10 inline-block">{children}</span>
    </span>
  );
}
