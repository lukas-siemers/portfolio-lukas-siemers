import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import {images} from "@/lib/images";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-section">
      <section className="space-y-5 pt-8 sm:pt-10">
        <div>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg text-primary">
            {site.name}.
          </h1>
                    <p className="label-md mb-6">
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end">
          <img src={images.profile.headshot} alt="Headshot of Lukas Siemers" className="h-40 w-40 shrink-0 object-cover sm:h-60 sm:w-60" />

          <div>
            <p className="text-body-lg text-on-surface/90">{site.shortBio}</p>
            <p className="mt-6">
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

      {/* Featured Work */}
      <section>
        <div className="mb-10 grid grid-cols-12 items-end">
          <p className="label-md col-span-6">Featured work</p>
          <div className="col-span-6 text-right">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-surface-container-low px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-surface-container hover:-translate-y-0.5"
            >
              All work →
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      {recentPosts.length > 0 && (
        <section>
          <div className="mb-10 grid grid-cols-12 items-end">
            <p className="label-md col-span-6">Recent writing</p>
            <div className="col-span-6 text-right">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-container-low px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-surface-container hover:-translate-y-0.5"
              >
                All posts →
              </Link>
            </div>
          </div>

          <ul className="space-y-8">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="grid grid-cols-12 items-baseline gap-4">
                    <h3 className="col-span-9 font-serif text-headline-sm text-on-surface transition-colors group-hover:text-primary sm:text-headline-md">
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
