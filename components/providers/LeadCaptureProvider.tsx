'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

import type { LeadFormValues } from '@/lib/types';

interface LeadSubmission extends LeadFormValues {
  id: string;
  source: string;
  createdAt: string;
}

interface LeadCaptureContextValue {
  leads: LeadSubmission[];
  submitLead: (values: LeadFormValues, source: string) => void;
  isEstimateModalOpen: boolean;
  openEstimateModal: (source?: string) => void;
  closeEstimateModal: () => void;
  modalSource: string;
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('header');

  const submitLead = (values: LeadFormValues, source: string) => {
    const lead: LeadSubmission = {
      ...values,
      id: crypto.randomUUID(),
      source,
      createdAt: new Date().toISOString()
    };

    setLeads((current) => [lead, ...current]);
    console.log('TF Roofing lead captured:', lead);
  };

  const openEstimateModal = (source = 'header') => {
    setModalSource(source);
    setIsEstimateModalOpen(true);
  };

  const closeEstimateModal = () => setIsEstimateModalOpen(false);

  const value = useMemo(
    () => ({
      leads,
      submitLead,
      isEstimateModalOpen,
      openEstimateModal,
      closeEstimateModal,
      modalSource
    }),
    [leads, isEstimateModalOpen, modalSource]
  );

  return <LeadCaptureContext.Provider value={value}>{children}</LeadCaptureContext.Provider>;
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    throw new Error('useLeadCapture must be used within LeadCaptureProvider');
  }
  return context;
}
