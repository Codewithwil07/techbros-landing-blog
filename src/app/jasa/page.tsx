  import JasaCard from "@/components/ui/Card";

  async function getJasaList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jasa/`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Gagal fetch data jasa");
    return res.json();
  }

  export default async function JasaPage() {
    const jasaLists = await getJasaList();

    return (
      <main className="bg-section-light min-h-screen">
        <div className="bg-accent -top-18 w-full flex items-end justify-center pb-20 h-72 relative">
          <h1 className="text-title text-white font-bold">#LayananJokiCoding</h1>
        </div>
        <section className="bg-section-light py-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {jasaLists.map((jasa: any) => (
                <JasaCard key={jasa.id} items={jasa} basePath="jasa"/>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
