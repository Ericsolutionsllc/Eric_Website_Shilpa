import AboutClient from './AboutClient';

export const metadata = {
  title:
    'About eRIC SOLUTIONS | Clinical Research Company',

  description:
    'Learn about eRIC SOLUTIONS, a trusted clinical research technology company delivering software and services for global clinical trials.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/company/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}