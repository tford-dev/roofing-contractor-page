import type { Metadata } from 'next';

import { BASE_URL, COMPANY_NAME } from '@/lib/constants';

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({ title, description, path = '/' }: MetadataInput): Metadata {
  const url = new URL(path, BASE_URL).toString();
  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY_NAME,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${COMPANY_NAME} preview image`
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg']
    }
  };
}
