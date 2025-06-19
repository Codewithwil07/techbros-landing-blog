import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { CalendarDays, Eye } from "lucide-react";
import BlogCard from "@/components/ui/Card";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/ui/custom/BlockRerender";

export default async function DetailBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: params.slug },
    });

    if (!blog) {
      notFound(); // biar render 404 page Next.js
    }

    const blogLainnya = await prisma.blog.findMany({
      where: {
        slug: { not: params.slug },
      },
      take: 8,
    });

    const blogSering = await prisma.blog.findMany({
      where: {
        slug: { not: params.slug },
      },
      take: 3,
    });

    return (
      <section className="bg-section-light py-12 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center text-secondary text-sm mb-6 gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/admin.jpg"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full w-10 h-10"
                />
                <span>By Author</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>13.450</span>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] rounded-card overflow-hidden mb-8 shadow-md">
              <Image
                src={blog.cover || "/global.svg"}
                alt={blog.title || "Blog"}
                fill
                className="object-cover"
              />
            </div>

            <article className="prose prose-neutral prose-lg max-w-none">
              {(() => {
                const blockData = blog.content
                  ? JSON.parse(blog.content)
                  : null;
                return blockData?.blocks ? (
                  <BlockRenderer blocks={blockData.blocks} />
                ) : (
                  <p>Null</p>
                );
              })()}
            </article>

            {blog.tag && blog.tag.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tag.map((tag) => (
                  <span
                    key={tag.trim()}
                    className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="p-4 border rounded-card shadow-sm">
              <h2 className="font-semibold text-accent mb-2">
                Langganan Berita
              </h2>
              <p className="text-sm text-secondary mb-3">
                Masukkan email kamu untuk mendapatkan update artikel terbaru dan
                Nikmati diskon 20% setiap pemesanan
              </p>
              <input
                type="email"
                placeholder="Email kamu"
                className="w-full border rounded-md p-2 mb-2"
              />
              <button className="w-full bg-accent text-white py-2 rounded-md">
                Langganan Sekarang
              </button>
            </div>
            <div className="artikel-populer">
              <h2 className="font-semibold text-accent mb-3">
                Artikel Populer
              </h2>
              <ul className="space-y-3">
                {blogSering.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <Link href={`/blog/${item.slug}`}>
                      <div className="relative w-12 h-8 overflow-hidden cursor-pointer">
                        <Image
                          src={item.image || "/teamhead.jpeg"}
                          alt={item.title || "Blog"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <Link href={`/blog/${item.slug}`}>
                      <span className="text-sm text-secondary hover:underline cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-card p-4 h-44 flex items-center justify-center">
              <p className="text-sm text-secondary">Space Iklan Disewakan</p>
            </div>
          </aside>
        </div>

        <div className="mt-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4">
          <h2 className="text-xl font-semibold mb-4">
            Rekomendasi Artikel Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogLainnya.map((items) => (
              <BlogCard items={items} key={items.id} basePath="blog" />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("SSR Blog Error", err);
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Terjadi kesalahan pada server.</p>
      </section>
    );
  }
}
