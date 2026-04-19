import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          {site.name.split(" ")[0].toLowerCase()}.dev
        </Link>
        <ul className="flex items-center gap-5 text-sm text-muted">
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
