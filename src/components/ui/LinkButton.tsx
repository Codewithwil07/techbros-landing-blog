"use client";

import React from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
  children: ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  variant = "solid",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variants = {
    solid:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props} href="#beranda">
      {children}
    </a>
  );
};

export default LinkButton;
