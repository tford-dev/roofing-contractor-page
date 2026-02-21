import Link from 'next/link';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { LOCATIONS, SERVICES } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Roofing Service Areas | Williamsburg + Hampton Roads, VA',
  description:
    'Explore roofing and exterior services by city, including Williamsburg, Newport Beach, Hampton, Yorktown, Toano, and New Kent.',
  path: '/locations'
});

export default function LocationsPage() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Locations"
          title="Local roofing pages by city"
          description="Each location page includes service context, local messaging, and direct estimate CTA access."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location) => (
            <article key={location.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {location.city}, {location.state}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{location.tagline}</p>
              <p className="mt-2 text-sm text-slate-600">{location.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/locations/${location.slug}`}
                  className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  View Location Page
                </Link>
                <Link
                  href="/services"
                  className="inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  View Services
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Available Services in All Areas</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>• {service.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
