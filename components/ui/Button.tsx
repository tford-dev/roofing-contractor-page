import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-900/25 hover:bg-brand-700 focus-visible:ring-brand-300',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300',
  light: 'bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-white/60'
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 rounded-lg px-4 text-sm',
  md: 'h-11 rounded-xl px-5 text-sm',
  lg: 'h-12 rounded-xl px-6 text-base'
};

interface SharedProps {
  className?: string;
  variant?: Variant;
  size?: Size;
}

export function buttonClassName({
  className,
  variant = 'primary',
  size = 'md'
}: {
  className?: string;
  variant?: Variant;
  size?: Size;
}) {
  return cn(
    'inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

interface ButtonProps extends SharedProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
}

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName({ className, variant, size })} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends SharedProps {
  children: ReactNode;
  href: string;
  ariaLabel?: string;
}

export function ButtonLink({ className, variant, size, children, href, ariaLabel }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName({ className, variant, size })} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
