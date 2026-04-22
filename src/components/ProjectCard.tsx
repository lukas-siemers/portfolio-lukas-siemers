import type { Project } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

/*
  No borders. Surface-container-low panel on the page surface to create
  a "carved-out" feel. Asymmetric padding (pl-10 pr-6) for editorial rhythm.
*/
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-sharp bg-surface-container-low py-7 pl-6 pr-5 transition-colors hover:bg-surface-container sm:py-8 sm:pl-10 sm:pr-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-9">
          <h3 className="font-serif text-headline-sm text-on-surface sm:text-headline-md">
            {project.title}
          </h3>
          <p className="mt-2 text-body-md text-on-surface-variant">
            {project.tagline}
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 sm:text-right">
          {project.status ? (
            <>
              <p
                className={`label-md ${
                  project.status === "Live"
                    ? "inline-flex items-center gap-1.5 text-red-500"
                    : "text-primary"
                }`}
              >
                {project.status === "Live" && (
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"
                  />
                )}
                {project.status}
              </p>
              <p className="label-sm mt-1">{project.year}</p>
            </>
          ) : (
            <p className="label-md">{project.year}</p>
          )}
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-body-md leading-relaxed text-on-surface/85">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-sharp bg-surface-container px-2.5 py-1 font-mono text-xs text-on-surface-variant"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links.github || project.links.live || project.links.writeup) && (
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
          )}
          {project.links.writeup && (
            <a
              href={project.links.writeup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary"
            >
              Write-up
            </a>
          )}
        </div>
      )}
    </article>
  );
}
