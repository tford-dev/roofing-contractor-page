import Link from 'next/link';

import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Roof Financing Options | TF Roofing & Exteriors',
  description:
    'Simple financing options for roof replacement and repairs. Review example monthly payments and request your estimate.',
  path: '/financing'
});

const paymentExamples = [
  { project: '$8,500 roof repair scope', plan: '60 months', payment: '$170/mo*' },
  { project: '$14,000 roof replacement', plan: '84 months', payment: '$235/mo*' },
  { project: '$20,000 premium roof + gutters', plan: '120 months', payment: '$280/mo*' }
];

export default function FinancingPage() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Financing"
            title="Protect your home now. Pay over time."
            description="Flexible financing helps qualified homeowners tackle urgent roofing work without putting everything on hold."
          />
          <p className="text-sm leading-relaxed text-slate-700">
            We keep financing straightforward: choose a payment structure that fits your monthly budget, lock in your project scope, and move forward with confidence.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">How it works</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              <li>1. Request your estimate and project scope.</li>
              <li>2. Review available financing options for qualified applicants.</li>
              <li>3. Select your plan and schedule your build.</li>
            </ol>
            <p className="mt-4 text-xs text-slate-500">*Example payments shown for illustration only and do not represent an offer.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="https://example.com" size="lg" ariaLabel="Apply for financing">
              Apply for Financing
            </ButtonLink>
            <EstimateCtaButton source="financing-page" variant="secondary" size="lg" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Example Monthly Payments</h2>
          <div className="mt-5 space-y-3">
            {paymentExamples.map((example) => (
              <article key={example.project} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{example.project}</p>
                <p className="mt-1 text-sm text-slate-600">Term: {example.plan}</p>
                <p className="mt-1 text-lg font-semibold text-brand-700">{example.payment}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
            Need help choosing a plan? We will walk through options during your estimate so you can compare total value, not just monthly cost.
          </div>

          <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800">
            Request estimate first →
          </Link>
        </div>
      </div>
    </section>
  );
}
