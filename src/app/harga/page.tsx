import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#Harga</h1>
      </div>
      <PricingSection />
      <FaqSection/>
    </>
  );
};

export default page;
