import data from '../../data/chatbotData.json';

export interface FaqItem {
  id: string;
  category: string;
  featured: boolean;
  keywords: string[];
  questions: string[];
  answer: string;
  link?: string;
  linkLabel?: string;
  suggestions?: string[];
}

export interface BotReply {
  text: string;
  suggestions?: string[];
  link?: string;
  linkLabel?: string;
}

interface ChatbotData {
  meta: {
    botName: string;
    siteName: string;
    welcome: string;
    greetings: string[];
    fallback: string;
    welcomeSuggestions: string[];
  };
  faqs: FaqItem[];
}

const chatbotData = data as ChatbotData;

const pickRandom = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const pickRandomSuggestions = <T,>(arr: T[], count: number): T[] => {
  if (arr.length <= count) return [...arr];
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
};

const normalize = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const isWordMatch = (text: string, word: string): boolean => {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escaped}\\b`).test(text);
};

const scoreFaq = (faq: FaqItem, normalizedInput: string): number => {
  let score = 0;

  for (const keyword of faq.keywords) {
    const kw = keyword.toLowerCase().trim();
    if (!kw) continue;

    if (kw.includes(' ')) {
      if (normalizedInput.includes(kw)) {
        score += kw.split(/\s+/).length * 2;
      }
    } else if (isWordMatch(normalizedInput, kw)) {
      score += 2;
    }
  }

  for (const question of faq.questions) {
    const q = question.toLowerCase().replace(/[^\w\s-]/g, ' ').trim();
    if (!q) continue;
    if (normalizedInput.includes(q)) {
      score += 5;
    }
  }

  return score;
};

const findBestMatch = (input: string): FaqItem | null => {
  const normalizedInput = normalize(input);
  if (!normalizedInput) return null;

  let bestMatch: FaqItem | null = null;
  let bestScore = 0;

  for (const faq of chatbotData.faqs) {
    const score = scoreFaq(faq, normalizedInput);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestScore > 0 ? bestMatch : null;
};

const buildReply = (faq: FaqItem): BotReply => {
  const reply: BotReply = { text: faq.answer };

  if (faq.suggestions?.length) {
    reply.suggestions = faq.suggestions;
  }
  if (faq.link) {
    reply.link = faq.link;
    reply.linkLabel = faq.linkLabel;
  }

  return reply;
};

export const getWelcomeMessage = (): BotReply => {
  return {
    text: chatbotData.meta.welcome,
    suggestions: chatbotData.meta.welcomeSuggestions,
  };
};

export const getBotResponse = (input: string): BotReply => {
  const normalizedInput = normalize(input);
  const plainText = normalizedInput.replace(/[^a-z\s]/g, '').trim();

  const isPlainGreeting =
    /^(hi|hi+|hello+|hey|hii|yo|greetings|good\s(morning|afternoon|evening))[!.]*$/i.test(
      plainText
    );

  if (isPlainGreeting) {
    return {
      text: pickRandom(chatbotData.meta.greetings),
      suggestions: pickRandomSuggestions(chatbotData.meta.welcomeSuggestions, 3),
    };
  }

  if (/\b(thanks|thank you|thank|thx|ty)\b/.test(normalizedInput)) {
    const thankFaq = chatbotData.faqs.find((f) => f.id === 'feedback-thanks');
    if (thankFaq) return buildReply(thankFaq);
  }

  if (/\b(bye|goodbye|see you|ciao|tata)\b/.test(normalizedInput)) {
    return {
      text: 'Goodbye! Take care of your health. If you need anything else, I am always here for you. 😊',
      suggestions: ['How do I book an appointment?', 'What are the working hours?'],
    };
  }

  const bestMatch = findBestMatch(input);

  if (bestMatch) {
    return buildReply(bestMatch);
  }

  return {
    text: chatbotData.meta.fallback,
    suggestions: pickRandomSuggestions(chatbotData.meta.welcomeSuggestions, 3),
  };
};