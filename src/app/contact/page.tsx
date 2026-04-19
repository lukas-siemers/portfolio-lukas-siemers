import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}`,
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-muted">
          The fastest way to reach me is email. I usually reply within a couple
          of days.
        </p>
      </header>

      <ul className="space-y-3">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-fg/20"
          >
            <Mail className="h-4 w-4 text-muted transition-colors group-hover:text-fg" />
            <span className="font-mono text-sm">{site.email}</span>
          </a>
        </li>
        <li>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-fg/20"
          >
            <Github className="h-4 w-4 text-muted transition-colors group-hover:text-fg" />
            <span className="font-mono text-sm">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:border-fg/20"
          >
            <Linkedin className="h-4 w-4 text-muted transition-colors group-hover:text-fg" />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
