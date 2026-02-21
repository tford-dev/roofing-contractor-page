import { Star } from 'lucide-react';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { REVIEWS, TESTIMONIAL_QUOTES } from '@/lib/data';

interface TestimonialGridProps {
  compact?: boolean;
}

export function TestimonialGrid({ compact = false }: TestimonialGridProps) {
  const items = compact ? REVIEWS.slice(0, 3) : REVIEWS.slice(0, 6);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by homeowners who expect premium service"
          description="Real feedback from projects across Williamsburg and Hampton Roads."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((review) => (
            <article key={`${review.name}-${review.location}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4" fill={index < review.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{review.body}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-950">{review.name}</p>
              <p className="text-xs text-slate-500">
                {review.location} • {review.service}
              </p>
            </article>
          ))}
        </div>

        {!compact ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {TESTIMONIAL_QUOTES.map((item) => (
              <blockquote key={item.author} className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                “{item.quote}”
                <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
