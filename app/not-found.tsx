import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-20 text-center">
      <div className="max-w-md space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Page not found</h1>
        <p className="text-sm text-slate-600">The page you requested does not exist or may have moved.</p>
        <Link
          href="/"
          className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
