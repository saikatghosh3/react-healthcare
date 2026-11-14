import { ShieldCheck } from 'lucide-react';
import { LegalLayout } from './LegalLayout';

const sections = [
  {
    title: 'Introduction',
    paragraphs: [
      'This Privacy Policy explains how HealthCare ("we", "us", or "our") collects, uses, stores, and protects your personal and health information when you use our website, book appointments, access the patient portal, purchase services, or otherwise interact with our platform. We are committed to safeguarding your privacy and handling your information with the highest standards of care and confidentiality.',
      'By using our website or services, you agree to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    title: 'Information We Collect',
    paragraphs: [
      'Personal Information: When you create an account, book an appointment, or contact us, we collect details such as your name, email address, phone number, and password.',
      'Health Information: When you book consultations, order tests, or use our services, we may collect relevant health information you provide, including your reason for visiting, medical history you share, reports, and diagnostic results.',
      'Payment Information: When you complete a purchase, we collect billing details and payment method information. Payment transactions are processed through secure, PCI-compliant payment gateways, and we never store your full card details on our servers.',
      'Usage Information: We automatically collect technical data such as your IP address, browser type, device information, pages visited, and interaction patterns to improve our website and services.',
    ],
  },
  {
    title: 'How We Use Your Information',
    paragraphs: [
      'We use your information to provide and personalize our services, including booking appointments, managing your patient portal, delivering reports, and processing payments.',
      'We also use your information to communicate with you about appointments, follow-ups, service updates, health-related reminders, and to respond to your inquiries or feedback.',
      'We may use aggregated, anonymized data for analytics, research, and quality improvement to enhance patient care and website experience. We will never sell your personal or health information to third parties.',
    ],
  },
  {
    title: 'Sharing & Disclosure',
    paragraphs: [
      'Your information is shared only with authorized healthcare professionals involved in your care and with trusted service providers (such as laboratories and payment gateways) who are contractually obligated to protect your data.',
      'We may disclose information where required by law, regulation, or legal process, or where necessary to protect the safety, rights, and property of our patients, staff, or the public.',
      'We never share your health information for marketing purposes without your explicit consent.',
    ],
  },
  {
    title: 'Data Security',
    paragraphs: [
      'We implement robust administrative, technical, and physical safeguards to protect your information, including encryption of data in transit and at rest, secure access controls, and regular security audits.',
      'Video consultations are end-to-end encrypted, and our systems follow recognized healthcare privacy and security standards. While no method of transmission is 100% secure, we work continuously to maintain the highest level of protection.',
    ],
  },
  {
    title: 'Cookies & Tracking',
    paragraphs: [
      'Our website may use cookies and similar technologies to remember your preferences, keep you signed in, and understand how visitors use our site. You can control or disable cookies through your browser settings; however, some features may not function properly without them.',
    ],
  },
  {
    title: 'Data Retention',
    paragraphs: [
      'We retain your personal and health information only for as long as necessary to provide our services, comply with medical-legal record-keeping requirements, and resolve any disputes. When information is no longer needed, we securely delete or anonymize it.',
    ],
  },
  {
    title: 'Your Rights',
    paragraphs: [
      'You have the right to access the personal information we hold about you, request corrections, request deletion, and object to or restrict certain processing. You may also request a copy of your data in a portable format.',
      'To exercise any of these rights, please contact us using the details below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    paragraphs: [
      'Our pediatric services are provided with consent from a parent or legal guardian. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you believe a child has provided us personal information, please contact us and we will delete it.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at: contact@healthcare.com, call +1 (234) 567-890, or write to us at 123 Healthcare Ave, Medical City.',
    ],
  },
];

export const PrivacyPolicy = () => {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="Your Privacy Matters to Us"
      subtitle="Learn how we collect, use, and protect your personal and health information with transparency and care."
      icon={ShieldCheck}
      updated="September 9, 2026"
      sections={sections}
    />
  );
};