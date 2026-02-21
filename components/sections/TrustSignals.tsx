import { ShieldCheck, Star, Sparkles, WalletCards } from 'lucide-react';

const TRUST_ITEMS = [
  {
    title: 'Licensed & Insured',
    summary: 'Professional crews and documented coverage on every project.',
    icon: ShieldCheck
  },
  {
    title: '5-Star Rated',
    summary: 'Consistent quality, communication, and clean job sites.',
    icon: Star
  },
  {
    title: 'Workmanship Warranty',
    summary: 'Qualified installs backed by clear warranty protection.',
    icon: Sparkles
  },
  {
    title: 'Financing Options',
    summary: 'Flexible payment options to protect your cash flow.',
    icon: WalletCards
  }
];

export function TrustSignals() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <item.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
