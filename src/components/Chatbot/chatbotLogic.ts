// interface Response {
//   [key: string]: string[];
// }

// const responses: Response = {
//   greeting: [
//     "Hello! How can I assist you with your healthcare needs today?",
//     "Hi there! What can I help you with?",
//     "Welcome! How may I help you today?"
//   ],
//   appointment: [
//     "I can help you schedule an appointment. Would you like to see our available doctors?",
//     "Sure! You can book an appointment through our portal. Would you like me to guide you?",
//     "I'll help you book an appointment. Do you have a specific doctor in mind?"
//   ],
//   services: [
//     "We offer a wide range of medical services including primary care, specialists, and emergency care. What specific service are you looking for?",
//     "Our services include consultations, diagnostics, and treatments. Would you like more details about any specific service?",
//     "We provide comprehensive healthcare services. Which area are you interested in learning more about?"
//   ],
//   emergency: [
//     "If this is a medical emergency, please call 911 immediately. Our emergency department is open 24/7.",
//     "For emergencies, please call 911 or visit our emergency department immediately.",
//     "Please call 911 for immediate medical attention if you're experiencing an emergency."
//   ],
//   default: [
//     "I'm here to help with your healthcare needs. Could you please provide more details?",
//     "I want to assist you better. Could you elaborate on your question?",
//     "I'm not sure I understand. Could you rephrase your question?"
//   ]
// };

// const getRandomResponse = (responses: string[]): string => {
//   const index = Math.floor(Math.random() * responses.length);
//   return responses[index];
// };

// const findMatchingCategory = (input: string): string => {
//   const lowercaseInput = input.toLowerCase();
  
//   if (lowercaseInput.match(/\b(hi|hello|hey|greetings)\b/)) {
//     return 'greeting';
//   }
//   if (lowercaseInput.match(/\b(appointment|schedule|book|visit)\b/)) {
//     return 'appointment';
//   }
//   if (lowercaseInput.match(/\b(service|treatment|care|checkup)\b/)) {
//     return 'services';
//   }
//   if (lowercaseInput.match(/\b(emergency|urgent|immediate|critical)\b/)) {
//     return 'emergency';
//   }
//   return 'default';
// };

// export const getBotResponse = async (input: string): Promise<string> => {
//   const category = findMatchingCategory(input);
//   return getRandomResponse(responses[category]);
// };

interface Response {
  [key: string]: string[];
}

const responses: Response = {
  greeting: [
    "Hello! How may I assist you with your healthcare needs today?",
    "Good day! How can I support you with your medical inquiries?",
    "Welcome! Please let me know how I can help you."
  ],
  appointment: [
    "I’d be happy to assist you with scheduling an appointment. Would you like to view available doctors and time slots?",
    "Certainly! You can book an appointment through our online portal. Would you like me to guide you through the process?",
    "I can help you arrange an appointment. Do you have a preferred doctor or department in mind?"
  ],
  services: [
    "We offer a wide range of healthcare services, including general consultations, specialized treatments, and diagnostic services. Could you specify the type of service you require?",
    "Our medical services cover everything from preventive care to specialized treatments. Would you like more information on a specific department?",
    "We provide comprehensive healthcare solutions, including wellness checkups, diagnostic procedures, and emergency care. What would you like to learn more about?"
  ],
  emergency: [
    "If you are experiencing a medical emergency, please call 911 immediately. Our emergency department is available 24/7.",
    "For urgent medical assistance, please contact 911 or visit the nearest emergency facility as soon as possible.",
    "In case of a critical emergency, please seek immediate medical attention by dialing 911 or heading to the nearest emergency room."
  ],
  default: [
    "I am here to assist with your healthcare-related inquiries. Could you provide more details so I can better assist you?",
    "I’d love to help! Could you clarify your question so I can provide the most relevant information?",
    "I apologize, but I need more details to understand your request. Could you please rephrase or specify your concern?"
  ]
};

const getRandomResponse = (responses: string[]): string => {
  return responses[Math.floor(Math.random() * responses.length)];
};

const findMatchingCategory = (input: string): string => {
  const lowercaseInput = input.toLowerCase();

  if (/\b(hi|hello|hey|greetings|good\s(morning|afternoon|evening))\b/.test(lowercaseInput)) {
    return 'greeting';
  }
  if (/\b(appointment|schedule|book|consultation|visit)\b/.test(lowercaseInput)) {
    return 'appointment';
  }
  if (/\b(service|treatment|care|specialist|checkup|diagnostic)\b/.test(lowercaseInput)) {
    return 'services';
  }
  if (/\b(emergency|urgent|immediate|critical|life-threatening)\b/.test(lowercaseInput)) {
    return 'emergency';
  }
  return 'default';
};

export const getBotResponse = async (input: string): Promise<string> => {
  const category = findMatchingCategory(input);
  return getRandomResponse(responses[category]);
};
