import Image from "next/image";
import { jasaLists } from "@/components/shared/data";

export default function JasaPage() {
  return (
    <main className="bg-section-light min-h-screen">
      <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
        <h1 className="text-title text-white font-bold">#LayananJokiCoding</h1>
      </div>
      <section className="bg-section-light py-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {jasaLists.map((jasa) => (
              <div key={jasa.id}>
                <div className="relative sm:h-56 md:h-64 rounded-md overflow-hidden">
                  <Image
                    src={jasa.image}
                    alt={jasa.title}
                    height={100}
                    width={100}
                    className="cursor-pointer w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1 will-change-transform"
                  />
                </div>
                <div className="pt-3 pb-4 px-0 flex flex-col gap-y-2">
                  <h2 className="text-body font-semibold text-accent mb-1 cursor-pointer">
                    {jasa.title}
                  </h2>
                  <p className="text-small text-white bg-accent inline-block px-2 py-0.5 rounded mb-1 w-fit">
                    {jasa.date}
                  </p>
                  <p className="text-body font-extralight text-secondary cursor-pointer">
                    {jasa.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
