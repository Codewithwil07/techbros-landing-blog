import AboutSection from "@/components/sections/shared/AboutSection";
import PartnersSection from "@/components/sections/shared/PartnerSectiom";
import TeamSection from "@/components/sections/shared/TeamSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#TentangKami</h1>
      </div>
      <AboutSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
};

export default page;
