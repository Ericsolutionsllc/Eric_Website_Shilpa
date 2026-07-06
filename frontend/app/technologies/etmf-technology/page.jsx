import ETMFTechnology from './ETMFTechnologyClient.js';

export const metadata = {
  title:
    'eTMF Software for Clinical Trials',

  description:
    'Securely manage trial master files with eTMF software that improves collaboration, document control, and compliance.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/technologies/etmf-technology',
  },
};

export default function ETMFTechnologyPage() {
  return <ETMFTechnology />;
}