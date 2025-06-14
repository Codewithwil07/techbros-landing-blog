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
    <div className="absolute w-screen left-0 bottom-0 z-10">
      <svg viewBox="0 0 1440 400">
        <circle cx="250" cy="200" r="150" fill="rgba(255, 255, 255, 0.04)" />
        <circle cx="1250" cy="120" r="130" fill="rgba(255, 255, 255, 0.06)" />
        <circle
          cx="700"
          cy="300"
          r="120"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="40"
        />
        <circle cx="-100" cy="-100" r="300" fill="rgba(255,255,255,0.05)" />
      </svg>
    </div>
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
