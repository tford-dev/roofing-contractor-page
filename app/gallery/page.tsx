import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Roofing Project Gallery | TF Roofing & Exteriors',
  description:
    'View recent replacement, repair, gutter, and siding projects completed by TF Roofing & Exteriors in Hampton Roads, Virginia.',
  path: '/gallery'
});

export default function GalleryPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Before-and-after quality you can see"
          description="Browse roofing and exterior project examples by service type."
        />
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}