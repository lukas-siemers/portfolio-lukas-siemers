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
    title: "CMMS — Enterprise maintenance platform",
    tagline:
      "Full-stack work on the platform that runs Herzog's maintenance operations.",
    description:
      "Built features across an enterprise CMMS that runs invoices, assets, purchase orders, work orders, schedules, defects, and PowerBI reporting. Migrated a legacy Transit application, its features and database schemas, into the platform. Shipped a multi-level Bill of Materials module for the R&D team. When Azure suspended our outbound email mid-release, architected a rapid migration to a RabbitMQ message queue to recover thousands of unsent messages.",
    stack: ["Angular", "TypeScript", "C#", ".NET", "SQL", "Azure", "RabbitMQ"],
    links: {},
    year: 2026,
    kind: "work",
    featured: true,
  },
  {
    slug: "ebus-spreadlogs",
    title: "EBUS — Spreadlogs feature",
    tagline:
      "End-to-end design and build of a feature that eliminated a tool-switching pain point.",
    description:
      "Designed and shipped the Spreadlogs feature end-to-end, from DB schema to architecture to frontend, so operators no longer had to switch between EBUS and a separate application to upload data. Built as a hybrid WinForms/WPF solution with MVVM to drop a modern XAML frontend into a legacy WinForms host. Tracked down a YAML configuration bug that was caching and overwriting stored settings. The kind of thing that takes hours to find and minutes to fix.",
    stack: ["C#", "WPF", "WinForms", "XAML", "C++", "SQL"],
    links: {},
    year: 2025,
    kind: "work",
  },
  {
    slug: "ebus-legacy",
    title: "EBUS — Legacy stabilization",
    tagline: "Maintenance and debugging on a load-bearing legacy application.",
    description:
      "Ongoing work on a WinForms application that's critical to railroad operations. UI fixes, backend bug hunts, and stability improvements. Less glamorous than greenfield, but it's where I learned the system inside out. That knowledge made every later project faster.",
    stack: ["C#", "WinForms", "WPF", "C++"],
    links: {},
    year: 2025,
    kind: "work",
  },
  {
    slug: "gpstie",
    title: "GPSTIE — Cross-platform tie-dropping app",
    tagline:
      "Replaced an obsolete hardware system with a tablet-and-laptop solution for railroad crews.",
    description:
      "Cross-platform desktop app for tie-dropping operations. Two operators can share a job over RF, see each other's drops on a live map, and stay in sync across devices. Built a statistics dashboard and an automatic GPS failover so accuracy doesn't degrade when signal drops mid-run.",
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
    links: {
      github: "https://github.com/lukas-siemers/Zentrum",
    },
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
