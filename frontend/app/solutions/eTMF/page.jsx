import ETMF from './ETMFClient.js';

export const metadata = {
    title:
    'eTMF Services for Clinical Trials | eRIC SOLUTIONS',

  description:
    'Manage essential trial documents with secure eTMF services that support inspection readiness and regulatory compliance.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/solutions/eTMF',
  },
};

export default function ETMFPage() {
  return <ETMF />;
}