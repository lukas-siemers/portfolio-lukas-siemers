import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted">{site.role}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fg/90">
          {site.shortBio}
        </p>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Featured projects</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-medium">Recent writing</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
            >
              All posts <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="mt-6 space-y-3">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-border pb-3"
                >
                  <span className="font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
