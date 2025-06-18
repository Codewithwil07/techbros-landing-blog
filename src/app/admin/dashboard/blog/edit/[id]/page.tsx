import BlogForm from "@/components/admin/blog/BlogForm";

const getCurrentBlog = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog/${id}`,
    { cache: "no-cache" }
  );
  if (!res.ok) throw new Error("Gagal ambil data");
  return res.json();
};

export default async function BlogFormPage({
  params,
}: {
  params: { id: string };
}) {
  let currentBlog: any = null;
  try {
    currentBlog = await getCurrentBlog(params.id);
  } catch (err) {
    console.error(err);
  }

  if (!currentBlog) {
    return (
      <div className="text-red-600">
        Gagal memuat data blog. Silakan coba lagi.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <BlogForm initialData={currentBlog} />
    </div>
  );
}
