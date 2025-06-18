"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/custom/Button";
import { useEffect} from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils/slugify";

const schema = z.object({
  title: z.string().min(3, "Title minimal 3 karakter"),
  description: z.string().min(5, "Description minimal 5 karakter"),
  content: z.string().min(10, "Content minimal 10 karakter"),
  image: z.string().url("Harus URL gambar valid"),
});

type FormValues = z.infer<typeof schema>;

export default function JasaForm({ initialData = {} }: { initialData?: any }) {
  const router = useRouter();


  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      image: "",
    },
  });

  const title = watch("title") || "";
  const slug = slugify(title);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title || "",
        description: initialData.description || "",
        content: initialData.content || "",
        image: initialData.image || "",
      });
    }
  }, [initialData?.id]);



  const onSubmit = async (data: FormValues) => {
    const finalData = {
      ...data,
      slug,
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
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
        <label className="block text-sm mb-1">Content</label>
        <Textarea {...register("content")} placeholder="Content" rows={5} />
        {errors.content && (
          <p className="text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-1">Image URL</label>
        <Input
          {...register("image")}
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && (
          <p className="text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>


      <Button type="submit" variant="solid" className="cursor-pointer">
        {initialData?.id ? "Update" : "Create"}
      </Button>
    </form>
  );
}
