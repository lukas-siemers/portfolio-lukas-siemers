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
    <article>
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All posts
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-2 font-mono text-sm text-muted">{post.date}</p>
      </header>

      <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent prose-code:rounded prose-code:bg-border/40 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
