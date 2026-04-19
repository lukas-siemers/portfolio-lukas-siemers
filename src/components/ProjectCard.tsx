import type { Project } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-border p-5 transition-colors hover:border-fg/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-fg">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live
          </a>
        )}
      </div>
    </article>
  );
}
