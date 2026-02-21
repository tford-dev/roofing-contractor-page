import { PhoneCall } from 'lucide-react';

import { EstimateCtaButton } from '@/components/ui/EstimateCtaButton';
import { buttonClassName } from '@/components/ui/Button';
import { PRIMARY_PHONE, PRIMARY_PHONE_TEL } from '@/lib/constants';

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={PRIMARY_PHONE_TEL} className={buttonClassName({ variant: 'secondary' })}>
          <PhoneCall className="mr-2 h-4 w-4" />
          Call
        </a>
        <EstimateCtaButton source="mobile-floating-bar" className="w-full" label="Estimate" />
      </div>
      <p className="mt-1 text-center text-xs text-slate-500">{PRIMARY_PHONE}</p>
    </div>
  );
}
