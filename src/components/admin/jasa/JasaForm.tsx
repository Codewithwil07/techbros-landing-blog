"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/custom/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils/slugify";


const schema = z.object({
  title: z.string().min(3, "Title minimal 3 karakter"),
  description: z.string().min(5, "Description minimal 5 karakter"),
  content: z.string().min(10, "Content minimal 10 karakter"),
  cover: z.string().url("Harus URL gambar valid"),
});

type FormValues = z.infer<typeof schema>;

export default function BlogForm({ initialData = {} }: { initialData?: any }) {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      cover: "",
      content: "",
    },
  });

  useEffect(() => {
    if (initialData && initialData.id && !initialized) {
      reset({
        title: initialData.title || "",
        description: initialData.description || "",
        cover: initialData.cover || "",
        content: initialData.content || "",
      });
      setInitialized(true);
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    const finalData = {
      ...data,
      slug: slugify(data.title),
    };

    try {
      const res = await fetch(
        initialData?.id
          ? `/api/admin/jasa/${initialData.id}`
          : `/api/admin/jasa`,
        {
          method: initialData?.id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        }
      );

      if (!res.ok) throw new Error("Gagal simpan data");

      router.push("/admin/dashboard/jasa");
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // cegah submit default
        handleSubmit(onSubmit)(e);
      }}
      className="space-y-4 max-w-lg"
    >
      <div>
        <label className="block text-sm mb-1">Title</label>
        <Input {...register("title")} placeholder="Title" />
        {errors.title && (
          <p className="text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Description</label>
        <Textarea
          {...register("description")}
          placeholder="Description"
          rows={2}
        />
        {errors.description && (
          <p className="text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Cover</label>
        <Input
          {...register("cover")}
          placeholder="https://example.com/cover.jpg"
        />
        {errors.cover && (
          <p className="text-sm text-red-600">{errors.cover.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Content</label>
        <Textarea
          {...register("content")}
          placeholder="https://example.com/cover.jpg"
        />
        {errors.cover && (
          <p className="text-sm text-red-600">{errors.cover.message}</p>
        )}
      </div>

      <Button type="submit" variant="solid" className="cursor-pointer">
        {initialData?.id ? "Update" : "Create"}
      </Button>
    </form>
  );
}
