import MedicalWriting from './MedicalWritingClient.js';

export const metadata = {
    title:
    'Medical Writing Services | eRIC SOLUTIONS',

  description:
    'Professional medical writing services for protocols, CSRs, regulatory documents, publications, and clinical trial documentation.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/solutions/medical-writing',
  },
};

export default function MedicalWritingPage() {
  return <MedicalWriting />;
}