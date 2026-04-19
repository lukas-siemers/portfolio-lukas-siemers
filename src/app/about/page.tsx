import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="space-y-section">
      {/* Editorial masthead — statement as headline, "About" as small label above */}
      <section className="grid grid-cols-12 gap-y-10 pt-8 sm:pt-16">
        <div className="col-span-12 md:col-span-10">
          <p className="label-md mb-6">About</p>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
            Building software for the physical world.
          </h1>
        </div>
      </section>

      {/* Body — offset right, narrow column, Inter body with 1.6 line-height */}
      <section className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <div className="space-y-6 text-body-lg text-on-surface/90">
            <p>
              I&apos;m a full-stack engineer at Herzog Railroad Services in
              Saint Joseph, Missouri. I build software that runs railroad
              operations — CMMS platforms for fleets and facilities, the tools
              crews use in the field, and the integrations that hold those
              systems together.
            </p>
            <p>
              Before I was an engineer, I was a diesel mechanic. I have an
              associate&apos;s in Diesel Engine Technology from Bishop State
              Community College, then went back to school for a Computer
              Science degree at Missouri Western State, which I finished in
              December 2024. That background isn&apos;t a detour — it&apos;s
              why I&apos;m good at this kind of work. Industrial software is
              full of edge cases that only make sense if you&apos;ve stood
              next to the machine.
            </p>
            <p>
              Day to day I work across .NET, C#, MAUI, WPF, WinForms,
              TypeScript, Angular, and SQL. I like the parts most people
              don&apos;t: migrating legacy systems without breaking them,
              tracking down production incidents, designing schemas that
              won&apos;t paint you into a corner two years from now. I&apos;m
              less interested in trends and more interested in shipping things
              that work.
            </p>
            <p>
              I grew up speaking German, learned English well enough to work
              in it, and picked up some French along the way. If you want to
              talk in any of those, I&apos;m around.
            </p>
          </div>
        </div>
      </section>

      {/* Currently — label + asymmetric list, no bullets, no borders */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Currently</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <ul className="space-y-5 text-body-lg text-on-surface/90">
            <li>
              Building enterprise CMMS and railroad operations software at
              Herzog.
            </li>
            <li>Sharpening my eye for system architecture and database design.</li>
            <li>Trying to write more — hence this site.</li>
          </ul>
        </div>
      </section>

      {/* Elsewhere */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Elsewhere</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <ul className="space-y-4 text-body-lg">
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-on-surface transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-on-surface transition-colors hover:text-primary"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
