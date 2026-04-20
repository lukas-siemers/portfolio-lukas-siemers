import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import {
  getWorkProjects,
  getPersonalProjects,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected engineering work and private projects.",
};

export default function ProjectsPage() {
  const work = getWorkProjects();
  const personal = getPersonalProjects();

  return (
    <div className="space-y-section">
      {/* ---------- MASTHEAD ---------- */}
      <section className="pt-10 sm:pt-16">
        <h1 className="font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:text-display-2xl">
          Projects
          <span className="text-primary-container">.</span>
        </h1>
      </section>

      {/* ---------- 01 / WORK ---------- */}
      <section>
        <div className="mb-10 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-9">
            <p className="label-md text-primary">01 / Work</p>
            <h2 className="mt-3 font-serif italic tracking-tight text-display-md text-on-surface sm:text-display-lg md:text-display-xl">
              At Herzog.
            </h2>
          </div>
          <p className="label-sm col-span-12 md:col-span-3 md:text-right">
            Railroad Services
          </p>
        </div>

        {work.length > 0 ? (
          <div className="space-y-6">
            {work.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-body-md text-on-surface-variant">
            No entries yet.
          </p>
        )}
      </section>

      {/* ---------- 02 / PRIVATE ---------- */}
      <section>
        <div className="mb-10 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-9">
            <p className="label-md text-primary">02 / Private</p>
            <h2 className="mt-3 font-serif italic tracking-tight text-display-md text-on-surface sm:text-display-lg md:text-display-xl">
              On the side.
            </h2>
          </div>
          <p className="label-sm col-span-12 md:col-span-3 md:text-right">
            Nights &amp; weekends
          </p>
        </div>

        {personal.length > 0 ? (
          <div className="space-y-6">
            {personal.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-sharp bg-surface-container-low p-8 sm:p-10">
            <p className="max-w-xl text-body-md leading-relaxed text-on-surface-variant">
              T5 and other private work are taking shape. In the meantime,
              this site itself is the most current sample of how I write
              code:{" "}
              <a
                href="https://github.com/lukas-siemers/lukas-portfolio"
                className="text-on-surface underline-offset-4 transition-colors hover:text-primary"
              >
                source on GitHub
              </a>
              .
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
