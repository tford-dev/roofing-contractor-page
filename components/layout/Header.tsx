'use client';

import Link from 'next/link';
import { Menu, PhoneCall, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { buttonClassName } from '@/components/ui/Button';
import { COMPANY_SHORT_NAME, PRIMARY_PHONE, PRIMARY_PHONE_TEL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/maintenance-plan', label: 'Plans' },
  { href: '/financing', label: 'Financing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="TF Roofing home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-sm font-bold text-white">
            TF
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Williamsburg + Hampton Roads</p>
            <p className="text-base font-semibold text-slate-950">{COMPANY_SHORT_NAME}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  active ? 'bg-slate-100 text-slate-950' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={PRIMARY_PHONE_TEL}
            className={buttonClassName({ variant: 'secondary', size: 'sm' })}
            aria-label={`Call ${PRIMARY_PHONE}`}
          >
            <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {PRIMARY_PHONE}
          </a>
          <EstimateCtaButton source="header" label="Free Estimate" size="sm" />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((current) => !current)}
          className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-medium transition',
                    active ? 'bg-slate-100 text-slate-950' : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-2 sm:hidden">
            <a
              href={PRIMARY_PHONE_TEL}
              className={buttonClassName({ variant: 'secondary' })}
              aria-label={`Call ${PRIMARY_PHONE}`}
            >
              Call {PRIMARY_PHONE}
            </a>
            <EstimateCtaButton source="mobile-nav" className="w-full" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
