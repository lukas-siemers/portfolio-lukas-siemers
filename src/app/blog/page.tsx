import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on software, tools, and things I've learned.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-section">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-y-10 pt-8 sm:pt-16">
        <div className="col-span-12 md:col-span-9">
          <p className="label-md mb-6">Writing</p>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
            Notes, in progress
            <span className="text-primary">.</span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-body-lg text-on-surface-variant">
            Software, tools, things I&apos;ve learned the hard way. Posted
            irregularly.
          </p>
        </div>
      </section>

      {/* Posts — no dividers; whitespace separates */}
      <section>
        {posts.length === 0 ? (
          <p className="text-body-lg text-on-surface-variant">
            No posts yet — check back soon.
          </p>
        ) : (
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="grid grid-cols-12 items-baseline gap-4">
                    <h2 className="col-span-12 font-serif text-headline-sm text-on-surface transition-colors group-hover:text-primary sm:col-span-9 sm:text-headline-md">
                      {post.title}
                    </h2>
                    <p className="label-md col-span-12 sm:col-span-3 sm:text-right">
                      {post.date}
                    </p>
                  </div>
                  {post.description && (
                    <p className="mt-3 max-w-2xl text-body-md text-on-surface-variant">
                      {post.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
