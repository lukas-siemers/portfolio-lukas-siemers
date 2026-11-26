export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
    website?: string;
    appStore?: string;
    writeup?: string;
  };
  year: number;
  /** Optional short label shown in place of the year (e.g., "Live", "In progress"). */
  status?: string;
  kind: "work" | "personal";
  featured?: boolean;
};

/*
  Work projects are described at the same level of detail as the public
  resume — no customer internals, no code, no screenshots. Safe to publish.
*/
export const projects: Project[] = [
  {
    slug: "cmms-transit",
    title: "CMMS — Maintenance Management",
    tagline:
      "Full-stack feature work on a maintenance platform used by transit agencies.",
    description:
      "Work across the web UI, APIs, and database, including integrations with other systems and release ownership.",
    stack: ["C#", ".NET", "Angular", "TypeScript", "SQL Server"],
    links: {},
    year: 2026,
    status: "Oct 2025 – Present",
    kind: "work",
    featured: true,
  },
  {
    slug: "support-automation",
    title: "Support Automation — Own initiative",
    tagline: "AI-assisted tooling that takes the busywork out of customer support.",
    description:
      "Tooling that automates support intake, helps developers work through customer issues, and keeps reporting up to date, with a developer reviewing anything AI drafts.",
    stack: ["Python", "Playwright", "Docker", "n8n", "AI"],
    links: {},
    year: 2026,
    kind: "work",
  },
  {
    slug: "ebus",
    title: "EBUS — Electronic Ballast Unloading",
    tagline:
      "Feature and modernization work on software that runs ballast train unloading.",
    description:
      "Delivered new features end to end and helped modernize a long-running desktop application without a full rewrite.",
    stack: ["C#", "WinForms", "WPF", "C++", "SQLite"],
    links: {},
    year: 2025,
    kind: "work",
  },
  {
    slug: "gps-tie",
    title: "GPS Tie — Tie-Car Unloading",
    tagline:
      "Tablet app that guides rail tie-car crews with live GPS.",
    description:
      "Built features for GPS-guided field work, designed to keep working when conditions out on the track are less than ideal.",
    stack: ["C#", ".NET MAUI", "SQLite", "MVVM"],
    links: {},
    year: 2025,
    kind: "work",
  },

  /* -------------------- PERSONAL -------------------- */
  {
    slug: "hivedeck",
    title: "HiveDeck — Your agents. Your teammates. One room.",
    tagline:
      "Desktop app where teams work alongside AI coding agents in shared real-time sessions. Co-developer.",
    description:
      "Teammates bring their own Claude Code and Codex agents into one shared room, running on their own machines and accounts. I've built authentication, real-time collaboration features, and signed releases for macOS, Windows, and Linux ahead of closed beta.",
    stack: ["TypeScript", "Electron", "React", "Supabase"],
    links: {
      website: "https://hivedeck.app",
    },
    year: 2026,
    status: "Early access",
    kind: "personal",
    featured: true,
  },
  {
    slug: "loopy",
    title: "Loopy — Ring Puzzle",
    tagline: "A one-handed block puzzle on a round board. Fill rings, make them fall.",
    description:
      "A native SwiftUI game: drag curved pieces onto five rings, clear full rings and spokes, and watch the blocks above fall inward into chain reactions. Includes a hand-checked Daily Puzzle and Game Center trophies, and plays offline with no account.",
    stack: ["Swift", "SwiftUI", "StoreKit", "Game Center", "iOS"],
    links: {
      website: "https://lukas-siemers.github.io/loopy/",
    },
    year: 2026,
    status: "In App Store review",
    kind: "personal",
    featured: true,
  },
  {
    slug: "ten-again",
    title: "Ten Again — Number puzzle",
    tagline: "Drag through neighboring tiles to make exactly ten while the board keeps rising.",
    description:
      "An iOS puzzle game designed, built, and published solo. One-thumb drag controls with haptics, combo scoring, and rising difficulty.",
    stack: ["iOS", "React Native", "Expo", "TypeScript", "Reanimated"],
    links: {
      appStore: "https://apps.apple.com/us/app/tenagain/id6788188428",
    },
    year: 2026,
    status: "Live",
    kind: "personal",
    featured: true,
  },
  {
    slug: "spotsaved",
    title: "SpotSaved — Never lose your car again",
    tagline:
      "iOS app for remembering where you parked. Meter reminder, photo of the spot, walks you back.",
    description:
      "A native iOS app built on nights and weekends and shipped to the App Store. Fully offline by design: no accounts, no servers, no tracking. State and photos live on the device, where they belong.",
    stack: ["iOS", "React Native", "Expo", "TypeScript", "Zustand"],
    links: {
      appStore: "https://apps.apple.com/us/app/spotsaved/id6759891985",
    },
    year: 2026,
    status: "Live",
    kind: "personal",
    featured: true,
  },
  {
    slug: "lukassiemers-com",
    title: "lukassiemers.com — Self-hosted on a Raspberry Pi",
    tagline:
      "This site, designed and built from scratch and self-hosted out of my home.",
    description:
      "Next.js portfolio with a typographic editorial feel, blur-in animations on every masthead, and a static-export build so there's no Node runtime to run. Self-hosted on a Raspberry Pi 4 over a Cloudflare Tunnel with no port forwarding, no inbound exposure, TLS terminated at Cloudflare's edge and plain HTTP inside a Docker network. Two containers on the Pi: Caddy serves the built `out/` folder, cloudflared keeps an outbound tunnel open. Updates are one `npm run build` and an `scp -r out` away.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "Caddy",
      "Cloudflare Tunnel",
      "Raspberry Pi",
    ],
    links: {
      live: "https://lukassiemers.com",
      github: "https://github.com/lukas-siemers/portfolio-lukas-siemers",
    },
    year: 2026,
    status: "Live",
    kind: "personal",
  },
  {
    slug: "zentrum",
    title: "Zentrum — Safety incident platform",
    tagline:
      "Incident reporting, investigation, CAPA, and recurrence tracking, built end-to-end under a hackathon deadline.",
    description:
      "Full-stack safety and incident management system: submit reports, run investigations, track corrective and preventive actions, and surface recurrence patterns on a dashboard. Built end-to-end against a hackathon clock for Herzog's Prompt-A-Palooza and placed 2nd. Auth, migrations, testing, and a one-command Docker spin-up all done inside the window.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Postgres",
      "Drizzle",
      "Playwright",
      "Docker",
    ],
    links: {},
    year: 2026,
    status: "2nd place",
    kind: "personal",
  },
  {
    slug: "graphite",
    title: "Graphite — Cross-platform notes",
    tagline: "A notetaking app that works the same everywhere I do.",
    description:
      "One notetaking app for every surface I actually use: desktop and mobile, with Apple Pencil drawings and typed text living side by side in the same note and syncing across devices. A shared codebase underneath, and a release pipeline that ships binaries on every push. Still in progress, and the public repo is where the thinking happens.",
    stack: [
      "Electron",
      "Expo",
      "React",
      "TypeScript",
      "Zustand",
      "Supabase",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/lukas-siemers/Graphite",
    },
    year: 2026,
    status: "In progress",
    kind: "personal",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getWorkProjects(): Project[] {
  return projects.filter((p) => p.kind === "work");
}

export function getPersonalProjects(): Project[] {
  return projects.filter((p) => p.kind === "personal");
}
