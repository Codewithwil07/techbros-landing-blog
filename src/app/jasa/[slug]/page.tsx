import Image from "next/image";
import { notFound } from "next/navigation";
import { jasaLists } from "@/components/shared/data";

// Define the correct props type for Next.js dynamic routes
interface PageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Pre-generate all possible slugs at build time
export function generateStaticParams() {
  return jasaLists.map((jasa) => ({
    slug: generateSlug(jasa.title),
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const jasa = jasaLists.find((item) => generateSlug(item.title) === params.slug);

  if (!jasa) return {};

  return {
    title: `${jasa.title} | YourSiteName`,
    description: jasa.description,
    openGraph: {
      images: [jasa.image],
    },
  };
}

export default function JasaDetailPage({ params }: PageProps) {
  const jasa = jasaLists.find(
    (item) => generateSlug(item.title) === params.slug
  );

  if (!jasa) {
    notFound();
  }

  return (
    <section className="bg-section-light py-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-full aspect-video rounded-card overflow-hidden shadow-card">
          <Image
            src={jasa.image}
            alt={jasa.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="mt-6 space-y-4">
          <h1 className="text-title text-accent mb-2">{jasa.title}</h1>
          <p className="text-small text-white bg-accent inline-block px-3 py-1 rounded-md">
            {jasa.date}
          </p>
          <div className="prose max-w-none text-body text-secondary">
            <p>{jasa.description}</p>
            {/* Add more content sections as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}