"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
  highlight?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: site.name },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact & CV", highlight: true },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-2xl sm:mt-6 sm:w-[calc(100%-2.5rem)]">
        {/* Glass Rail — surface-variant @ heavy blur.
            Compact pill, centered, with items distributed evenly via justify-between.
            All items share the serif family; the active page scales up. */}
        <nav
          aria-label="Primary"
          className="flex items-center justify-between rounded-full bg-surface-variant/40 px-5 py-2 backdrop-blur-2xl supports-[backdrop-filter]:bg-surface-variant/20 sm:px-6"
        >
          {navItems.map((item) => {
            const active = isActive(pathname ?? "", item.href);
            const isHighlight = item.highlight === true;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-block py-1 font-serif tracking-tight transition-colors ${
                  active ? "text-lg font-medium" : "text-base"
                } ${
                  isHighlight
                    ? "text-primary-container hover:text-primary"
                    : active
                      ? "text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
