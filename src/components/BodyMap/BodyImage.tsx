import React from 'react';
import { Gender, BodyPart } from './types';
import { bodyPartsData } from './bodyPartsData';

interface BodyImageProps {
  selectedPart: BodyPart | null;
  onPartSelect: (part: BodyPart) => void;
  gender: Gender;
}

export const BodyImage: React.FC<BodyImageProps> = ({
  selectedPart,
  onPartSelect,
  gender
}) => {
  return (
    <div className="relative w-[400px] h-[600px]">
      <svg
        viewBox="0 0 200 300"
        className="w-full h-full"
      >
        {/* Base body shape */}
        <path
          d={gender === 'male' ? malePath : femalePath}
          fill="#E8D5C4"
          stroke="#C4A484"
          strokeWidth="1"
          className="transition-colors duration-300"
        />

        {/* Body part regions */}
        {bodyPartsData.map((part) => {
          const region = bodyRegions[part.id]?.[gender];
          const isSelected = selectedPart === part.id;
          
          if (!region) return null;

          return (
            <g key={part.id}>
              <path
                d={region.path}
                fill={isSelected ? 'rgba(59, 130, 246, 0.3)' : 'transparent'}
                stroke={isSelected ? '#3B82F6' : 'transparent'}
                strokeWidth="1"
                className="cursor-pointer transition-all duration-300 hover:fill-blue-500/20"
                onClick={() => onPartSelect(part.id)}
              />
              <text
                x={region.labelX}
                y={region.labelY}
                className={`text-xs ${
                  isSelected ? 'fill-blue-600' : 'fill-gray-600'
                } transition-colors duration-300`}
                textAnchor={region.labelX > 100 ? 'end' : 'start'}
              >
                {part.label}
              </text>
              {/* Connection line */}
              <line
                x1={region.lineStart.x}
                y1={region.lineStart.y}
                x2={region.lineEnd.x}
                y2={region.lineEnd.y}
                stroke={isSelected ? '#3B82F6' : '#C4A484'}
                strokeWidth="0.5"
                className="transition-colors duration-300"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const malePath = `
  M100 20 
  C130 20 140 30 140 40
  L140 80 C140 90 145 100 145 110
  L145 200 C145 210 140 220 140 230
  L140 280 C140 290 130 290 120 290
  L80 290 C70 290 60 290 60 280
  L60 230 C60 220 55 210 55 200
  L55 110 C55 100 60 90 60 80
  L60 40 C60 30 70 20 100 20
`;

const femalePath = `
  M100 20
  C125 20 135 30 135 40
  L135 80 C135 90 140 100 140 110
  C140 120 145 130 145 140
  L145 200 C145 220 140 240 140 260
  L140 280 C140 290 130 290 120 290
  L80 290 C70 290 60 290 60 280
  L60 260 C60 240 55 220 55 200
  L55 140 C55 130 60 120 60 110
  C60 100 65 90 65 80
  L65 40 C65 30 75 20 100 20
`;

// Define anatomically correct regions for each body part
const bodyRegions = {
  brain: {
    male: {
      path: 'M80 20 L120 20 C130 30 130 40 120 50 L80 50 C70 40 70 30 80 20',
      labelX: 140,
      labelY: 35,
      lineStart: { x: 120, y: 35 },
      lineEnd: { x: 135, y: 35 }
    },
    female: {
      path: 'M80 20 L120 20 C130 30 130 40 120 50 L80 50 C70 40 70 30 80 20',
      labelX: 140,
      labelY: 35,
      lineStart: { x: 120, y: 35 },
      lineEnd: { x: 135, y: 35 }
    }
  },
  // Add more regions for other body parts...
};