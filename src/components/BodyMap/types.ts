export type Gender = 'male' | 'female';

export type BodyPart = 
  | 'brain'
  | 'eye'
  | 'ear'
  | 'nose'
  | 'teeth'
  | 'throat'
  | 'heart'
  | 'lungs'
  | 'arm'
  | 'elbow'
  | 'liver'
  | 'kidneys'
  | 'stomach'
  | 'spine'
  | 'hip'
  | 'lower-back'
  | 'thigh'
  | 'knee'
  | 'skin'
  | 'ankle'
  | 'foot';

export interface BodyPartData {
  id: BodyPart;
  label: string;
  coordinates: {
    male: { x: number; y: number };
    female: { x: number; y: number };
  };
}