"use client";

import React from "react";
import Image from "next/image";
import { ArticleItem } from "../shared/types";

type CardListProps = {
  items: ArticleItem[] | undefined | null;  // tambahkan kemungkinan undefined/null
};

const ArticleCard: React.FC<CardListProps> = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-secondary text-center">
        Belum ada artikel yang tersedia.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-8">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-[var(--color-section-dark)] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] group transition duration-300"
        >
          <div className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            <span className="absolute bottom-2 left-2 bg-[var(--color-accent)] text-white text-xs font-semibold px-3 py-1 rounded">
              {item.date}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-title font-bold text-primary text-4xl mb-2">
              {item.title}
            </h3>
            <p className="text-body text-secondary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
