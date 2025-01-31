import React from 'react';
import { BodyImage } from './BodyImage';
import { GenderSelector } from './GenderSelector';
import { useBodyMap } from './useBodyMap';

export const BodyMap = () => {
  const { 
    selectedPart,
    selectedGender,
    handlePartSelect,
    handleGenderChange 
  } = useBodyMap();

  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Interactive Body Map</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <BodyImage
            selectedPart={selectedPart}
            onPartSelect={handlePartSelect}
            gender={selectedGender}
          />
          <GenderSelector
            selectedGender={selectedGender}
            onGenderChange={handleGenderChange}
          />
        </div>
      </div>
    </section>
  );
};