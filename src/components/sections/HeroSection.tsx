"use client";

import React, { useEffect, useState } from "react";
import { DotAbstrcat } from "../ui/Abstract";
import Icon from "../ui/SocialIcons";
import LinkButton from "../ui/LinkButton";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="beranda" className="section bg-section-light">
      <div className="max-w-7xl mx-auto text-center mb-16 mt-14">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Jasa Joki Tugas Coding
            <br />
            <span className="text-neutral-700">
              Cepat &amp; Amanah No 1 di Indonesia
            </span>
          </h1>

          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            techbros siap membantu kamu menyelesaikan tugas coding dengan cepat,
            profesional, dan terpercaya. Mulai dari web development, aplikasi
            mobile, hingga algoritma kompleks &mdash; serahkan semua ke kami!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              href="https://wa.me/6287767978358?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition w-[21rem] mx-auto md:w-fit"

            >
              <Icon.Wa className="w-5 h-5" />
              Pesan Sekarang via WhatsApp
            </LinkButton>
          </div>
        </div>
      </div>

      <div
        className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <DotAbstrcat ClassName="-top-14 left-40 -z-10" />
        <DotAbstrcat ClassName="-bottom-6 right-32 -z-10" />

        <div className="bg-gray-900 rounded-t-2xl w-2/3 mx-auto p-8 font-mono text-green-400 shadow-inner">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">techbros-project.js</span>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-purple-400">const</span> techbros = {"{"}
            </div>
            <div className="ml-4">
              <span className="text-blue-400">layanan</span>:{" "}
              <span className="text-yellow-400">
                &apos;Joki Tugas Coding&apos;
              </span>
              ,
            </div>
            <div className="ml-4">
              <span className="text-blue-400">kualitas</span>:{" "}
              <span className="text-yellow-400">
                &apos;Terpercaya &amp; Profesional&apos;
              </span>
              ,
            </div>
            <div className="ml-4">
              <span className="text-blue-400">waktu</span>:{" "}
              <span className="text-yellow-400">
                &apos;Tepat Deadline&apos;
              </span>
              ,
            </div>
            <div className="ml-4">
              <span className="text-blue-400">support</span>:{" "}
              <span className="text-yellow-400">&apos;24/7 WhatsApp&apos;</span>
            </div>
            <div>{"};"}</div>
            <div className="mt-4">
              <span className="text-gray-400">
                Solusi coding terbaik untukmu! 🚀
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
