'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { FAQS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Straight answers before you commit
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((item, index) => {
            const open = openIndex === index;
            return (
              <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-lg font-semibold text-slate-950">{item.question}</span>
                  <ChevronDown
                    className={cn('mt-1 h-5 w-5 shrink-0 text-slate-500 transition', open && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {open ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
