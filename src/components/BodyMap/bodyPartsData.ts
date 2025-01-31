import { BodyPartData } from './types';

export const bodyPartsData: BodyPartData[] = [
  {
    id: 'brain',
    label: 'Brain',
    coordinates: {
      male: { x: 100, y: 30 },
      female: { x: 100, y: 30 }
    }
  },
  {
    id: 'heart',
    label: 'Heart',
    coordinates: {
      male: { x: 95, y: 90 },
      female: { x: 95, y: 90 }
    }
  },
  {
    id: 'lungs',
    label: 'Lungs',
    coordinates: {
      male: { x: 100, y: 100 },
      female: { x: 100, y: 100 }
    }
  },
  // Add more body parts with accurate coordinates...
];