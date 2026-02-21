'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { X } from 'lucide-react';

import { GALLERY_ITEMS } from '@/lib/data';
import { cn } from '@/lib/utils';

const filters = ['All', 'Replacement', 'Repair', 'Gutters', 'Siding'] as const;

type Filter = (typeof filters)[number];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeItem = GALLERY_ITEMS.find((item) => item.id === lightboxId);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-semibold transition',
              activeFilter === filter
                ? 'border-brand-600 bg-brand-50 text-brand-700'
                : 'border-slate-300 text-slate-700 hover:border-slate-400'
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxId(item.id)}
            className="group relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={960}
              height={720}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-4 text-white">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{item.category}</p>
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setLightboxId(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
              onClick={() => setLightboxId(null)}
            >
              <X className="h-4 w-4" />
            </button>

            <Image
              src={activeItem.image}
              alt={activeItem.alt}
              width={1600}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
