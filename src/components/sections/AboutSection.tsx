"use client";

import React from "react";
import { Code, Database, Smartphone, Globe } from "lucide-react";
import LinkButton from "../ui/LinkButton";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Solusi Joki Tugas Coding{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Terpercaya & Cepat
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Butuh bantuan menyelesaikan tugas coding? techbros siap jadi
              partner terbaik kamu dengan layanan profesional, hasil akurat, dan
              harga bersahabat.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hubungi kami sekarang dan anda tidak akan kecewa!
            </p>
            <LinkButton className="items-center cursor-pointer">
              Hubungi via WhatsApp
            </LinkButton>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600 text-sm">
                  HTML, CSS, JavaScript, React, Node.js
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Database</h3>
                <p className="text-gray-600 text-sm">
                  MySQL, PostgreSQL, MongoDB
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">
                  Flutter, React Native, Java
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Algoritma</h3>
                <p className="text-gray-600 text-sm">
                  Python, Java, C++, Data Structure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
