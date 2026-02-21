import Link from 'next/link';

import { ButtonLink } from '@/components/ui/Button';
import {
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  COMPANY_NAME,
  PRIMARY_PHONE,
  PRIMARY_PHONE_TEL,
  SERVICE_AREAS
} from '@/lib/constants';

const QUICK_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/maintenance-plan', label: 'RoofCare 300' },
  { href: '/financing', label: 'Financing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{COMPANY_NAME}</h3>
          <p className="text-sm text-slate-400">
            Premium roofing and exterior services in Williamsburg + Hampton Roads, Virginia.
          </p>
          <div className="space-y-1 text-sm">
            <a href={PRIMARY_PHONE_TEL} className="block font-medium text-white hover:text-brand-300">
              {PRIMARY_PHONE}
            </a>
            <a href={BUSINESS_EMAIL_MAILTO} className="block text-slate-300 hover:text-brand-300">
              {BUSINESS_EMAIL}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Service Areas</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Trust + Coverage</h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">Licensed & Insured</span>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">Financing Available</span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold text-white">Need ongoing roof protection?</p>
            <p className="mt-1 text-sm text-slate-400">RoofCare 300 keeps small issues from becoming expensive repairs.</p>
            <ButtonLink href="/maintenance-plan" size="sm" className="mt-3 w-full">
              Explore RoofCare 300
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
