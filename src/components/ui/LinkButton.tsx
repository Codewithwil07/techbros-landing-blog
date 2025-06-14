'use client';

import React from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'solid' | 'outline' | 'outlinedark';
  children: ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'solid',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300';

  const variants = {
    solid: 'bg-primary text-bg hover:shadow-lg text-white hover:scale-105',
    outline: 'border-2 border-primary text-black hover:bg-primary text-bg',
    outlinedark: 'hover:border-2 border-primary text-white bg-primary',
  };

  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
      href={props.href || '#beranda'}
    >
      {children}
    </a>
  );
};

export default LinkButton;
