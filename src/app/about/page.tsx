import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="space-y-section">
      {/* ---------- MASTHEAD ---------- */}
      <section className="pt-10 sm:pt-16">
        <h1 className="font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:text-display-2xl">
          Building software
          <br />
          <span className="ml-10 sm:ml-20 md:ml-32">
            for the physical world
            <span className="text-primary-container">.</span>
          </span>
        </h1>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12">
          <div className="max-w-4xl space-y-6 text-body-lg text-on-surface/90">
            <p>
              I&apos;m a full-stack engineer at Herzog Railroad Services in
              Saint Joseph, Missouri. I build software that runs railroad
              operations: CMMS platforms for fleets and facilities, the tools
              crews use in the field, and the integrations that hold those
              systems together.
            </p>
            <p>
              I studied engines before I studied software. Associate&apos;s in
              Diesel Engine Technology from Bishop State Community College,
              then a CS degree from Missouri Western State in December 2024.
              The two degrees sit closer together than they look. Industrial
              software is mostly edge cases, and edge cases make more sense
              when you&apos;ve pulled the hardware apart.
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
            <li>
              Shipping side projects under T5 on nights and weekends.
            </li>
            <li>
              Sharpening my eye for system architecture and database design.
            </li>
            <li>Trying to write more. Hence this site.</li>
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
