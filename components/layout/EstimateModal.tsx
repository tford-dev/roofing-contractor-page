'use client';

import { X } from 'lucide-react';

import { EstimateForm } from '@/components/forms/EstimateForm';
import { useLeadCapture } from '@/components/providers/LeadCaptureProvider';

export function EstimateModal() {
  const { isEstimateModalOpen, closeEstimateModal, modalSource } = useLeadCapture();

  if (!isEstimateModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:items-center sm:p-5">
      <div className="relative max-h-[96vh] w-full max-w-2xl overflow-auto rounded-2xl">
        <button
          type="button"
          aria-label="Close estimate form"
          onClick={closeEstimateModal}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-900 p-2 text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <EstimateForm
          source={`modal-${modalSource}`}
          title="Request Your Free Estimate"
          className="shadow-none"
        />
      </div>
    </div>
  );
}
