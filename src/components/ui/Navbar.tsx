"use client";

import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <nav className="sticky top-0 w-full z-50 transition-all duration-500 translate-y-0 opacity-100 bg-transparent">
      <div className="bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-bg" />
              </div>
              <span className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
                techbros
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["beranda", "layanan", "paket", "testimonial"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-secondary hover:text-primary font-medium capitalize transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/6287767978358?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-bg px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-section-light transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-bg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {["beranda", "layanan", "paket", "testimonial"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block text-secondary hover:text-primary py-2 capitalize transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#kontak"
            className="block bg-primary text-bg px-4 py-2 rounded-lg text-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
