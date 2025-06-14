import React from "react";
import { CheckCircle } from "lucide-react";
import type { Package } from "@/components/shared/types";
import LinkButton from "./LinkButton";

type PricingCardProps = {
  data: Package;
};

const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
  return (
    <div
      className={`relative bg-white ${
        data.gradient
      } rounded-3xl p-8 border-2 ${
        data.borderColor
      } hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        data.recommended ? "scale-105 shadow-xl" : ""
      }`}
    >
      {data.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Recommended
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{data.name}</h3>
        <div className="text-4xl font-bold text-gray-800 mb-2">
          Rp <span className="text-5xl">{data.price}</span>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        <h4 className="font-bold text-gray-800 mb-2">Fitur</h4>
        {data.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <LinkButton
        className="w-full text-black"
        variant={data.recommended ? "solid" : "outline"}
      >
        Pilih Paket
      </LinkButton>
    </div>
  );
};

export default PricingCard;
