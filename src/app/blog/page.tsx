import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about software, tools, and things I've learned.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted">
          Writing about software, tools, and things I&apos;ve learned.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet — check back soon.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-border pb-4 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm text-muted">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
