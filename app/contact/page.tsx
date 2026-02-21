import { EstimateForm } from '@/components/forms/EstimateForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BUSINESS_EMAIL, BUSINESS_EMAIL_MAILTO, PRIMARY_PHONE, PRIMARY_PHONE_TEL, SERVICE_AREAS } from '@/lib/constants';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Contact TF Roofing & Exteriors | Request a Free Estimate',
  description:
    'Request your free roofing estimate in Williamsburg and Hampton Roads. Call TF Roofing & Exteriors at 757-814-5785.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr,1.05fr] lg:px-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Request your free estimate"
            description="Tell us about your project and we will follow up within 1 business day."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">Talk to our team</h2>
            <a href={PRIMARY_PHONE_TEL} className="mt-3 block text-lg font-semibold text-brand-700 hover:text-brand-800">
              {PRIMARY_PHONE}
            </a>
            <a href={BUSINESS_EMAIL_MAILTO} className="mt-1 block text-sm text-slate-700 hover:text-slate-900">
              {BUSINESS_EMAIL}
            </a>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Service area</h3>
            <p className="mt-2 text-sm text-slate-700">{SERVICE_AREAS.join(' • ')}</p>
          </div>
        </div>

        <EstimateForm source="contact-page" title="Full Estimate Request" submitLabel="Submit Request" />
      </div>
    </section>
  );
}
