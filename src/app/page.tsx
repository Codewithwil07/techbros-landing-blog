import AboutSection from "@/components/sections/shared/AboutSection";
import CtaSection from "@/components/sections/shared/CtaSection";
import FaqSection from "@/components/sections/shared/FaqSection";
import HeroSection from "@/components/sections/beranda/HeroSection";
import PartnersSection from "@/components/sections/shared/PartnerSectiom";
import PricingSection from "@/components/sections/shared/PricingSection";
import ServicesSection from "@/components/sections/beranda/ServicesSection";
import StatsSection from "@/components/sections/beranda/StatsSection";
import TeamSection from "@/components/sections/shared/TeamSection";
import TestimonialsSection from "@/components/sections/beranda/TestimonialsSection";

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
