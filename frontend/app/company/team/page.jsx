import TeamClient from './TeamClient';

export const metadata = {
  title:
    'Meet Our Clinical Research Team | eRIC SOLUTIONS',

  description:
    'Meet the experienced professionals behind eRIC SOLUTIONS, delivering innovative technology and clinical research expertise.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/company/team',
  },
};

export default function TeamPage() {
  return <TeamClient />;
}