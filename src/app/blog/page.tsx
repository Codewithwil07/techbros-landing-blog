import ArticleCard from "@/components/ui/Card";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/`, {
    cache: "no-store", // biar nggak cache
  });
  if (!res.ok) throw new Error("Gagal fetch data blog");
  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="bg-section-light min-h-screen">
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#Artikel</h1>
      </div>
      <section className="bg-section-light py-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog: any) => (
              <ArticleCard items={blog} key={blog.id} basePath="blog"/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
