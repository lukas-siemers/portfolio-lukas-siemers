import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import {
  getWorkProjects,
  getPersonalProjects,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engineering work and side projects.",
};

export default function ProjectsPage() {
  const work = getWorkProjects();
  const personal = getPersonalProjects();

  return (
    <div className="space-y-section">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-y-10 pt-8 sm:pt-16">
        <div className="col-span-12 md:col-span-9">
          <p className="label-md mb-6">Work</p>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
            Selected engagements
            <span className="text-primary">.</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-body-lg text-on-surface-variant">
            Code is proprietary, so descriptions cover what I built and the
            technical choices — not internals.
          </p>
        </div>
      </section>

      {/* Professional work */}
      {work.length > 0 && (
        <section>
          <div className="mb-8">
            <p className="label-md">Professional · Herzog Railroad Services</p>
          </div>
          <div className="space-y-6">
            {work.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Personal projects */}
      {personal.length > 0 ? (
        <section>
          <div className="mb-8">
            <p className="label-md">Personal projects</p>
          </div>
          <div className="space-y-6">
            {personal.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <p className="label-md">Personal projects</p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <p className="text-body-lg text-on-surface-variant">
              Side projects coming soon. In the meantime, this site itself
              is the most current sample of how I write code —{" "}
              <a
                href="https://github.com/lukas-siemers/lukas-portfolio"
                className="text-on-surface underline-offset-4 transition-colors hover:text-primary"
              >
                source on GitHub
              </a>
              .
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
