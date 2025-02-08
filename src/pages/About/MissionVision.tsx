// import React from 'react';

// export const MissionVision = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
//             <p className="text-gray-600">
//               To provide exceptional healthcare services that improve the quality of life for our patients
//               through compassionate care, innovative treatments, and a commitment to excellence.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
//             <p className="text-gray-600">
//               To be the leading healthcare provider recognized for clinical excellence,
//               patient-centered care, and innovative medical solutions that enhance community well-being.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";
import { motion } from "framer-motion";

export const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional healthcare services that improve the quality of life for our patients
              through compassionate care, innovative treatments, and a commitment to excellence.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading healthcare provider recognized for clinical excellence,
              patient-centered care, and innovative medical solutions that enhance community well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


