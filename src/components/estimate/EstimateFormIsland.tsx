/**
 * EstimateFormIsland — Future multi-step estimate form (React island).
 *
 * SCAFFOLD ONLY — renders null in production until Phase 2 is implemented.
 *
 * To activate:
 * 1. Implement the multi-step form below
 * 2. In estimate.astro, replace <EstimateForm /> with:
 *    <EstimateFormIsland client:visible formAction="https://formsubmit.co/6474b868cfc023f9e72071099eff7d6d" />
 *
 * Phase 2 steps:
 *   Step 1 — Contact info (name, email, phone)
 *   Step 2 — Address (address1, address2, city, zip)
 *   Step 3 — Service details (type, frequency, bedrooms, bathrooms)
 *   Step 4 — Extras + preferred date + notes
 */

interface EstimateFormData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  // Step 2
  address1: string;
  address2: string;
  city: string;
  zipCode: string;
  // Step 3
  serviceType: 'standard' | 'deep' | 'moveIn' | 'moveOut';
  frequency: 'oneTime' | 'weekly' | 'biweekly' | 'monthly';
  bedrooms: number;
  bathrooms: number;
  // Step 4
  extras: string[];
  preferredDate: string;
  notes: string;
}

interface EstimateFormIslandProps {
  formAction: string;
  onSuccess?: () => void;
}

export default function EstimateFormIsland(_props: EstimateFormIslandProps): null {
  // Phase 2: replace `return null` with the multi-step form implementation
  return null;
}
