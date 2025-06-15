"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["beranda", "tentang", "harga", "kontak", "jasa"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const renderNavLinks = (mobile = false) =>
    navLinks.map((item) => {
      const path = item === "beranda" ? "/" : `/${item}`;
      return (
        <Link
          key={item}
          href={path}
          className={`${
            mobile
              ? "text-secondary hover:text-primary"
              : "text-accent hover:text-primary"
          } font-medium capitalize transition-colors`}
        >
          {item}
        </Link>
      );
    });

  return (
    <nav className="sticky top-0 w-full z-50 transition-all duration-500 translate-y-0 opacity-100">
      <div className="bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                width={150}
                height={100}
                alt="logo"
                className="rounded-md pb-1 px-0.5 bg-white"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {renderNavLinks()}
            </div>

            {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bg transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center px-4 py-4 space-y-3">
          {renderNavLinks(true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
