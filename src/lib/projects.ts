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
      "Built features across an enterprise CMMS used to manage invoices, assets, purchase orders, work orders, schedules, defects, and PowerBI reporting. Led the migration of a legacy Transit application's features and database schemas into the platform. Shipped a Bill of Materials module supporting multi-level parent/child material relationships for the R&D team. Managed concurrent v1.7 / v1.8 development across four environments via CI/CD. When Azure suspended our outbound email mid-cycle, architected a rapid migration to a RabbitMQ message queue to recover thousands of unsent emails.",
    stack: ["Angular", "TypeScript", "C#", ".NET", "SQL", "Azure", "RabbitMQ"],
    links: {},
    year: 2026,
    kind: "work",
    featured: true,
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
  {
    slug: "ebus-spreadlogs",
    title: "EBUS — Spreadlogs feature",
    tagline:
      "End-to-end design and build of a feature that eliminated a tool-switching pain point.",
    description:
      "Designed and shipped the Spreadlogs feature end-to-end — DB schema, architecture, frontend — so operators no longer had to switch between EBUS and a separate application to upload data. Built as a hybrid WinForms/WPF solution with MVVM to drop a modern XAML frontend into a legacy WinForms host. Tracked down a YAML configuration bug that was caching and overwriting stored settings — the kind of thing that takes hours to find and minutes to fix.",
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
      "Ongoing work on a WinForms application that's critical to railroad operations. UI fixes, backend bug hunts, and stability improvements. Less glamorous than greenfield, but it's where I learned the system inside out — which made every later project faster.",
    stack: ["C#", "WinForms", "WPF", "C++"],
    links: {},
    year: 2025,
    kind: "work",
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
