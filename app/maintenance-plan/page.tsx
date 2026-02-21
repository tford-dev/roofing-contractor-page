import { CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

import { RoofCareSignupForm } from '@/components/forms/RoofCareSignupForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ROOFCARE_INCLUSIONS, TESTIMONIAL_QUOTES } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'RoofCare 300 Maintenance Plan | TF Roofing & Exteriors',
  description:
    'RoofCare 300 is a $300/month maintenance plan with quarterly inspections, minor repairs, gutter cleaning, and priority storm response.',
  path: '/maintenance-plan'
});

const comparisons = [
  {
    category: 'Inspection cadence',
    oneTime: 'Only when issues appear',
    roofCare: 'Quarterly preventive checks'
  },
  {
    category: 'Minor repairs',
    oneTime: 'Separate callout and trip fees',
    roofCare: 'Included up to $500 each quarter'
  },
  {
    category: 'Storm response',
    oneTime: 'Standard queue wait',
    roofCare: 'Priority scheduling'
  },
  {
    category: 'Documentation',
    oneTime: 'Basic invoice notes',
    roofCare: 'Photo reports + annual summary'
  }
];

export default function MaintenancePlanPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Maintenance Plan"
            title="RoofCare 300"
            description="$300/month for proactive roof protection and fewer expensive surprises."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
              <ul className="mt-5 space-y-3">
                {ROOFCARE_INCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-300/40 bg-brand-600/20 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Pricing</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight">$300/mo</h2>
              <p className="mt-2 text-sm text-brand-100">For homeowners, landlords, and property managers who want predictable upkeep.</p>

              <div className="mt-6 space-y-3 text-sm text-brand-50">
                <p className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                  Preventive care helps reduce surprise failures.
                </p>
                <p className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0" />
                  Prevent $8k surprises by catching issues early.
                </p>
              </div>

              <p className="mt-6 rounded-lg border border-brand-200/40 bg-brand-700/30 px-4 py-3 text-sm font-medium text-white">
                ROI focus: consistent maintenance is cheaper than deferred emergency work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">One-Time Service vs RoofCare 300</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">One-Time Service</th>
                    <th className="px-4 py-3 font-semibold">RoofCare 300</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.category} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">{row.category}</td>
                      <td className="px-4 py-3 text-slate-600">{row.oneTime}</td>
                      <td className="px-4 py-3 text-brand-700">{row.roofCare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {TESTIMONIAL_QUOTES.map((quote) => (
                <blockquote key={quote.author} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  “{quote.quote}”
                  <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{quote.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <RoofCareSignupForm />
        </div>
      </section>
    </>
  );
}
