import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  const grouped = projects.reduce<Record<number, typeof projects>>(
    (acc, p) => {
      (acc[p.year] ??= []).push(p);
      return acc;
    },
    {},
  );
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-muted">Selected things I&apos;ve built.</p>
      </header>

      {years.map((year) => (
        <section key={year}>
          <h2 className="mb-4 font-mono text-sm text-muted">{year}</h2>
          <div className="grid gap-4">
            {grouped[year].map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
