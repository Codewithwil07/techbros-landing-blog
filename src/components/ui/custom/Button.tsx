'use client';

import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-4 py-1.5 rounded-sm font-semibold transition-all duration-300';

  const variants = {
    solid: 'bg-primary text-white',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-bg',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
