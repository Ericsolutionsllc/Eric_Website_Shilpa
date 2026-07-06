import Pharmacovigilance from './PharmacovigilanceClient.js';

export const metadata = {
    title:
    'Pharmacovigilance Services | eRIC SOLUTIONS',

  description:
    'Comprehensive pharmacovigilance services including safety monitoring, adverse event reporting, and regulatory compliance.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/solutions/pharmacovigilance',
  },
};

export default function PharmacovigilancePage() {
  return <Pharmacovigilance />;
}