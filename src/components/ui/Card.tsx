import React from "react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-section-light rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
