import Link from "next/link";
import Image from "next/image";
import { jasaLists } from "@/components/shared/data";

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function JasaPage() {
  return (
    <main className="bg-bg min-h-screen">
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#LayanaJokiCoding</h1>
      </div>
      <section className="bg-section-light py-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {jasaLists.map((jasa) => (
              <Link
                key={jasa.id}
                href={`/jasa/${generateSlug(jasa.title)}`}
                className="cursor-pointer overflow-hidden transition block"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={jasa.image}
                    alt={jasa.title}
                    fill
                    className="object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                  />
                </div>
                <div className="pt-3 pb-4 px-0 flex flex-col gap-y-2">
                  <h2 className="text-xl font-bold text-accent mb-1">
                    {jasa.title}
                  </h2>
                  <p className="text-small text-white bg-accent inline-block px-2 py-0.5 rounded mb-1 w-fit">
                    {jasa.date}
                  </p>
                  <p className="text-body text-secondary">{jasa.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
