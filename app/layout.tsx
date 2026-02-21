import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { EstimateModal } from '@/components/layout/EstimateModal';
import { LeadCaptureProvider } from '@/components/providers/LeadCaptureProvider';
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd';
import { createMetadata } from '@/lib/seo';

import './globals.css';

export const metadata: Metadata = createMetadata({
  title: 'TF Roofing & Exteriors | Premium Roofing in Williamsburg + Hampton Roads, VA',
  description:
    'Premium roofing, repairs, and exterior services across Williamsburg and Hampton Roads, Virginia. Request a free estimate today.'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LeadCaptureProvider>
          <LocalBusinessJsonLd />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-24 sm:pb-0">{children}</main>
            <Footer />
            <MobileCtaBar />
          </div>
          <EstimateModal />
        </LeadCaptureProvider>
      </body>
    </html>
  );
}
