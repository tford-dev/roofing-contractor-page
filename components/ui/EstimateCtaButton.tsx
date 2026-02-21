'use client';

import { useLeadCapture } from '@/components/providers/LeadCaptureProvider';
import { Button } from '@/components/ui/Button';

interface EstimateCtaButtonProps {
  source: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

export function EstimateCtaButton({
  source,
  label = 'Free Estimate',
  className,
  variant = 'primary',
  size = 'md',
  ariaLabel
}: EstimateCtaButtonProps) {
  const { openEstimateModal } = useLeadCapture();

  return (
    <Button
      type="button"
      onClick={() => openEstimateModal(source)}
      className={className}
      variant={variant}
      size={size}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </Button>
  );
}
