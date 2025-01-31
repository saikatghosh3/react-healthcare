import React from 'react';
import { AboutHero } from './AboutHero';
import { MissionVision } from './MissionVision';
import { TeamSection } from './TeamSection';

export const About = () => {
  return (
    <div>
      <AboutHero />
      <MissionVision />
      <TeamSection />
    </div>
  );
};