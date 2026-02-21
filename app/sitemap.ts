import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/constants';
import { LOCATIONS, SERVICES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/services',
    '/about',
    '/financing',
    '/gallery',
    '/reviews',
    '/contact',
    '/maintenance-plan',
    '/locations'
  ];

  const servicePages = SERVICES.map((service) => `/services/${service.slug}`);
  const locationPages = LOCATIONS.map((location) => `/locations/${location.slug}`);

  return [...staticPages, ...servicePages, ...locationPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));
}
