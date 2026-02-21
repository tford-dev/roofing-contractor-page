import { ShieldCheck, WalletCards, TimerReset, Sparkles } from 'lucide-react';

import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HeroSection } from '@/components/sections/HeroSection';
import { LocationLinkCloud } from '@/components/sections/LocationLinkCloud';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ServiceCardGrid } from '@/components/sections/ServiceCardGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRIMARY_PHONE } from '@/lib/constants';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Premium Roofing in Williamsburg, VA | TF Roofing & Exteriors',
  description:
    'Premium roofing, repair, inspections, and storm restoration in Williamsburg and Hampton Roads. Fast quotes, clean job sites, and warranty-backed workmanship.',
  path: '/'
});

const VALUE_BLOCKS = [
  {
    icon: TimerReset,
    title: 'Speed Without Sloppiness',
    body: 'Fast inspections and quick scheduling with full project communication from day one.'
  },
  {
    icon: ShieldCheck,
    title: 'Warranty-Backed Work',
    body: 'We build for longevity and stand behind the workmanship on qualified projects.'
  },
  {
    icon: Sparkles,
    title: 'Clean, Professional Sites',
    body: 'Daily debris control and final magnet sweeps keep your property safe and presentable.'
  },
  {
    icon: WalletCards,
    title: 'Financing That Fits',
    body: 'Options for qualified homeowners so urgent roofing decisions do not wreck cash flow.'
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignals />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why TF Roofing"
            title="Built for owners who value quality and peace of mind"
            description="Premium contractor execution from first call to final walkthrough."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUE_BLOCKS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <item.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCardGrid limit={6} />
      <ProcessTimeline />
      <TestimonialGrid compact />
      <LocationLinkCloud />
      <FAQAccordion />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">Maintenance Plan</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">RoofCare 300 protects your roof year-round for $300/month.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Quarterly inspections, minor repairs, gutter cleaning, and priority storm response to help prevent $8k surprises.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/maintenance-plan" size="lg">
              Explore RoofCare 300
            </ButtonLink>
            <EstimateCtaButton source="home-maintenance-cta" variant="light" size="lg" />
          </div>
          <p className="mt-4 text-sm text-slate-400">Prefer to talk first? Call {PRIMARY_PHONE}.</p>
        </div>
      </section>
    </>
  );
}
