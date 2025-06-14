"use client";

import React, { useState } from "react";
import { faqs } from "../shared/data";
import { ChevronDown } from "lucide-react";

const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pertanyaan yang{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sering Diajukan
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Kami telah mengumpulkan jawaban atas pertanyaan umum terkait layanan
            joki tugas coding agar kamu lebih mudah memahami cara kerja dan
            manfaat techbros.id.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-8 transition-all duration-300 ${
                  activeFaq === index
                    ? "pb-6 opacity-100"
                    : "pb-0 opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
