import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}`,
};

export default function ContactPage() {
  return (
    <div className="space-y-section">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-y-10 pt-8 sm:pt-16">
        <div className="col-span-12 md:col-span-9">
          <p className="label-md mb-6">Contact</p>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
            Say hello
            <span className="text-primary">.</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-body-lg text-on-surface-variant">
            Email is the fastest. I usually reply within a couple of days.
          </p>
        </div>
      </section>

      {/* Primary CTA — the ONE gradient element on this page */}
      <section>
        <a
          href={`mailto:${site.email}`}
          className="gradient-primary shadow-bloom group flex flex-col rounded-sharp py-8 pl-10 pr-6 text-on-primary transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="label-md text-on-primary/70">Email</p>
            <p className="mt-2 font-serif text-headline-sm sm:text-headline-md">
              {site.email}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium sm:mt-0"
          >
            Compose <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </a>
      </section>

      {/* Secondary — ghost-border style, no gradient */}
      <section className="grid gap-5 sm:grid-cols-2">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noreferrer"
          className="ghost-border group flex items-center justify-between rounded-sharp bg-surface-container-lowest py-6 pl-8 pr-6 transition-colors hover:bg-surface-container-low"
        >
          <div>
            <p className="label-md">GitHub</p>
            <p className="mt-2 font-serif text-headline-sm text-on-surface">
              @lukas-siemers
            </p>
          </div>
          <Github className="h-5 w-5 text-on-surface-variant transition-colors group-hover:text-primary" />
        </a>

        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="ghost-border group flex items-center justify-between rounded-sharp bg-surface-container-lowest py-6 pl-8 pr-6 transition-colors hover:bg-surface-container-low"
        >
          <div>
            <p className="label-md">LinkedIn</p>
            <p className="mt-2 font-serif text-headline-sm text-on-surface">
              Lukas Siemers
            </p>
          </div>
          <Linkedin className="h-5 w-5 text-on-surface-variant transition-colors group-hover:text-primary" />
        </a>
      </section>

      {/* Footnote */}
      <section className="grid grid-cols-12 gap-y-4">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Based in</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <p className="text-body-lg text-on-surface/90">
            {site.location} · Central Time.
          </p>
          <p className="mt-1 text-body-md text-on-surface-variant">
            English, German, some French.
          </p>
        </div>
      </section>

    </div>
  );
}
