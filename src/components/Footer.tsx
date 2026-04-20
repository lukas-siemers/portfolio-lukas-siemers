import { Mail, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pb-10 pt-16 sm:px-10">
        {/* Social icons */}
        <div className="flex items-center gap-10">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Lukas"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-container hover:text-on-primary-container"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-container hover:text-on-primary-container"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-container hover:text-on-primary-container"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Year */}
        <p className="label-sm">© {year}</p>
      </div>
    </footer>
  );
}
