"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function TagDropdown({
  items = [],
  onSelectTag,
}: {
  items: { id: number; name: string }[];
  onSelectTag: (tag: { id: number; name: string }) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = items.filter((tag) =>
    tag.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari tag..."
        className="mb-2"
      />

      {filtered.length > 0 ? (
        <ul className="border rounded bg-white max-h-48 overflow-y-auto shadow">
          {filtered.map((tag) => (
            <li
              key={tag.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelectTag(tag);
                setSearch("");
              }}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">Tag tidak ditemukan</p>
      )}
    </div>
  );
}
