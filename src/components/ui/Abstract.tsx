"use client";

import React from "react";
import { Components } from "../shared/types";

export const DotAbstrcat: React.FC<Components> = ({ ClassName = "" }) => {
  return (
    <div className={`absolute ${ClassName}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="black" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
};

export const CircleAbstract: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1440 600"
      className="absolute w-screen left-40 -bottom-10 -z-10 overflow-visible"
    >
      <circle cx="250" cy="200" r="150" fill="rgba(255, 255, 255, 0.09)" />
      <circle cx="1250" cy="120" r="130" fill="rgba(255, 255, 255, 0.09)" />
      <circle cx="700" cy="360" r="140" fill="rgba(255, 255, 255, 0.03)" />
      <circle cx="700" cy="360" r="100" fill="rgba(255, 255, 255, 0.09)" />
    </svg>
  );
};
  

export const WaveAbstract: React.FC<Components> = ({ ClassName = "" }) => {
  return (
    <div className={`absolute inset-0 ${ClassName}`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,255,255,0.05)"
          d="M0,320 C360,160 1080,480 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
};
