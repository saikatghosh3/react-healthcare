import React from 'react';

export const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional healthcare services that improve the quality of life for our patients
              through compassionate care, innovative treatments, and a commitment to excellence.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading healthcare provider recognized for clinical excellence,
              patient-centered care, and innovative medical solutions that enhance community well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};