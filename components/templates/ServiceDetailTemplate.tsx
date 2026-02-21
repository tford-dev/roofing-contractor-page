import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { ButtonLink } from '@/components/ui/Button';
import type { Location, Service } from '@/lib/types';
import { LOCATIONS, SERVICES } from '@/lib/data';
import { PRIMARY_PHONE, PRIMARY_PHONE_TEL } from '@/lib/constants';

interface ServiceDetailTemplateProps {
  service: Service;
  location?: Location;
}

export function ServiceDetailTemplate({ service, location }: ServiceDetailTemplateProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <Image
          src={service.image}
          alt={`${service.name} by TF Roofing & Exteriors`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
              {location ? (
                <>
                  <MapPin className="h-3.5 w-3.5" />
                  {location.city}, {location.state}
                </>
              ) : (
                'Williamsburg + Hampton Roads, VA'
              )}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {location
                ? `${service.name} in ${location.city}, ${location.state}`
                : `${service.name} Services`}
            </h1>
            <p className="text-lg text-slate-200">
              {location ? `${location.intro} ${service.heroDescription}` : service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PRIMARY_PHONE_TEL} className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                Call {PRIMARY_PHONE}
              </a>
              <EstimateCtaButton
                source={location ? `service-location-${service.slug}-${location.slug}` : `service-${service.slug}`}
                label="Free Estimate"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">What You Get</h2>
            <ul className="mt-5 space-y-3">
              {service.bulletPoints.map((point) => (
                <li key={point} className="text-sm text-slate-700">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Why It Matters</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{service.whyItMatters}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Every project includes clear communication, documented scopes, and strict cleanup standards so your property stays protected and presentable throughout the build.
            </p>
            <ButtonLink href="/contact" className="mt-6" size="lg">
              Request Site Visit
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Explore Related Services</h2>
            <div className="mt-5 grid gap-2">
              {SERVICES.filter((item) => item.slug !== service.slug)
                .slice(0, 5)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Nearby Service Areas</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {LOCATIONS.map((serviceLocation) => (
                <Link
                  key={serviceLocation.slug}
                  href={`/locations/${serviceLocation.slug}`}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {serviceLocation.city}, {serviceLocation.state}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
