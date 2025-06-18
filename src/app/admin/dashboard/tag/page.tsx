"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import  Button  from "@/components/ui/custom/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type Tag = {
  id: number;
  name: string;
};

export default function KelolaTagPage() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState("");
  const [tagToDelete, setTagToDelete] = useState<Tag | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/tag`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Gagal ambil data tag");
      const data = await res.json();
      setTags(data);
    } catch (err) {
      console.error(err);
      const finalError = err instanceof Error ? err : new Error(String(err));
      setAlertMessage(finalError.message);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const handleAddTag = async () => {
    const trimmed = newTag.trim();
    if (!trimmed) return setAlertMessage("Nama tag tidak boleh kosong");
    if (tags.some((t) => t.name.toLowerCase() === trimmed.toLowerCase())) {
      return setAlertMessage("Tag sudah ada");
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/tag`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmed }),
        }
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal tambah tag");
      }
      setNewTag("");
      fetchTags();
    } catch (err) {
      console.error(err);
      const finalError = err instanceof Error ? err : new Error(String(err));
      setAlertMessage(finalError.message);
    }
  };

  const handleConfirmDelete = async () => {
    if (!tagToDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/tag/${tagToDelete.id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal hapus tag");
      }
      setTagToDelete(null);
      fetchTags();
    } catch (err) {
      console.error(err);
      const finalError = err instanceof Error ? err : new Error(String(err));
      setAlertMessage(finalError.message);
    }
  };

  return (
    <div className="max-w-md ml-5 px-2">
      <h2 className="text-2xl font-semibold mb-4">Kelola Tag</h2>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Masukkan nama tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTag();
            }
          }}
        />
        <Button className="text-white cursor-pointer" onClick={handleAddTag}>
          Tambah
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 text-white">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm"
          >
            {tag.name}
            <button
              onClick={() => setTagToDelete(tag)}
              className="ml-2 text-xs hover:text-destructive cursor-pointer"
              aria-label={`Hapus ${tag.name}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Dialog konfirmasi hapus */}
      <Dialog open={!!tagToDelete} onOpenChange={() => setTagToDelete(null)}>
        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle>Hapus Tag</DialogTitle>
          </DialogHeader>
          <p>Apakah Anda yakin ingin menghapus tag &#34;{tagToDelete?.name}&#34;?</p>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setTagToDelete(null)}>
              Batal
            </Button>
            <Button variant="secondary" onClick={handleConfirmDelete}>
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog alert */}
      <Dialog open={!!alertMessage} onOpenChange={() => setAlertMessage(null)}>
        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle>Peringatan</DialogTitle>
          </DialogHeader>
          <p>{alertMessage}</p>
          <DialogFooter className="flex justify-end">
            <Button onClick={() => setAlertMessage(null)}>Tutup</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
