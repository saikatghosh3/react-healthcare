import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`flex items-start space-x-2 mb-4 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`p-2 rounded-full ${isBot ? 'bg-blue-100' : 'bg-gray-100'}`}>
        {isBot ? <Bot className="h-6 w-6 text-blue-600" /> : <User className="h-6 w-6 text-gray-600" />}
      </div>
      <div className={`max-w-[80%] p-3 rounded-lg ${isBot ? 'bg-blue-50' : 'bg-gray-50'}`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};