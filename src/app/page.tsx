import Link from "next/link";
import { Database, Wrench } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-section">
      {/* ---------- HERO ---------- */}
      <section className="pt-10 sm:pt-16">
        <p className="label-md mb-8">
          {site.role} · {site.location}
        </p>

        {/* Name on left, Einstein quote on right — paired editorial masthead. */}
        <div className="grid grid-cols-12 items-end gap-x-8 gap-y-10">
          <h1 className="col-span-12 font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:col-span-8 md:text-display-2xl">
            Lukas
            <br />
            <span className="ml-10 text-primary-container sm:ml-20 md:ml-32">
              Siemers.
            </span>
          </h1>

          <aside className="col-span-12 md:col-span-4 md:pb-4">
            <blockquote className="font-serif italic text-on-surface text-body-lg leading-snug sm:text-headline-sm">
              &ldquo;Make everything{" "}
              <span className="text-primary-container">
                as simple as possible
              </span>
              , but not simpler.&rdquo;
            </blockquote>
            <p className="label-sm mt-4">— Albert Einstein</p>
          </aside>
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
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-surface-container-low px-7 py-3.5 text-base font-medium text-primary transition-all hover:bg-surface-container hover:-translate-y-0.5"
              >
                Get in touch
                <span aria-hidden>→</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- DISCIPLINES BENTO ---------- */}
      <section>
        <div className="mb-10">
          <p className="label-md">Disciplines</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* 01 — Industrial software (lead card, 7 cols) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container-high p-10 transition-colors hover:bg-surface-container-highest md:col-span-7">
            <Database
              className="absolute -right-6 -top-4 h-48 w-48 text-primary/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="label-md text-primary">01 / Enterprise</p>
              <h3 className="mt-4 font-serif italic text-on-surface text-headline-md sm:text-display-md">
                Industrial software.
              </h3>
              <p className="mt-6 max-w-md text-body-md leading-relaxed text-on-surface-variant">
                CMMS platforms, inventory systems, and the behind-the-scenes
                software that keeps railroad operations running. Long-lived
                systems, real-world consequences.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[".NET", "TypeScript", "Angular", "SQL"].map((t) => (
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

          {/* 02 — Field systems (5 cols) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container-high p-10 transition-colors hover:bg-surface-container-highest md:col-span-5">
            <Wrench
              className="absolute -right-4 -top-4 h-40 w-40 text-primary/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="label-md text-primary">02 / Field</p>
              <h3 className="mt-4 font-serif italic text-on-surface text-headline-md">
                Field systems.
              </h3>
              <p className="mt-6 max-w-sm text-body-md leading-relaxed text-on-surface-variant">
                Apps crews use trackside. MAUI, WPF, WinForms —
                hardware-adjacent software that has to hold up in the field.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[".NET MAUI", "WPF", "C#"].map((t) => (
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

          {/* 03 — Developer tools (full width, icon accent on right) */}
          <article className="group relative col-span-1 overflow-hidden rounded-sharp bg-surface-container p-10 transition-colors hover:bg-surface-container-high md:col-span-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
              <div className="flex-1">
                <p className="label-md text-primary">03 / Side</p>
                <h3 className="mt-4 font-serif italic text-on-surface text-headline-md sm:text-display-md">
                  Developer tools.
                </h3>
                <p className="mt-6 max-w-xl text-body-md leading-relaxed text-on-surface-variant">
                  On the side, I build{" "}
                  <span className="text-on-surface">T5</span> — developer tools
                  for engineers. Engineer, founder, designer, and everything
                  between. It&apos;s where I experiment with how AI is pushing
                  the craft.
                </p>
                <a
                  href={site.t5.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rule-hairline mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
                >
                  View on GitHub
                </a>
              </div>
              <div className="flex aspect-square w-full shrink-0 items-center justify-center rounded-sharp bg-black p-4 md:w-56">
                <img
                  src={images.logos.t5}
                  alt="T5 logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- FEATURED WORK ---------- */}
      <section>
        <div className="mb-10 flex items-end justify-between gap-6">
          <p className="label-md">Featured work</p>
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

      {/* ---------- RECENT WRITING ---------- */}
      {recentPosts.length > 0 && (
        <section>
          <div className="mb-10 flex items-end justify-between gap-6">
            <p className="label-md">Recent writing</p>
            <Link
              href="/blog"
              className="rule-hairline text-xs font-medium uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
            >
              All posts
            </Link>
          </div>

          <ul className="space-y-8">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="grid grid-cols-12 items-baseline gap-4">
                    <h3 className="col-span-9 font-serif italic text-headline-sm text-on-surface transition-colors group-hover:text-primary sm:text-headline-md">
                      {post.title}
                    </h3>
                    <p className="label-md col-span-3 text-right">
                      {post.date}
                    </p>
                  </div>
                  {post.description && (
                    <p className="mt-2 max-w-xl text-body-md text-on-surface-variant">
                      {post.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
