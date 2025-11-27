import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { ModulesSection } from '../components/ModulesSection';
import { FaqSection } from "@/components/faq-section"
import { FinalFaqSection } from "@/components/final-faq-section"
import { FooterCTA } from '../components/FooterCTA';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#384E40] selection:text-white">
      <HeroSection />
      <IntroSection />
      <ModulesSection />
      <FaqSection />
      <FinalFaqSection />
      <FooterCTA />
    </main>
  );
}