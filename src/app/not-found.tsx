import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded border border-border px-4 py-2 text-sm transition-colors hover:border-fg/20"
      >
        Back home
      </Link>
    </div>
  );
}
