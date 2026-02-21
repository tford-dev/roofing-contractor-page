'use client';

import { useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/Button';
import { SERVICE_DROPDOWN_OPTIONS } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { LeadFormValues } from '@/lib/types';
import { useLeadCapture } from '@/components/providers/LeadCaptureProvider';

const defaultValues: LeadFormValues = {
  name: '',
  phone: '',
  email: '',
  address: '',
  serviceNeeded: 'Roof Replacement',
  message: '',
  preferredContact: 'Phone',
  consent: false
};

interface EstimateFormProps {
  source: string;
  title?: string;
  className?: string;
  submitLabel?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function EstimateForm({
  source,
  title = 'Request a Free Estimate',
  className,
  submitLabel = 'Get My Estimate',
  compact = false,
  onSuccess
}: EstimateFormProps) {
  const { submitLead } = useLeadCapture();
  const [values, setValues] = useState<LeadFormValues>(defaultValues);
  const [submitted, setSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.consent) {
      setConsentError(true);
      return;
    }

    submitLead(values, source);
    setSubmitted(true);
    setValues(defaultValues);
    setConsentError(false);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className={cn('rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900', className)}>
        <h3 className="text-xl font-semibold">Thank you. Your estimate request is in.</h3>
        <p className="mt-2 text-sm text-emerald-800">We&apos;ll call you within 1 business day.</p>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="mt-4 border border-emerald-300"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn('rounded-2xl border border-slate-200 bg-white p-6 shadow-premium', className)}
      aria-label={title}
    >
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">Fast response, clear scope, no pushy sales follow-ups.</p>

      <div className={cn('mt-5 grid gap-3', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Name
          <input
            required
            type="text"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="space-y-1 text-sm font-medium text-slate-700">
          Phone
          <input
            required
            type="tel"
            value={values.phone}
            onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="space-y-1 text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="space-y-1 text-sm font-medium text-slate-700">
          Address / Zip
          <input
            required
            type="text"
            value={values.address}
            onChange={(event) => setValues((current) => ({ ...current, address: event.target.value }))}
            className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="space-y-1 text-sm font-medium text-slate-700 sm:col-span-2">
          Service Needed
          <select
            required
            value={values.serviceNeeded}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                serviceNeeded: event.target.value
              }))
            }
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          >
            {SERVICE_DROPDOWN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-slate-700">Preferred contact method</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['Phone', 'Email', 'Text'] as const).map((method) => (
              <button
                key={method}
                type="button"
                onClick={() =>
                  setValues((current) => ({
                    ...current,
                    preferredContact: method
                  }))
                }
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition',
                  values.preferredContact === method
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-300 text-slate-600 hover:border-slate-400'
                )}
              >
                {method}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="space-y-1 text-sm font-medium text-slate-700 sm:col-span-2">
          Message
          <textarea
            rows={compact ? 3 : 5}
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder="Tell us what you need and when you'd like to start."
          />
        </label>

        <label className="flex items-start gap-2 text-sm text-slate-700 sm:col-span-2">
          <input
            checked={values.consent}
            onChange={(event) => {
              setValues((current) => ({ ...current, consent: event.target.checked }));
              if (event.target.checked) {
                setConsentError(false);
              }
            }}
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>I agree to be contacted by TF Roofing & Exteriors.</span>
        </label>
      </div>

      {consentError ? (
        <p className="mt-2 text-sm font-medium text-rose-600">Please check the consent box to submit.</p>
      ) : null}

      <Button type="submit" className="mt-4 w-full" size="lg">
        {submitLabel}
      </Button>
    </form>
  );
}
