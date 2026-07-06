import ClinicalTrial from './ClinicalTrialClient.js';

export const metadata = {
    title:
    'Clinical Trial Management Software | eRIC SOLUTIONS',

  description:
    'Simplify clinical trial planning, tracking, and monitoring with a secure CTMS designed for sponsors, CROs, and research sites.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/technologies/clinical-trial-management-software',
  },
};

export default function ClinicalTrialPage() {
  return <ClinicalTrial />;
}