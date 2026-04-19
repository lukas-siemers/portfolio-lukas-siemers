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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sample-project-one",
    title: "Sample Project One",
    tagline: "A short, punchy description of what it does.",
    description:
      "Replace this with a real project. A good entry answers: what problem it solves, how you built it, and one thing that was interesting or hard. Two to three sentences is plenty.",
    stack: ["TypeScript", "Next.js", "Postgres"],
    links: {
      github: "https://github.com/your-github-username/sample-project-one",
      live: "https://example.com",
    },
    year: 2026,
    featured: true,
  },
  {
    slug: "sample-project-two",
    title: "Sample Project Two",
    tagline: "Another thing you built.",
    description:
      "Keep descriptions tight. If you need more space, link to a dedicated writeup in `links.writeup` or a blog post.",
    stack: ["Go", "Redis", "Docker"],
    links: {
      github: "https://github.com/your-github-username/sample-project-two",
    },
    year: 2025,
    featured: true,
  },
  {
    slug: "sample-project-three",
    title: "Sample Project Three",
    tagline: "Older but still representative.",
    description:
      "Older projects are fine — the signal is breadth and trajectory. Order matters though: keep your best work at the top.",
    stack: ["Python", "FastAPI"],
    links: {
      github: "https://github.com/your-github-username/sample-project-three",
    },
    year: 2024,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
