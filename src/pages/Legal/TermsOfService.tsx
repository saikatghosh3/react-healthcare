import { ScrollText } from 'lucide-react';
import { LegalLayout } from './LegalLayout';

const sections = [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'Welcome to HealthCare. By accessing or using our website, booking an appointment, purchasing services, or creating an account, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, please do not use our services.',
      'These Terms constitute a legally binding agreement between you and HealthCare. We may update them periodically, and continued use of our services after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: 'Medical Disclaimer',
    paragraphs: [
      'The information, content, and services provided through this website, including our chat assistant, are for general informational and administrative purposes only and do not constitute medical advice, diagnosis, or a substitute for professional consultation.',
      'If you are experiencing a medical emergency, call 911 immediately or visit your nearest emergency department. Do not rely on this website, chat assistant, or email communication for urgent or life-threatening situations.',
      'Always seek the guidance of a qualified healthcare professional regarding your specific medical condition and treatment.',
    ],
  },
  {
    title: 'Our Services',
    paragraphs: [
      'HealthCare offers appointment booking, in-clinic consultations, video consultations, diagnostic testing, home sample collection, health check-up packages, emergency care, and a patient portal for managing your health information.',
      'Service availability, pricing, and participating doctors may change from time to time. We make reasonable efforts to keep information on our website accurate, but we do not guarantee that all listings are error-free or always current.',
    ],
  },
  {
    title: 'Appointments & Bookings',
    paragraphs: [
      'You may book appointments online for a specific doctor, date, and time slot. A confirmed booking is subject to availability and doctor schedules.',
      'Please arrive on time for in-clinic appointments and join video consultations on schedule. We recommend arriving at least 15 minutes early for your first visit to complete registration.',
      'To reschedule or cancel an appointment, please do so in advance using our contact channels so the slot can be offered to other patients.',
    ],
  },
  {
    title: 'Accounts & Security',
    paragraphs: [
      'Creating an account is free. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.',
      'You agree to provide accurate, current, and complete information when registering and to update it when necessary. We may suspend or terminate accounts that violate these Terms.',
    ],
  },
  {
    title: 'Payments & Billing',
    paragraphs: [
      'You agree to pay all fees for the services and packages you purchase, as displayed at the time of booking. Prices are shown transparently and are inclusive of any applicable taxes unless stated otherwise.',
      'Payments can be made securely by card, UPI, or insurance where available. All transactions are encrypted and processed through secure payment gateways.',
    ],
  },
  {
    title: 'Cancellations & Refunds',
    paragraphs: [
      'Refunds and cancellation policies may vary by service. Video consultations can generally be rescheduled or cancelled easily. For detailed refund information, please contact our billing team.',
      'We aim to resolve all billing queries fairly and promptly. Please retain your payment confirmation for any refund or dispute requests.',
    ],
  },
  {
    title: 'Video Consultation Consent',
    paragraphs: [
      'Video consultations are a convenient way to receive medical care remotely. By participating, you consent to the use of secure, encrypted video technology and understand that a video visit cannot replace in-person care in all situations.',
      'Consultations may be recorded for clinical record purposes only with your knowledge; recording is never shared without your consent, except as required by law.',
    ],
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      'All content on this website, including text, graphics, logos, images, software, and the overall design, is the property of HealthCare or its licensors and is protected by copyright and intellectual property laws.',
      'You may not reproduce, distribute, modify, or commercially exploit any part of this website without our prior written permission.',
    ],
  },
  {
    title: 'User Conduct',
    paragraphs: [
      'You agree not to misuse our website, attempt unauthorized access to systems or accounts, post misleading or harmful content, interfere with the operation of the platform, or use our services for any unlawful purpose.',
      'Feedback and reviews you submit must be honest and respectful. We reserve the right to remove content that violates these standards.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, HealthCare shall not be liable for indirect, incidental, consequential, or punitive damages arising from your use of the website or services.',
      'Medical outcomes depend on many factors beyond our control, and we cannot guarantee specific treatment results. Our total liability in connection with any service is limited to the amount you paid for that service.',
    ],
  },
  {
    title: 'Privacy',
    paragraphs: [
      'Our collection and use of your personal and health information is governed by our Privacy Policy, which is available on this website and forms part of these Terms. Please review it carefully.',
    ],
  },
  {
    title: 'Governing Law',
    paragraphs: [
      'These Terms are governed by and construed in accordance with the laws applicable in our jurisdiction. Any disputes arising from these Terms or your use of our services shall be resolved in the competent courts of that jurisdiction.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'If you have any questions about these Terms, please contact us at contact@healthcare.com, call +1 (234) 567-890, or visit our Contact page.',
    ],
  },
];

export const TermsOfService = () => {
  return (
    <LegalLayout
      eyebrow="Terms of Service"
      title="Guidelines for Using Our Services"
      subtitle="Understand the terms that govern your use of our website, appointments, and healthcare services."
      icon={ScrollText}
      updated="September 9, 2026"
      sections={sections}
    />
  );
};