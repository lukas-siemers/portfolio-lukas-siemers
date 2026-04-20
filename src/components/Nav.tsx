"use client";

import { site } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", highlight: true },
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
        <nav className="flex items-center justify-between rounded-2xl bg-surface-variant/40 px-5 py-3 backdrop-blur-2xl supports-[backdrop-filter]:bg-surface-variant/20 sm:px-6">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-tight text-on-surface"
            aria-label="Home"
          >
            {site.name}
            <span className="text-primary"></span>
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname ?? "", item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-2 py-1 text-sm transition-colors sm:px-3 ${
                      "highlight" in item
                        ? "font-medium text-primary-container"
                        : active
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
