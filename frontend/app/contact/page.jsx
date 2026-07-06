import ContactClient from './ContactClient';

export const metadata = {
    title:
    'Contact eRIC SOLUTIONS',

  description:
    'Contact eRIC SOLUTIONS to learn more about our CTMS, EDC, clinical services, or request a consultation with our experts.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}