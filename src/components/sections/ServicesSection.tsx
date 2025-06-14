"use client";

import React, { useEffect, useState } from "react";
import { services } from "../shared/data";

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Layanan Utama{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              techbros.id
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            techbros adalah jasa joki tugas coding nomor 1 di Indonesia
            yang siap membantu menyelesaikan berbagai jenis tugas pemrograman
            dengan cepat, akurat, dan terpercaya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-xl`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* <Button>Pesan Sekarang</Button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
