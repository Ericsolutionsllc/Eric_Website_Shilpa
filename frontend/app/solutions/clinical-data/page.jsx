import ClinicalData from './ClinicalDataClient.js';

export const metadata = {
    title:
    'Clinical Data Standards Services | eRIC SOLUTIONS',

  description:
    'Standardize clinical trial data with CDISC-compliant data standards that improve quality, consistency, and regulatory submissions.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/solutions/clinical-data',
  },
};

export default function ClinicalDataPage() {
  return <ClinicalData />;
}