import JasaForm from "@/components/admin/jasa/JasaForm";
  
const getCurrentBlog = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/jasa/${id}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    const text = await res.text();
    console.error(`Error fetch: ${res.status} ${res.statusText}`, text);
    throw new Error("Gagal ambil data");
  }
  return res.json();
};

interface BlogFormPageProps {
  params: { id: string }; // perbaiki tipe params
}

export default async function BlogFormPage({ params }: BlogFormPageProps) {
  const { id } = params;
  const currentBlog = await getCurrentBlog(id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Jasa</h1>
      <JasaForm initialData={currentBlog} />
    </div>
  );
}
