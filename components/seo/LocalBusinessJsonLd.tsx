import { BASE_URL, BUSINESS_EMAIL, COMPANY_NAME, PRIMARY_PHONE, SERVICE_AREAS } from '@/lib/constants';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: COMPANY_NAME,
    telephone: PRIMARY_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: SERVICE_AREAS,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Williamsburg',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    url: BASE_URL,
    priceRange: '$$$',
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
