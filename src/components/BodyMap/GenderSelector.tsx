import React from 'react';
import { Gender } from './types';
import { User } from 'lucide-react';

interface GenderSelectorProps {
  selectedGender: Gender;
  onGenderChange: (gender: Gender) => void;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({
  selectedGender,
  onGenderChange
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => onGenderChange('male')}
        className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
          selectedGender === 'male'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <User className="h-5 w-5" />
        <span>Male</span>
      </button>
      <button
        onClick={() => onGenderChange('female')}
        className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
          selectedGender === 'female'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <User className="h-5 w-5" />
        <span>Female</span>
      </button>
    </div>
  );
};