import { useState } from 'react';
import { Gender, BodyPart } from './types';

export const useBodyMap = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);
  const [selectedGender, setSelectedGender] = useState<Gender>('male');

  const handlePartSelect = (part: BodyPart) => {
    setSelectedPart(part === selectedPart ? null : part);
  };

  const handleGenderChange = (gender: Gender) => {
    setSelectedGender(gender);
    setSelectedPart(null);
  };

  return {
    selectedPart,
    selectedGender,
    handlePartSelect,
    handleGenderChange
  };
};