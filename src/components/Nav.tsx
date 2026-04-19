"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-5xl sm:mt-6 sm:w-[calc(100%-2.5rem)]">
        {/* Glass Rail — surface-variant @ 60% + heavy blur */}
        <nav className="flex items-center justify-between rounded-sharp bg-surface-variant/60 px-5 py-3 backdrop-blur-2xl supports-[backdrop-filter]:bg-surface-variant/40 sm:px-6">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-tight text-on-surface"
            aria-label="Home"
          >
            {site.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname ?? "", item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-2 py-1 text-sm transition-colors sm:px-3 ${
                      active
                        ? "text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {active && (
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    )}
                    <span className={active ? "font-serif" : ""}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
