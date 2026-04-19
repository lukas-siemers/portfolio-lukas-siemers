import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[60vh] grid-cols-12 items-center">
      <div className="col-span-12 md:col-span-9">
        <p className="label-md mb-6">404 · Not found</p>
        <h1 className="font-serif text-display-md text-on-surface sm:text-display-lg">
          Off the rails
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-6 max-w-lg text-body-lg text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist, or I haven&apos;t
          written it yet.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-surface-container-low px-7 py-3.5 text-base font-medium text-primary transition-all hover:bg-surface-container hover:-translate-y-0.5"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
