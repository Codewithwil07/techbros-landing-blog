"use client";

import React from "react";
import LinkButton from "../ui/LinkButton";
import { WaveAbstract } from "../ui/Abstract";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-section-dark py-20 px-4 sm:px-6 lg:px-8 relative">
      <WaveAbstract ClassName="z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white flex flex-col gap-y-4 text-4xl md:text-5xl font-bold mb-6">
          Apa Tugas Coding Kamu? <br />
          <span className="">Mulai Sekarang Juga</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Tidak perlu bingung dan stres menyelesaikan tugas coding. Serahkan
          pada techbros, solusi joki coding terpercaya dan profesional di
          Indonesia!
        </p>
        <LinkButton className="relative cursor-pointer z-20" variant="outlinedark">
          Hubungi via WhatsApp
        </LinkButton>
      </div>
    </section>
  );
};

export default CtaSection;
