import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-surface-container-lowest">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="font-serif text-headline-sm text-on-surface">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-body-md text-on-surface-variant">
              {site.role} · {site.location}
            </p>
          </div>

          <nav aria-label="Elsewhere" className="sm:justify-self-end">
            <p className="label-md mb-4">Elsewhere</p>
            <ul className="space-y-2 text-body-md">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-on-surface transition-colors hover:text-primary"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex items-center justify-between">
          <p className="label-md">© {new Date().getFullYear()}</p>
          <Link
            href="/"
            className="label-md transition-colors hover:text-on-surface"
          >
            Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
