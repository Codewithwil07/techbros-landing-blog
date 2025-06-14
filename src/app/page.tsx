import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnerSectiom";
import PricingSection from "@/components/sections/PricingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Beranda() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
}
