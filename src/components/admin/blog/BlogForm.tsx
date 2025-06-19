"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/custom/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TagDropdown from "@/components/ui/custom/TagDropdown";
import { slugify } from "@/utils/slugify";
import dynamic from "next/dynamic";

const EditorWrapper = dynamic(
  () => import("@/components/admin/EditorWrapper"),
  { ssr: false }
);

const schema = z.object({
  title: z.string().min(3, "Title minimal 3 karakter"),
  description: z.string().min(5, "Description minimal 5 karakter"),
  content: z.string().min(10, "Content minimal 10 karakter"),
  cover: z.string().url("Harus URL gambar valid"),
  tag: z.array(z.number()).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function BlogForm({ initialData = {} }: { initialData?: any }) {
  const router = useRouter();
  const [availableTags, setAvailableTags] = useState<
    { id: number; name: string }[]
  >([]);
  const [initialized, setInitialized] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      cover: "",
      content: "",
      tag: [],
    },
  });

  const tags = watch("tag") || [];
  // const title = watch("title") || "";
  // const slug = slugify(title);

  useEffect(() => {
    if (initialData && initialData.id && !initialized) {
      reset({
        title: initialData.title || "",
        description: initialData.description || "",
        cover: initialData.cover || "",
        content: initialData.content ? JSON.stringify(initialData.content) : "",
        tag: initialData.tags ? initialData.tags.map((t: any) => t.tag.id) : [],
      });
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    fetch("/api/admin/tag")
      .then((res) => res.json())
      .then((data) => setAvailableTags(data))
      .catch(() => setAvailableTags([]));
  }, []);

  const onSubmit = async (data: FormValues) => {
    const finalData = {
      ...data,
      slug: slugify(data.title),
    };

     console.log(finalData)

    try {
      const res = await fetch(
        initialData?.id
          ? `/api/admin/blog/${initialData.id}`
          : `/api/admin/blog`,
        {
          method: initialData?.id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        }
      );

      if (!res.ok) throw new Error("Gagal simpan data");

      router.push("/admin/dashboard/blog");
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan");
    }
  };

  const handleSelectTag = (tag: { id: number; name: string }) => {
    if (!tags.includes(tag.id)) {
      setValue("tag", [...tags, tag.id]);
    }
  };

  const handleRemoveTag = (tagId: number) => {
    setValue(
      "tag",
      tags.filter((t: number) => t !== tagId)
    );
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
        <EditorWrapper
          onChange={(data) => setValue("content", JSON.stringify(data))}
          initialData={
            initialData.content ? JSON.parse(initialData.content) : undefined
          }
        />
        {errors.content && (
          <p className="text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Tags</label>
        <TagDropdown items={availableTags} onSelectTag={handleSelectTag} />
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tagId, idx) => {
            const tagObj = availableTags.find((t) => t.id === tagId);
            return (
              <span
                key={tagObj?.id || idx}
                className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
              >
                {tagObj?.name || tagId}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tagId)}
                  className="text-red-600"
                >
                  ×
                </button>
              </span>
            );
          })}
        </div>
      </div>

      <Button type="submit" variant="solid" className="cursor-pointer">
        {initialData?.id ? "Update" : "Create"}
      </Button>
    </form>
  );
}
