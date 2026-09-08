import { Hero } from './Home/components/Hero';
import { StatsBar } from './Home/components/StatsBar';
import { ServicesPreview } from './Home/components/ServicesPreview';
import { WhyChooseUs } from './Home/components/WhyChooseUs';
import { HowItWorks } from './Home/components/HowItWorks';
import { DoctorsPreview } from './Home/components/DoctorsPreview';
import { HealthPackages } from './Home/components/HealthPackages';
import { EmergencyCta } from './Home/components/EmergencyCta';
import { Testimonials } from './Home/components/Testimonials';
import { CtaBanner } from './Home/components/CtaBanner';
import { ChatbotWindow } from '../components/Chatbot/ChatbotWindow';

export const Home = () => {
  return (
    <div>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <DoctorsPreview />
      <HealthPackages />
      <EmergencyCta />

      <Testimonials />
      <CtaBanner />

      <ChatbotWindow />
    </div>
  );
};