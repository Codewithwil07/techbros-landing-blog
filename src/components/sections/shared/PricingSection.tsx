"use client";

import React from "react";
import { packages } from "../../shared/data";
import PricingCard from "../../ui/PricingCard";

const PricingSection: React.FC = () => {
  return (
    <section
      id="paket"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-section-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pilih Paket Joki Tugas{" "}
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Codingmu
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati layanan joki tugas coding profesional dengan harga bersaing
            dan hasil terbaik. Paket fleksibel sesuai kebutuhan kamu!
          </p>
        </div>

        {/* Card Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            place-items-center
          "
        >
          {packages.map((pkg, index) => (
            <PricingCard key={index} data={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
