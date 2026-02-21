import Link from 'next/link';
import { Star } from 'lucide-react';

import { REVIEWS } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Customer Reviews | TF Roofing & Exteriors',
  description:
    'Read homeowner reviews for roof replacements, repairs, and exterior services across Williamsburg and Hampton Roads.',
  path: '/reviews'
});

export default function ReviewsPage() {
  const averageRating = (REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Reviews</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Trusted by local homeowners</h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg font-semibold text-slate-900">{averageRating} / 5.0 average rating</p>
          </div>
          <p className="mt-2 text-sm text-slate-600">Based on verified homeowner feedback from Williamsburg + Hampton Roads projects.</p>
          <Link
            href="https://example.com"
            className="mt-4 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Leave a review
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {REVIEWS.map((review) => (
            <article key={`${review.name}-${review.location}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4" fill={index < review.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{review.body}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
              <p className="text-xs text-slate-500">
                {review.location} • {review.service}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
