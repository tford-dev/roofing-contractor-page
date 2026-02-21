import Link from 'next/link';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { LOCATIONS } from '@/lib/data';

export function LocationLinkCloud() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Area"
          title="Roofing services across Williamsburg and nearby cities"
          description="Explore location-specific pages for local roofing and exterior support."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
            >
              {location.city}, {location.state}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
