import { AboutHero } from './AboutHero';
import { AboutStory } from './AboutStory';
import { MissionVision } from './MissionVision';
import { TeamSection } from './TeamSection';
import { AboutCta } from './AboutCta';

export const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <TeamSection />
      <AboutCta />
    </div>
  );
};