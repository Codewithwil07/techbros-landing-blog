import Image from "next/image";
import { notFound } from "next/navigation";
import { jasaLists } from "@/components/shared/data";

interface JasaDetailPageProps {
  params: { slug: string };
}

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function JasaDetailPage({ params }: JasaDetailPageProps) {
  const jasa = jasaLists.find(
    (item) => generateSlug(item.title) === params.slug
  );

  if (!jasa) {
    notFound();
  }

  return (
    <section className="bg-section-light py-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-card overflow-hidden shadow-card">
          <Image
            src={jasa.image}
            alt={jasa.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-title text-accent mb-2">{jasa.title}</h1>
          <p className="text-small text-white bg-accent inline-block px-3 py-1 rounded-md mb-4">
            {jasa.date}
          </p>
          <p className="text-body text-secondary leading-relaxed">
            {jasa.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum non orci sed lorem sagittis cursus. Sed
            at neque vitae justo tincidunt hendrerit. Ut sed tellus quis lorem
            faucibus efficitur.
          </p>
        </div>
      </div>
    </section>
  );
}
