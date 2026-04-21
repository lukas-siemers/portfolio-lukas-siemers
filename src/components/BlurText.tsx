"use client";

import { motion } from "framer-motion";

type Direction = "top" | "bottom";

interface BlurTextProps {
  /** The text to animate. Spaces are treated as word boundaries. */
  text: string;
  /** Element to render as. Defaults to span. */
  as?: "span" | "div";
  /** Animate per word or per letter. Defaults to "letters". */
  animateBy?: "words" | "letters";
  /** Stagger between segments in ms. Defaults to 60. */
  stagger?: number;
  /** Delay before the animation starts, in seconds. Defaults to 0. */
  startDelay?: number;
  /** Duration of each segment's reveal, in seconds. Defaults to 0.8. */
  duration?: number;
  /** Direction the text drifts in from. Defaults to "top". */
  direction?: Direction;
  /** Optional className applied to the wrapper. */
  className?: string;
}

/**
 * Editorial blur-in text reveal. Each segment fades and unblurs
 * into place with a gentle stagger.
 */
export default function BlurText({
  text,
  as: Tag = "span",
  animateBy = "letters",
  stagger = 60,
  startDelay = 0,
  duration = 0.8,
  direction = "top",
  className,
}: BlurTextProps) {
  const segments =
    animateBy === "words" ? text.split(/(\s+)/) : Array.from(text);
  const fromY = direction === "top" ? -14 : 14;

  return (
    <Tag className={className} aria-label={text}>
      {segments.map((seg, i) => {
        // Preserve whitespace without animating it.
        if (/^\s+$/.test(seg)) {
          return (
            <span key={`sp-${i}`} aria-hidden style={{ whiteSpace: "pre" }}>
              {seg}
            </span>
          );
        }
        return (
          <motion.span
            key={`${seg}-${i}`}
            aria-hidden
            initial={{ filter: "blur(12px)", opacity: 0, y: fromY }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: startDelay + (i * stagger) / 1000,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block", willChange: "filter, transform" }}
          >
            {seg}
          </motion.span>
        );
      })}
    </Tag>
  );
}
