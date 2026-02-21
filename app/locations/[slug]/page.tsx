import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { LOCATIONS, SERVICES } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((item) => item.slug === slug);

  if (!location) {
    return createMetadata({
      title: 'Location Not Found | TF Roofing',
      description: 'The requested location page could not be found.',
      path: `/locations/${slug}`
    });
  }

  return createMetadata({
    title: `Roof Repair in ${location.city}, ${location.state} | TF Roofing & Exteriors`,
    description: `${location.tagline} Request a free estimate for roofing and exterior services in ${location.city}, ${location.state}.`,
    path: `/locations/${location.slug}`
  });
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = LOCATIONS.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  const primaryService = SERVICES.find((service) => service.slug === 'roof-repair') ?? SERVICES[0];

  return <ServiceDetailTemplate service={primaryService} location={location} />;
}
