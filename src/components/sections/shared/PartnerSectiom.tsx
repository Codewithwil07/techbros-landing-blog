"use client";

import React from "react";
import { logos } from "../../shared/data";
import Image from "next/image";

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-section-dark text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Official Partners
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        Techbros adalah kolaborasi dari berbagai tim joki coding profesional,
        siap membantu menyelesaikan tugas kamu dengan cepat, akurat, dan
        terpercaya.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-12 px-4">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.name}
            width={100}
            height={100}
            placeholder="empty"
            className={`opacity-70 hover:opacity-100 transition ${i === 0 ? 'w-32 h-32' : 'h-16 w-16'}`}
          />  
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
