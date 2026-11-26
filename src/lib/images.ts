
export const images = {
  og: {
    default: "/images/og/default.png",
  },
  profile: {
    headshot: "/images/Headshot-cutout.png",
  },
  logos: {
    hivedeck: "/images/HiveDeck.png",
  },
  projects: {
    cmms: "/images/projects/cmms.webp",
    gpstie: "/images/projects/gpstie.webp",
    ebusSpreadlogs: "/images/projects/ebus-spreadlogs.webp",
    ebusLegacy: "/images/projects/ebus-legacy.webp",
  },
} as const;

export type ImageKey = typeof images;
