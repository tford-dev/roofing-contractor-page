import Link from 'next/link';

import { ServiceCardGrid } from '@/components/sections/ServiceCardGrid';
import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Roofing Services in Williamsburg + Hampton Roads | TF Roofing',
  description:
    'Roof replacement, roof repair, storm restoration, inspections, gutters, siding, and skylights by TF Roofing & Exteriors.',
  path: '/services'
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Premium roofing and exterior services"
            description="Every scope is built around long-term performance, clean execution, and clear communication."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <EstimateCtaButton source="services-header" size="lg" />
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Schedule Inspection
            </ButtonLink>
          </div>
        </div>
      </section>

      <ServiceCardGrid showIntro={false} />

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Service Details</h2>
          <div className="mt-8 space-y-5">
            {SERVICES.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-2xl font-semibold text-slate-950">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.heroDescription}</p>
                <p className="mt-3 text-sm text-slate-600">{service.whyItMatters}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    View {service.name}
                  </Link>
                  <Link
                    href="/locations"
                    className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                  >
                    Service Areas
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
