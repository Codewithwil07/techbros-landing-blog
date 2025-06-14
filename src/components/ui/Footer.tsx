"use client";

import React from "react";
import { Code } from "lucide-react";
import { CircleAbstract } from "./Abstract";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <CircleAbstract />
      <div className="max-w-7xl mx-auto z-40">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">techbros</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Jasa joki tugas coding cepat dan amanah nomor 1 di Indonesia.
              Solusi cepat dan profesional untuk semua kebutuhan coding kamu.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Algoritma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 techbros😎 Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
