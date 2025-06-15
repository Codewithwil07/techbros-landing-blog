"use client";

import React, { useEffect, useState } from "react";
import { testimonials } from "../../shared/data";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeTestimonial];

  return (
    <section
      id="testimonial"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Apa Kata Mereka Tentang{" "}
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Techbros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami telah membantu ribuan mahasiswa menyelesaikan tugas coding
            dengan hasil memuaskan dan tepat waktu. Berikut pengalaman mereka
            menggunakan jasa kami.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  width={500}
                  height={500}
                  placeholder="empty"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{active.text}&rdquo;
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {active.name}
                  </h4>
                  <p className="text-gray-600">{active.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
