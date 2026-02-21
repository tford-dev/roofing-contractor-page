import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetailTemplate } from '@/components/templates/ServiceDetailTemplate';
import { SERVICES } from '@/lib/data';
import { createMetadata } from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return createMetadata({
      title: 'Service Not Found | TF Roofing',
      description: 'The requested roofing service page could not be found.',
      path: `/services/${slug}`
    });
  }

  return createMetadata({
    title: `${service.name} in Williamsburg, VA | TF Roofing & Exteriors`,
    description: `${service.heroDescription} Serving Williamsburg and Hampton Roads with premium roofing craftsmanship.`,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
