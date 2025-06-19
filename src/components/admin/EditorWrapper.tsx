"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";

export default function EditorWrapper({
  onChange,
  initialData,
}: {
  onChange: (data: any) => void;
  initialData?: any;
}) {
  const editorRef = useRef<EditorJS | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editorRef.current) return; // prevent re-init
    const editor = new EditorJS({
      holder: "editorjs",
      data: initialData?.blocks ? initialData : { blocks: [] },
      tools: {
        header: Header,
        list: List,
        quote: Quote,
        code: CodeTool,
        table: Table,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByUrl(url: string) {
                return {
                  success: 1,
                  file: { url },
                };
              },
            },
          },
        },
      },
      onChange: async (api) => {
        const data = await api.saver.save();
        onChange(data);
      },
    });

    editorRef.current = editor;

    return () => {
      editor.destroy?.();
      editorRef.current = null;
    };
  }, [initialData, onChange]);

  const insertImage = () => {
    if (imageUrl && editorRef.current) {
      editorRef.current.blocks.insert("image", {
        file: { url: imageUrl },
      });
      setImageUrl("");
      setShowModal(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white rounded px-3 py-1 mb-2"
      >
        Tambah Gambar via URL
      </button>

      <div
        id="editorjs"
        className="border rounded p-3 w-[60rem] min-h-[300px]"
      />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-4 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Masukkan URL Gambar</h2>
            <div className="space-y-3">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://source.unsplash.com/random"
                className="border rounded w-full p-2"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setImageUrl("");
                  }}
                  className="border rounded px-3 py-1"
                >
                  Batal
                </button>
                <button
                  type="button"
                  disabled={!imageUrl}
                  onClick={insertImage}
                  className="bg-blue-600 text-white rounded px-3 py-1 disabled:bg-blue-300"
                >
                  Tambahkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
