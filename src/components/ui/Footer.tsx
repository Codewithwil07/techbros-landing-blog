"use client";

import React from "react";
import { Code } from "lucide-react";
import { FooterBackground } from "./Abstract";
import Link from "next/link";
import Icon from "./SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-section-dark text-bg py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-20">
      <FooterBackground />
      <div className="max-w-7xl mx-auto z-40">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-bg" />
              </div>
              <span className="text-2xl font-bold">techbros</span>
            </div>
            <p className="text-secondary mb-4 max-w-md">
              Jasa joki tugas coding cepat dan amanah nomor 1 di Indonesia.
              Solusi cepat dan profesional untuk semua kebutuhan coding kamu.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <Link href="#" aria-label="Instagram">
                <Icon.Ig className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
              <Link href="#" aria-label="X (Twitter)">
                <Icon.X className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Icon.Fb className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-secondary">
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Algoritma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-secondary">
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Tim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bg transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-section-dark mt-8 pt-8 text-center text-secondary">
          <p>&copy; 2024 techbros😎 Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
