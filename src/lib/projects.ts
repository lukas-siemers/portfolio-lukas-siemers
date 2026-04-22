export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
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
    title: "CMMS — Enterprise",
    tagline:
      "Full-stack feature work on a maintenance platform spanning invoicing, assets, scheduling, and reporting.",
    description: "",
    stack: ["Angular", "TypeScript", "C#", ".NET", "SQL", "Azure", "RabbitMQ"],
    links: {},
    year: 2026,
    kind: "work",
    featured: true,
  },
  {
    slug: "ebus-spreadlogs",
    title: "EBUS — Integrated Systems",
    tagline:
      "End-to-end build of a feature that collapsed two tools into one workflow.",
    description: "",
    stack: ["C#", "WPF", "WinForms", "XAML", "C++", "SQL"],
    links: {},
    year: 2025,
    kind: "work",
  },
  {
    slug: "ebus-legacy",
    title: "EBUS — Integrated Systems",
    tagline:
      "Ongoing maintenance, debugging, and reliability work on a critical internal application.",
    description: "",
    stack: ["C#", "WinForms", "WPF", "C++"],
    links: {},
    year: 2025,
    kind: "work",
  },
  {
    slug: "gpstie",
    title: "GPSTIE — Integrated Systems",
    tagline:
      "Tablet-and-laptop solution for two-operator field work in low-signal environments.",
    description: "",
    stack: [".NET MAUI", "C#", "XAML"],
    links: {},
    year: 2025,
    kind: "work",
    featured: true,
  },

  /* -------------------- PERSONAL -------------------- */
  {
    slug: "spotsaved",
    title: "SpotSaved — Never lose your car again",
    tagline:
      "iOS app for remembering where you parked. Meter reminder, photo of the spot, walks you back.",
    description:
      "A native iOS app built on nights and weekends and shipped to the App Store. Fully offline by design: no accounts, no servers, no tracking. State and photos live on the device, where they belong.",
    stack: ["iOS", "React Native", "Expo", "TypeScript", "Zustand"],
    links: {
      live: "https://apps.apple.com/us/app/spotsaved/id6759891985",
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
    featured: true,
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
