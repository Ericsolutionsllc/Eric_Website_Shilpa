import BlogClient from './BlogClient';

export const metadata = {
  title:
    'Clinical Research Blog | eRIC SOLUTIONS',

  description:
    'Read expert blogs on CTMS, EDC, pharmacovigilance, clinical operations, AI, and the latest clinical research trends.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/insights/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}