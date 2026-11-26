import Link from "next/link";
import { Database, MapPin, Monitor } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="space-y-section">
      {/* ---------- HERO ---------- */}
      <section className="pt-10 sm:pt-16">
        {/* Name on left, Einstein quote on right — paired editorial masthead. */}
        <div className="grid grid-cols-12 items-end gap-x-8 gap-y-10">
          <h1 className="col-span-12 font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:col-span-8 md:text-display-2xl">
            <BlurText text="Lukas" as="span" stagger={70} duration={0.9} />
            <br />
            <span className="ml-10 text-primary-container sm:ml-20 md:ml-32">
              <BlurText
                text="Siemers."
                as="span"
                stagger={70}
                startDelay={0.35}
                duration={0.9}
              />
            </span>
          </h1>
        </div>
        {/* Headshot + bio/CTA row, sits beneath the hero headline. */}
        <div className="mt-16 flex flex-col items-start gap-10 md:flex-row md:items-end md:gap-14">
          <img
            src={images.profile.headshot}
            alt="Headshot of Lukas Siemers"
            className="h-40 w-40 shrink-0 object-cover sm:h-56 sm:w-56"
          />
          <div className="max-w-xl">
            <p className="text-body-lg leading-relaxed text-on-surface/90">
              {site.shortBio}
            </p>
            <p className="mt-8">
              <StarBorder className="rounded-xl" color="white" speed="6s">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-surface-container-low px-7 py-3.5 text-base font-medium text-primary-container transition-colors hover:bg-surface-container"
                >
                  Get in touch
                  <span aria-hidden>→</span>
                </a>
              </StarBorder>
            </p>
          </div>
        </div>

<div className="mt-24 flex justify-center">
    <aside className="max-w-xl text-center">
            <blockquote className="font-serif italic text-on-surface text-body-lg leading-snug sm:text-headline-sm">
              &ldquo;Make everything{" "}
              <span className="text-primary-container">
                as simple as possible
              </span>
              , but not simpler.&rdquo;
            </blockquote>
            <p className="label-sm mt-4">Albert Einstein</p>
          </aside>
</div>

      </section>

      {/* ---------- DISCIPLINES BENTO ---------- */}
      <section>
        <div className="mb-10">
          <p className="label-md">Disciplines</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* 01 — Data & systems (lead card, 7 cols) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container-high p-10 transition-colors hover:bg-surface-container-highest md:col-span-7">
            <Database
              className="absolute -right-6 -top-4 h-48 w-48 text-primary/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="label-md text-primary">01 / Data</p>
              <h3 className="mt-4 font-serif italic text-on-surface text-headline-md sm:text-display-md">
                Data &amp; systems.
              </h3>
              <p className="mt-6 max-w-md text-body-md leading-relaxed text-on-surface-variant">
                Schemas, migrations, integrations. The long-lived layer:
                domain models, the contracts between services, the data that
                outlasts whatever UI sits on top of it.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["SQL Server", ".NET", "Azure", "Integrations"].map((t) => (
                  <span
                    key={t}
                    className="rounded-sharp bg-surface-container px-2.5 py-1 font-mono text-xs text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* 02 — Interfaces (5 cols) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container-high p-10 transition-colors hover:bg-surface-container-highest md:col-span-5">
            <Monitor
              className="absolute -right-4 -top-4 h-40 w-40 text-primary/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="label-md text-primary">02 / Interfaces</p>
              <h3 className="mt-4 font-serif italic text-on-surface text-headline-md">
                Interfaces.
              </h3>
              <p className="mt-6 max-w-sm text-body-md leading-relaxed text-on-surface-variant">
                Web, mobile, desktop, and field apps. Angular in the office,
                MAUI and WPF trackside, React Native and SwiftUI on the
                App Store side.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Angular", ".NET MAUI", "React Native", "SwiftUI"].map((t) => (
                  <span
                    key={t}
                    className="rounded-sharp bg-surface-container px-2.5 py-1 font-mono text-xs text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* 03 — Tooling & AI (full width, HiveDeck logo on right) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container p-10 transition-colors hover:bg-surface-container-high md:col-span-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
              <div className="flex-1">
                <p className="label-md text-primary">03 / Tooling</p>
                <h3 className="mt-4 font-serif italic text-on-surface text-headline-md sm:text-display-md">
                  Tooling &amp; AI.
                </h3>
                <p className="mt-6 max-w-xl text-body-md leading-relaxed text-on-surface-variant">
                  I write the AI agent conventions my team codes by and build
                  AI tools that automate customer support. On my own time I
                  co-develop <span className="text-on-surface">HiveDeck</span>,
                  where teams work alongside AI coding agents in one shared
                  room.
                </p>
                <a
                  href={site.hivedeck.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rule-hairline mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
                >
                  Visit hivedeck.app
                </a>
              </div>
              <div className="flex aspect-square w-full shrink-0 items-center justify-center rounded-sharp bg-black p-4 md:w-56">
                <img
                  src={images.logos.hivedeck}
                  alt="HiveDeck logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </article>

          {/* 04 — Forward deployed (full width) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container-high p-10 transition-colors hover:bg-surface-container-highest md:col-span-12">
            <MapPin
              className="absolute -right-4 -top-4 h-40 w-40 text-primary/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="label-md text-primary">04 / Forward deployed</p>
              <h3 className="mt-4 font-serif italic text-on-surface text-headline-md sm:text-display-md">
                Forward Deployed Engineer.
              </h3>
              <p className="mt-6 max-w-xl text-body-md leading-relaxed text-on-surface-variant">
                Close to the people using the software. I take production
                escalations, turn customer problems into fixes and
                automation, and build tools for crews working out in the
                field.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Production support", "Integrations", "Automation", "Field software"].map((t) => (
                  <span
                    key={t}
                    className="rounded-sharp bg-surface-container px-2.5 py-1 font-mono text-xs text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- FEATURED WORK ---------- */}
      <section>
        <div className="mb-10 flex items-end justify-between gap-6">
          <p className="label-md">Featured projects</p>
          <Link
            href="/projects"
            className="rule-hairline text-xs font-medium uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
          >
            All work
          </Link>
        </div>

        <div className="space-y-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
