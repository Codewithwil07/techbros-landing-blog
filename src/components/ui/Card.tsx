import React from "react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg  ${className}`}>
      {children}
    </div>
  );
};

export default Card;
