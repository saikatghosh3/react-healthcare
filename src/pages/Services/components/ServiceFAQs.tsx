import React from 'react';

export const ServiceFAQs = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800">What insurance do you accept?</h3>
          <p className="text-gray-600">We accept most major insurance providers. Please contact our office for specific details.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">How long is the typical appointment?</h3>
          <p className="text-gray-600">Initial consultations typically last 45-60 minutes, with follow-up visits ranging from 30-45 minutes.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">What should I bring to my appointment?</h3>
          <p className="text-gray-600">Please bring your ID, insurance card, medical history, and any relevant test results or imaging.</p>
        </div>
      </div>
    </div>
  );
};