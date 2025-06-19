"use client";

import Image from "next/image";
import React from "react";

type Block = {
  id?: string;
  type: string;
  data: any;
};


export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) {
    return <p className="text-secondary">Konten kosong.</p>;
  }

  return (
    <div className="prose prose-neutral prose-lg max-w-none">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "header":
            const level = block.data.level || 2;
            const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
            return (
              <HeaderTag key={idx} className="mt-4">
                {block.data.text}
              </HeaderTag>
            );

          case "paragraph":
            return (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );

          case "image":
            return (
              <div key={idx} className="relative w-full h-64 my-4">
                <Image
                  src={block.data.file?.url || block.data.url}
                  alt={block.data.caption || `image-${idx}`}
                  width={800}
                  height={800}
                  className="rounded-lg shadow-md object-cover"
                />
                {block.data.caption && (
                  <p className="text-center text-sm text-secondary mt-1">
                    {block.data.caption}
                  </p>
                )}
              </div>
            );

          case "list":
            return block.data.style === "ordered" ? (
              <ol key={idx} className="list-decimal list-inside">
                {block.data.items.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            ) : (
              <ul key={idx} className="list-disc list-inside">
                {block.data.items.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-accent pl-4 italic"
              >
                <div dangerouslySetInnerHTML={{ __html: block.data.text }} />
                {block.data.caption && (
                  <footer className="text-xs text-secondary mt-1">
                    — {block.data.caption}
                  </footer>
                )}
              </blockquote>
            );

          case "code":
            return (
              <pre
                key={idx}
                className="bg-gray-100 rounded p-2 overflow-auto text-sm"
              >
                <code>{block.data.code}</code>
              </pre>
            );

          case "delimiter":
            return <hr key={idx} className="my-4 border-t-2 border-gray-300" />;

          case "table":
            return (
              <div key={idx} className="overflow-auto my-4">
                <table className="table-auto border border-gray-300">
                  <tbody>
                    {block.data.content.map(
                      (row: string[], rowIndex: number) => (
                        <tr key={rowIndex}>
                          {row.map((cell: string, cellIndex: number) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-300 p-1"
                              dangerouslySetInnerHTML={{ __html: cell }}
                            />
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            );

          case "checklist":
            return (
              <ul key={idx} className="space-y-1">
                {block.data.items.map((item: any, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      readOnly
                      className="accent-accent"
                    />
                    <span
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></span>
                  </li>
                ))}
              </ul>
            );

          case "embed":
            return (
              <div key={idx} className="my-4">
                <iframe
                  src={block.data.embed}
                  title={block.data.caption || `embed-${idx}`}
                  width={block.data.width || "100%"}
                  height={block.data.height || 320}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full rounded"
                ></iframe>
                {block.data.caption && (
                  <p className="text-center text-sm text-secondary mt-1">
                    {block.data.caption}
                  </p>
                )}
              </div>
            );

          default:
            return (
              <p key={idx} className="text-secondary italic">
                [Tidak dapat render blok tipe: {block.type}]
              </p>
            );
        }
      })}
    </div>
  );
}
