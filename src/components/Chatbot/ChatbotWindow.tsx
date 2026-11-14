import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, X, Sparkles, Bot } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { getBotResponse, getWelcomeMessage } from './chatbotLogic';

interface ChatMessageData {
  text: string;
  isBot: boolean;
  suggestions?: string[];
  link?: string;
  linkLabel?: string;
}

const TypingIndicator = () => {
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm">
        <Bot className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: dot * 0.18 }}
            className="h-2 w-2 rounded-full bg-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export const ChatbotWindow = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([
    { text: getWelcomeMessage().text, isBot: true, suggestions: getWelcomeMessage().suggestions },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (text?: string) => {
    const userMessage = (text ?? input).trim();
    if (!userMessage || isTyping) return;

    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(userMessage);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: reply.text,
          isBot: true,
          suggestions: reply.suggestions,
          link: reply.link,
          linkLabel: reply.linkLabel,
        },
      ]);
    }, 600 + Math.random() * 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const latestBotSuggestions = [...messages]
    .reverse()
    .find((m) => m.isBot && m.suggestions?.length)?.suggestions;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 flex h-[30rem] w-[22rem] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lift sm:h-[32rem] sm:w-96"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-5 py-4">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-cyan-300 blur-2xl" />
                <div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-indigo-300 blur-2xl" />
              </div>

              <div className="relative flex items-center gap-3">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                  <Bot className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-blue-700 bg-emerald-400" />
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-1.5 truncate text-sm font-extrabold text-white">
                    MedCare Assistant
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                  </h3>
                  <p className="text-xs font-medium text-blue-100">
                    Online · Answers instantly
                  </p>
                </div>
                <button
                  onClick={toggleChat}
                  aria-label="Close chat"
                  className="rounded-full p-2 text-blue-100 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-slate-50 to-blue-50/40 px-4 py-4">
              {messages.map((msg, idx) => (
                <ChatMessage
                  key={idx}
                  message={msg.text}
                  isBot={msg.isBot}
                  link={msg.link}
                  linkLabel={msg.linkLabel}
                />
              ))}

              {isTyping && <TypingIndicator />}

              {/* Quick suggestion chips */}
              {!isTyping && latestBotSuggestions && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {latestBotSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSend(suggestion)}
                      className="rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[0.65rem] text-slate-400">
                AI assistant · For emergencies call 911
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            onClick={toggleChat}
            aria-label="Open healthcare assistant"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 p-2 text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] ring-1 ring-cyan-300/80 ring-offset-1 ring-offset-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 sm:gap-3 sm:py-3 sm:pl-4 sm:pr-5 sm:ring-2 sm:ring-offset-2"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 sm:h-9 sm:w-9">
              <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-blue-600 bg-emerald-400" />
              </span>
            </span>
            <span className="text-xs font-extrabold sm:hidden">Assistant</span>
            <span className="hidden text-sm font-extrabold sm:inline">Healthcare Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};