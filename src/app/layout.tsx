import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import Aurora from "@/components/Aurora";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortBio,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.shortBio,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontVariables} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-surface text-on-surface antialiased">
        {/* Ambient aurora — fixed behind all content, muted and slow. */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-50"
          aria-hidden
        >
          <Aurora />
        </div>
        <Nav />
        <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
