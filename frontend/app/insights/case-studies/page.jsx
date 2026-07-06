import CaseStudiesClient from './CasestudiesClient.js';

export const metadata = {
    title:
    'About eRIC SOLUTIONS | AI-powered clinical and data solutions platform',

  description:
    'AI-powered clinical and data solutions platform',

  alternates: {
    canonical: 'https://www.ericsolutions.com/insights/case-studies',
  },
};

export default function CasestudiesPage() {
  return <CaseStudiesClient/>;
}