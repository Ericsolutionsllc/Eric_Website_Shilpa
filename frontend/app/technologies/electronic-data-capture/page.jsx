import ElectronicData from './ElectronicDataClient.js';

export const metadata = {
   title:
    'Electronic Data Capture (EDC) Software',

  description:
    'Collect, validate, and manage clinical trial data using secure Electronic Data Capture software built for modern clinical research.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/technologies/electronic-data-capture',
  },
};

export default function ElectronicDataPage() {
  return <ElectronicData />;
}