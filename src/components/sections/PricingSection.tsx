"use client";

import React from "react";
import { packages } from "../shared/data";
import PricingCard from "../ui/PricingCard";

const PricingSection: React.FC = () => {
  return (
    <section
      id="paket"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} data={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
