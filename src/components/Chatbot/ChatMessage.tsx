import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  link?: string;
  linkLabel?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isBot,
  link,
  linkLabel,
}) => {
  const paragraphs = message.split('\n').filter((line) => line.trim() !== '');

  return (
    <div
      className={`flex items-end gap-2 ${isBot ? '' : 'flex-row-reverse'}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm ${
          isBot
            ? 'border-blue-100 bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
            : 'border-slate-200 bg-slate-100 text-slate-600'
        }`}
      >
        {isBot ? (
          <Bot className="h-4 w-4" />
        ) : (
          <User className="h-4 w-4" />
        )}
      </span>

      <div
        className={`flex max-w-[85%] flex-col ${
          isBot ? 'items-start' : 'items-end'
        }`}
      >
        <div
          className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
            isBot
              ? 'rounded-bl-md border border-slate-100 bg-white text-slate-700'
              : 'rounded-br-md bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
          }`}
        >
          {paragraphs.map((line, i) => {
            const isListItem = /^\s*[-•*]\s/.test(line);
            if (isListItem) {
              return (
                <p key={i} className="flex gap-1.5">
                  <span className={isBot ? 'text-blue-500' : 'text-blue-200'}>
                    •
                  </span>
                  <span>{line.replace(/^\s*[-•*]\s/, '')}</span>
                </p>
              );
            }
            return (
              <p key={i} className={i > 0 ? 'mt-1.5' : ''}>
                {line}
              </p>
            );
          })}
        </div>

        {link && linkLabel && (
          <Link
            to={link}
            className={`mt-1.5 inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
              isBot
                ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {linkLabel} →
          </Link>
        )}
      </div>
    </div>
  );
};