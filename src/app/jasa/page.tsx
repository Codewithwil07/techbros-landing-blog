"use client";

import { jasaItems } from "@/components/shared/data";
import JasaList from "@/components/ui/Card";
import React from "react";

const JasaPage: React.FC = () => {
  return (
    <>
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#JasaKami</h1>
      </div>
      <div className="container mx-auto px-4">
        <JasaList items={jasaItems} />
      </div>
    </>
  );
};

export default JasaPage;
