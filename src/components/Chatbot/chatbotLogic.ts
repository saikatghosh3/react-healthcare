interface Response {
  [key: string]: string[];
}

const responses: Response = {
  greeting: [
    "Hello! How can I assist you with your healthcare needs today?",
    "Hi there! What can I help you with?",
    "Welcome! How may I help you today?"
  ],
  appointment: [
    "I can help you schedule an appointment. Would you like to see our available doctors?",
    "Sure! You can book an appointment through our portal. Would you like me to guide you?",
    "I'll help you book an appointment. Do you have a specific doctor in mind?"
  ],
  services: [
    "We offer a wide range of medical services including primary care, specialists, and emergency care. What specific service are you looking for?",
    "Our services include consultations, diagnostics, and treatments. Would you like more details about any specific service?",
    "We provide comprehensive healthcare services. Which area are you interested in learning more about?"
  ],
  emergency: [
    "If this is a medical emergency, please call 911 immediately. Our emergency department is open 24/7.",
    "For emergencies, please call 911 or visit our emergency department immediately.",
    "Please call 911 for immediate medical attention if you're experiencing an emergency."
  ],
  default: [
    "I'm here to help with your healthcare needs. Could you please provide more details?",
    "I want to assist you better. Could you elaborate on your question?",
    "I'm not sure I understand. Could you rephrase your question?"
  ]
};

const getRandomResponse = (responses: string[]): string => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

const findMatchingCategory = (input: string): string => {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.match(/\b(hi|hello|hey|greetings)\b/)) {
    return 'greeting';
  }
  if (lowercaseInput.match(/\b(appointment|schedule|book|visit)\b/)) {
    return 'appointment';
  }
  if (lowercaseInput.match(/\b(service|treatment|care|checkup)\b/)) {
    return 'services';
  }
  if (lowercaseInput.match(/\b(emergency|urgent|immediate|critical)\b/)) {
    return 'emergency';
  }
  return 'default';
};

export const getBotResponse = async (input: string): Promise<string> => {
  const category = findMatchingCategory(input);
  return getRandomResponse(responses[category]);
};