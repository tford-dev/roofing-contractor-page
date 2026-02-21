export type ServiceKey =
  | 'roof-replacement'
  | 'roof-repair'
  | 'storm-damage-insurance-claims'
  | 'roof-inspections'
  | 'gutter-installation'
  | 'siding'
  | 'skylights';

export interface Service {
  slug: ServiceKey;
  name: string;
  shortDescription: string;
  heroDescription: string;
  image: string;
  icon: 'house' | 'wrench' | 'shield' | 'clipboard' | 'drain' | 'panels' | 'sun';
  bulletPoints: string[];
  whyItMatters: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  tagline: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  service: string;
  body: string;
}

export interface GalleryItem {
  id: string;
  category: 'Replacement' | 'Repair' | 'Gutters' | 'Siding';
  title: string;
  alt: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  title: string;
  summary: string;
}

export interface LeadFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: string;
  message: string;
  preferredContact: 'Phone' | 'Email' | 'Text';
  consent: boolean;
}
