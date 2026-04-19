import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="space-y-section">
      {/* Back link */}
      <div className="pt-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All writing
        </Link>
      </div>

      {/* Masthead */}
      <header className="grid grid-cols-12 gap-y-6 pt-4">
        <div className="col-span-12 md:col-span-10">
          <p className="label-md mb-6">{post.date}</p>
          <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
            {post.title}
          </h1>
        </div>
        {post.description && (
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-body-lg text-on-surface-variant">
              {post.description}
            </p>
          </div>
        )}
      </header>

      {/* Body — narrow column, offset right, editorial rhythm */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <div className="prose prose-invert max-w-none text-body-lg">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </div>
    </article>
  );
}
