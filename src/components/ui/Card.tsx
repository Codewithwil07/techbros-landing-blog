"use client";

import { formatDate } from "../../utils/date";
import Image from "next/image";
import type { contentItem } from "@/components/shared/types";
import Link from "next/link";
import { useState } from "react";

type CardListProps = {
  items: contentItem;
  basePath: string;
};

const ContentCard = ({ items, basePath }: CardListProps) => {
  const [imgSrc, setImgSrc] = useState(items.cover|| "/globe.svg");

  return (
    <div key={items.id}>
      <Link href={`/${basePath}/${items.slug}`}>
        <div className="relative h-56 md:h-64 rounded-card overflow-hidden">
          <Image
            src={imgSrc}
            onError={() => setImgSrc("/globe.svg")}
            alt={items.description || "Gambar konten"}
            fill
            priority
            className="cursor-pointer object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1 will-change-transform"
          />
        </div>
      </Link>

      <div className="pt-3 pb-4 px-0 flex flex-col gap-y-2">
        <Link href={`/${basePath}/${items.slug}`}>
          <h2 className="text-subtitle-sm font-semibold text-accent mb-1 cursor-pointer hover:text-accent">
            {items.title}
          </h2>
        </Link>

        <p className="text-small text-white bg-accent inline-block px-2 py-0.5 rounded mb-1 w-fit">
          {formatDate(items.date)}
        </p>

        <Link href={`/${basePath}/${items.slug}`}>
          <p className="text-body font-extralight text-secondary cursor-pointer">
            {items.description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
