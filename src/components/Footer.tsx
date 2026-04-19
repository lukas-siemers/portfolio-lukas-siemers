import { site } from "@/lib/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.socials.github}
            aria-label="GitHub"
            className="transition-colors hover:text-fg"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.socials.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-fg"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-fg"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
