'use client';

import { useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/Button';
import type { LeadFormValues } from '@/lib/types';
import { useLeadCapture } from '@/components/providers/LeadCaptureProvider';

export function RoofCareSignupForm() {
  const { submitLead } = useLeadCapture();
  const [success, setSuccess] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'Homeowner',
    message: ''
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const leadPayload: LeadFormValues = {
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      address: formValues.address,
      serviceNeeded: 'RoofCare 300 Maintenance Plan',
      message: `${formValues.message} | Property type: ${formValues.propertyType}`,
      preferredContact: 'Phone',
      consent: true
    };

    submitLead(leadPayload, 'roofcare-plan');
    setSuccess(true);
    setFormValues({
      name: '',
      phone: '',
      email: '',
      address: '',
      propertyType: 'Homeowner',
      message: ''
    });
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-xl font-semibold text-emerald-900">RoofCare request received.</h3>
        <p className="mt-2 text-sm text-emerald-800">We&apos;ll call you within 1 business day to confirm onboarding.</p>
        <Button type="button" className="mt-4" variant="ghost" onClick={() => setSuccess(false)}>
          Start another plan request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-premium">
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">Start RoofCare 300</h3>
      <p className="text-sm text-slate-600">Simple signup. We call to confirm service details and your first inspection date.</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            required
            value={formValues.name}
            onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
            className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            required
            value={formValues.phone}
            onChange={(event) => setFormValues((current) => ({ ...current, phone: event.target.value }))}
            className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={formValues.email}
            onChange={(event) => setFormValues((current) => ({ ...current, email: event.target.value }))}
            className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Address / Zip
          <input
            required
            value={formValues.address}
            onChange={(event) => setFormValues((current) => ({ ...current, address: event.target.value }))}
            className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          You are a
          <select
            value={formValues.propertyType}
            onChange={(event) => setFormValues((current) => ({ ...current, propertyType: event.target.value }))}
            className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          >
            <option>Homeowner</option>
            <option>Landlord</option>
            <option>Property Manager</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Notes
          <textarea
            rows={4}
            value={formValues.message}
            onChange={(event) => setFormValues((current) => ({ ...current, message: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder="Any specific concerns before your first inspection?"
          />
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Start Plan
      </Button>
    </form>
  );
}
