// app/detail-jasa/page.tsx (atau sesuai rute kamu)
import Image, { StaticImageData } from "next/image";
import cover from '../../../assets/jasaweb.jpg'
type Jasa = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: StaticImageData;
};

const mockJasa: Jasa = {
  slug: "algoritma-dan-pemrograman",
  title: "Algoritma dan Pemrograman",
  description:
    "Sudah mencoba memecahkan masalah algoritma atau mengerjakan tugas pemrograman namun masih mengalami kesulitan? StackTugas.id hadir untuk membantumu! Kami fokus dalam membantu kamu menyelesaikan setiap masalah pemrograman dengan cepat dan tepat.",
  date: "15 May 2025",
  author: "stacktugas.id",
  image: cover, // ganti dengan path gambar kamu
};

export default function page() {
  return (
    <section className="bg-section-light py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Konten Kiri */}
        <div className="md:col-span-2">
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-card overflow-hidden shadow-card">
            <Image
              src={mockJasa.image}
              alt={mockJasa.title}
              fill
              className="object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-title text-accent mb-2">{mockJasa.title}</h1>
            <p className="text-small text-white bg-accent inline-block px-3 py-1 rounded-md mb-4">
              {mockJasa.date} • {mockJasa.author}
            </p>
            <p className="text-body text-secondary leading-relaxed">
              {mockJasa.description} Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum non orci sed lorem sagittis cursus.
              Sed at neque vitae justo tincidunt hendrerit. Ut sed tellus quis
              lorem faucibus efficitur.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-card shadow-card">
            <h2 className="text-subtitle text-accent mb-2">Langganan Berita</h2>
            <p className="text-small text-secondary mb-2">
              Masukkan email kamu untuk mendapatkan berita terbaru dari kami.
            </p>
            <input
              type="email"
              placeholder="Email kamu"
              className="w-full border border-accent rounded-md p-2 mb-2 text-sm"
            />
            <button className="w-full bg-accent text-white rounded-button py-2">
              Langganan Sekarang
            </button>
          </div>

          <div className="p-4 rounded-card">
            <h2 className="text-subtitle text-accent mb-2">
              Jasa yang sering digunakan
            </h2>
            <ul className="space-y-1 text-small text-secondary">
              <li>✔ Contoh UML Sistem Peminjaman</li>
              <li>✔ Algoritma dan Pemrograman</li>
              <li>✔ Jasa Bimbingan Skripsi</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-card shadow-card text-center">
            <p className="text-secondary text-small">Space Iklan Disewakan</p>
            <div className="mt-2">
              <svg
                className="mx-auto w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 17v-6h13M9 7v4M5 17V7M3 17V7" />
              </svg>
            </div>
          </div>
        </aside>
      </div>

      {/* Section Jasa Lainnya */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-subtitle text-accent mb-4">
          Jasa lainnya yang mungkin kamu butuhkan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-card shadow-card overflow-hidden"
            >
              <div className="relative w-full h-32">
                <Image
                  src={mockJasa.image}
                  alt="Jasa lainnya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-small text-accent">31 May 2025</p>
                <p className="text-body text-secondary">Judul Jasa {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
