# TF Roofing & Exteriors Website

Premium, conversion-focused roofing site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Project structure

- `app/` route pages (home, services, dynamic service pages, locations, about, financing, gallery, reviews, contact, maintenance plan)
- `components/` reusable UI, sections, layout, forms, templates
- `lib/` constants, data, SEO helpers, shared types
- `public/` brand placeholders and OG/image placeholders

## Brand customization

- Update core colors in `tailwind.config.ts` (`theme.extend.colors.brand` and `colors.slate.950`)
- Update contact details in `lib/constants.ts`
- Replace text/content in `lib/data.ts`

## Logo and imagery

- Replace placeholder logo files in `public/images/`
- Hero, service, team, and gallery images are currently remote stock URLs in `lib/data.ts` and `components/sections/HeroSection.tsx`
- To switch to local images, place files in `public/images/` and update those paths in data/components

## Form handling today

- Estimate and maintenance plan forms are client-side only
- Submissions are saved to local React state and logged via `console.log`
- Success state message: `We'll call you within 1 business day.`

## Connect forms to email/CRM later

1. Create an API route (for example: `app/api/leads/route.ts`)
2. POST form payloads from `EstimateForm.tsx` and `RoofCareSignupForm.tsx`
3. In the API route, forward to your provider (Resend, SendGrid, HubSpot, etc.)
4. Add validation and spam protection (rate limiting + captcha)
5. Store leads in a DB/CRM for follow-up tracking

## SEO included

- Page-level metadata and OpenGraph metadata
- `app/robots.ts` and `app/sitemap.ts`
- Local business JSON-LD in layout (`components/seo/LocalBusinessJsonLd.tsx`)
