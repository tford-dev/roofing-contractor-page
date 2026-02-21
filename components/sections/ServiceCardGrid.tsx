import Image from 'next/image';
import Link from 'next/link';
import {
  ClipboardCheck,
  Droplets,
  Hammer,
  House,
  PanelsTopLeft,
  ShieldAlert,
  SunMedium
} from 'lucide-react';

import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/data';

const iconMap = {
  house: House,
  wrench: Hammer,
  shield: ShieldAlert,
  clipboard: ClipboardCheck,
  drain: Droplets,
  panels: PanelsTopLeft,
  sun: SunMedium
};

interface ServiceCardGridProps {
  showIntro?: boolean;
  limit?: number;
}

export function ServiceCardGrid({ showIntro = true, limit }: ServiceCardGridProps) {
  const visibleServices = typeof limit === 'number' ? SERVICES.slice(0, limit) : SERVICES;
  console.log(visibleServices);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro ? (
          <SectionHeading
            eyebrow="Services"
            title="Roofing and exterior work built for long-term value"
            description="Clear scopes, premium materials, and quality control at every stage."
          />
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} project by TF Roofing`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                  <Icon className="absolute left-4 top-4 h-6 w-6 text-white" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{service.name}</h3>
                  <p className="text-sm text-slate-600">{service.shortDescription}</p>
                  <ul className="space-y-2">
                    {service.bulletPoints.slice(0, 2).map((point) => (
                      <li key={point} className="text-sm text-slate-700">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                  >
                    View service details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {limit ? (
          <ButtonLink href="/services" className="mt-8" size="lg">
            View All Services
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
