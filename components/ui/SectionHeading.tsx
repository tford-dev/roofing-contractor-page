import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-2xl text-center', className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}
