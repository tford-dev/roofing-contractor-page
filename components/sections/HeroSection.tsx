import Image from 'next/image';

import { EstimateForm } from '@/components/forms/EstimateForm';
import { ButtonLink } from '@/components/ui/Button';
import { PRIMARY_PHONE, PRIMARY_PHONE_TEL } from '@/lib/constants';
import { VALUE_PROPS } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">
      <Image
        src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=2000"
        alt="Roofing crew installing premium shingle roof on a residential home"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8 lg:py-20">
        <div className="space-y-7 text-white">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
            Williamsburg + Hampton Roads Roofing Experts
          </p>
          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Premium Roofing. Zero Stress. Built to Last.
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Fast quotes, quality materials, clean job sites, and strong warranties for homeowners who expect professional results.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {VALUE_PROPS.map((prop) => (
              <div key={prop} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-slate-100">
                {prop}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={PRIMARY_PHONE_TEL} variant="light" size="lg" ariaLabel={`Call ${PRIMARY_PHONE}`}>
              Call {PRIMARY_PHONE}
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost" size="lg" className="border border-white/30 text-white hover:bg-white/15">
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <EstimateForm source="home-hero" compact title="Request a Free Estimate" />
      </div>
    </section>
  );
}
