// import React from 'react';

// const teamMembers = [
//   {
//     name: 'Dr. Sarah Johnson',
//     role: 'Chief Medical Officer',
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
//   },
//   {
//     name: 'Dr. Michael Chen',
//     role: 'Head of Surgery',
//     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
//   },
//   {
//     name: 'Dr. Emily Williams',
//     role: 'Director of Patient Care',
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
//   },
// ];

// export const TeamSection = () => {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {teamMembers.map((member) => (
//             <div key={member.name} className="text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-gray-600">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Dr. Emily Williams',
    role: 'Director of Patient Care',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
  },
];

export const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Leadership Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
