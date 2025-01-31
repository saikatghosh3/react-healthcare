import React from 'react';

export const ServiceFeatures = () => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Initial consultation and assessment</li>
          <li>Comprehensive treatment plan</li>
          <li>Follow-up care and monitoring</li>
          <li>24/7 support for emergency services</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Expert healthcare professionals</li>
          <li>State-of-the-art facilities</li>
          <li>Personalized care approach</li>
          <li>Convenient scheduling</li>
        </ul>
      </div>
    </>
  );
};