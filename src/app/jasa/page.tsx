"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Jasa Joki Tugas Coding",
    description: "Pengerjaan tugas coding berkualitas, tepat waktu, dan aman.",
    image: "/images/jasa-coding.jpg",
  },
  {
    title: "Pembuatan Website / Aplikasi",
    description: "Bangun website atau aplikasi sesuai kebutuhan kamu.",
    image: "/images/jasa-website.jpg",
  },
  {
    title: "Revisi Skripsi Coding",
    description: "Bantuan revisi skripsi coding agar cepat acc dosen.",
    image: "/images/jasa-skripsi.jpg",
  },
];

const JasaPage: React.FC = () => {
  return (
    <section className="bg-section-light py-section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-title font-bold text-primary mb-4">
          Layanan <span className="text-accent">StackTugas</span>
        </h1>
        <p className="text-body text-secondary max-w-3xl mx-auto">
          Kami menyediakan berbagai layanan profesional untuk mendukung
          kebutuhan coding Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-bg rounded-card shadow-card overflow-hidden group transition-all"
          >
            <div className="overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
              />
            </div>
            <div className="p-card text-left">
              <h3 className="text-title font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-body text-secondary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JasaPage;
