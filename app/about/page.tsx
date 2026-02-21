import Image from 'next/image';

import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TEAM_MEMBERS } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'About TF Roofing & Exteriors | Local Craftsmanship, Premium Execution',
  description:
    'Learn how TF Roofing & Exteriors delivers premium roofing craftsmanship, clean project management, and trusted local service.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Built local. Built right. Built to last."
            description="TF Roofing & Exteriors is a Williamsburg-based team focused on premium craftsmanship, clean project delivery, and honest communication."
          />
          <p className="mt-6 max-w-3xl text-slate-300">
            We started TF Roofing to bring a higher standard to local roofing: clear scopes, professional crews, and details that hold up long after the install. Whether it is a full replacement or a targeted repair, our goal is simple: protect your property and earn long-term trust.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <EstimateCtaButton source="about-header" size="lg" />
            <ButtonLink href="/services" variant="light" size="lg">
              View Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Meet the Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-56">
                  <Image
                    src="/images/generic-team-member-img.png"
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 48vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-700">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
    </>
  );
}
