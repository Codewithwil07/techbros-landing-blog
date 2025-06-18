"use client";

import React from "react";
import BlogForm from "@/components/admin/blog/BlogForm";

export default function AddPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Tambah Blog</h1>
      <BlogForm initialData={{}} />
    </div>
  );
}
