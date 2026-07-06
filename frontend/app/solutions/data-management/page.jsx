import DataManagement from './DataManagement.js';

export const metadata = {
    title:
    'Clinical Data Management Services | eRIC SOLUTIONS',

  description:
    'Ensure accurate, compliant clinical trial data with expert data management services for sponsors, CROs, and research organizations.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/solutions/data-management',
  },
};

export default function DataManagementPage() {
  return <DataManagement />;
}