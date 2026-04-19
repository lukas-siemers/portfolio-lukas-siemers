import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent">
      <h1>About</h1>
      <p>
        Hi, I&apos;m {site.name}. I&apos;m a {site.role.toLowerCase()} based in{" "}
        {site.location}.
      </p>

      <p>
        Replace this page with a real about section. A good personal about page
        usually covers: what you work on, what kinds of problems you enjoy, a
        few things about you that aren&apos;t work, and how to get in touch. It
        does not need to be long — two or three short paragraphs is plenty.
      </p>

      <h2>Currently</h2>
      <ul>
        <li>Building things at [Company / independently]</li>
        <li>Learning [a technology / a topic you&apos;re into]</li>
        <li>Reading [a book or a paper]</li>
      </ul>

      <h2>Previously</h2>
      <ul>
        <li>
          <strong>[Role]</strong> at [Company] — one sentence about impact
        </li>
        <li>
          <strong>[Role]</strong> at [Company] — one sentence about impact
        </li>
      </ul>

      <h2>Elsewhere</h2>
      <ul>
        <li>
          <a href={site.socials.github}>GitHub</a>
        </li>
        <li>
          <a href={site.socials.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={`mailto:${site.email}`}>Email</a>
        </li>
      </ul>
    </article>
  );
}
