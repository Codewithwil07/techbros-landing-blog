// shared/data.ts
import {
  CheckCircle,
  Users,
  Clock,
  Award,
  Code,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import type {
  Stat,
  Testimonial,
  Faq,
  Package,
  Service,
  Team,
  Logos,
  ArticleItem,
} from "./types";


export const stats: Stat[] = [
  { number: "1000+", label: "Tugas Selesai", icon: CheckCircle },
  { number: "500+", label: "Klien Puas", icon: Users },
  { number: "24/7", label: "Support", icon: Clock },
  { number: "100%", label: "Terpercaya", icon: Award },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rina Sari",
    role: "Mahasiswa Teknik Informatika",
    text: "techbros benar-benar menyelamatkan saya dari deadline yang mepet! Tugas coding selesai tepat waktu dengan hasil yang sangat memuaskan.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1661434380261-ca9305950dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dedi Pratama",
    role: "Mahasiswa Sistem Informasi",
    text: "Layanan joki coding yang profesional dan ramah. Saya jadi lebih tenang dan bisa fokus belajar karena tugas sudah beres dengan kualitas bagus.",
    avatar:
      "https://images.unsplash.com/photo-1709377236121-8feef43ea847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Nadia Putri",
    role: "Mahasiswa Teknik Komputer",
    text: "Rekomendasi terbaik untuk kamu yang kesulitan coding! Tim techbros cepat, teliti, dan sangat membantu.",
    avatar:
      "https://images.unsplash.com/photo-1695753640148-0c7b3bcd3b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllJTIwYXNpYW58ZW58MHx8MHx8fDA%3D",
  },
];

export const faqs: Faq[] = [
  {
    question: "Bagaimana cara memesan jasa joki tugas coding?",
    answer:
      "Kamu cukup hubungi kami lewat WhatsApp, jelaskan tugas coding yang ingin dikerjakan, lalu kami akan berikan estimasi harga dan waktu pengerjaan.",
  },
  {
    question: "Apakah tugas saya akan dikerjakan tepat waktu?",
    answer:
      "Kami prioritaskan deadline kamu. Tim profesional techbros selalu berusaha menyelesaikan tugas tepat waktu tanpa mengurangi kualitas.",
  },
  {
    question: "Apakah saya bisa meminta revisi jika hasil belum sesuai?",
    answer:
      "Tentu saja! Kami menyediakan revisi gratis sesuai paket yang dipilih agar kamu benar-benar puas dengan hasilnya.",
  },
  {
    question: "Apakah tugas saya dijamin kerahasiaannya?",
    answer:
      "Privasi kamu sangat penting bagi kami. Semua tugas dijaga kerahasiaannya dan tidak akan dibagikan ke pihak lain.",
  },
];

export const packages: Package[] = [
  {
    name: "Basic",
    price: "50.000",
    features: [
      "Pengerjaan 1 tugas coding sederhana",
      "Kode rapi & sesuai instruksi",
      "Revisi 1x gratis",
      "Dukungan chat via WhatsApp",
      "Waktu pengerjaan hingga 3 hari",
    ],
    recommended: false,
    gradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    question: encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda untuk paket Basic"
    ),
  },
  {
    name: "Standard",
    price: "100.000",
    features: [
      "Pengerjaan hingga 3 tugas coding",
      "Kode bersih & dokumentasi lengkap",
      "Revisi 2x gratis",
      "Dukungan prioritas via WhatsApp",
      "Waktu pengerjaan hingga 5 hari",
    ],
    recommended: false,
    gradient: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    question: encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda untuk paket Standard"
    ),
  },
  {
    name: "Premium",
    price: "150.000+",
    features: [
      "Pengerjaan tugas coding tanpa batas (skala kecil-menengah)",
      "Kode berkualitas tinggi & dokumentasi lengkap",
      "Revisi tanpa batas selama 7 hari",
      "Konsultasi langsung via WhatsApp",
      "Waktu pengerjaan cepat, maksimal 7 hari",
    ],
    recommended: true,
    gradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    question: encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda untuk paket Premium"
    ),
  },
  // {
  //   name: "Skripsi / Magang",
  //   price: "300.000+",
  //   features: [
  //     "Full pengerjaan sistem dari nol (bisa website, desktop, mobile, dll)",
  //     "Dapat dokumentasi teknis (struktur folder, cara run, penjelasan fitur)",
  //     "Stack fleksibel: Python, Java, C++, PHP, Laravel, React, dsb",
  //     "Bisa request revisi teknis",
  //     "Estimasi 3–7 hari pengerjaan (bisa dibahas)",
  //     "Konsultasi ringan via chat",
  //     "❌ Tidak termasuk pembuatan laporan bab 1–5",
  //     "❌ Tidak termasuk revisi dosen non-teknis",
  //   ],
  //   recommended: true,
  //   gradient: "from-yellow-50 to-yellow-100",
  //   borderColor: "border-yellow-200",
  // },
];

export const services: Service[] = [
  {
    icon: Code,
    title: "Bantuan Tugas Coding Cepat & Terpercaya",
    description:
      "Kami siap menyelesaikan tugas coding kamu dengan hasil yang akurat dan tepat waktu — tanpa ribet dan penuh tekanan.",
  },
  {
    icon: Globe,
    title: "Desain Website & Kode Modern",
    description:
      "Dapatkan solusi coding dengan kualitas kode bersih dan desain modern yang bisa langsung kamu gunakan.",
  },
  {
    icon: Shield,
    title: "Solusi Joki Tugas Lengkap dan Andal",
    description:
      "Mulai dari tugas kecil hingga proyek besar, tim ahli kami siap membantu kamu menyelesaikan tugas coding dengan hasil terbaik.",
  },
  {
    icon: Zap,
    title: "Integrasi Lengkap Untuk Kemudahan Kamu",
    description:
      "Kami mendukung berbagai platform dan tools coding populer agar tugas kamu selesai dengan mudah dan cepat.",
  },
];

export const team: Team[] = [
  {
    name: " Parker Wang",
    role: "Head of Teach / Fullstack Dev",
    avatar: "/teamhead.jpeg",
  },
  {
    name: "Dony Kazama",
    role: "Backend Dev",
    avatar:
      "https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sherlina Ayu",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1677168916969-e5a4af982664?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mawar Eva",
    role: "Frontend Dev",
    avatar:
      "https://plus.unsplash.com/premium_photo-1679064458881-76904cf6d1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const logos: Logos[] = [
  {
    name: "Bluegrana",
    src: "/op1.png",
  },
  {
    name: "Syndicate",
    src: "https://img.icons8.com/?size=96&id=kOSQES6o7X1Z&format=png",
  },
  {
    name: "ZoneEnjoy",
    src: "https://img.icons8.com/?size=96&id=Q7zerQ0gSSTU&format=png",
  },
];


// export const jasaLists: ArticleItem[] = [
//   {
//     id: 5,
//     slug: "integrasi-payment-gateway",
//     title: "Integrasi Payment Gateway",
//     date: "4 Desember 2024",
//     description:
//       "Kami bantu integrasikan payment gateway populer (Midtrans, Xendit, dll) ke website atau aplikasi kamu. Transaksi aman, proses cepat, dan mendukung berbagai metode pembayaran.",
//     image: cover,
//   },
//   {
//     id: 4,
//     slug: "pembuatan-api-backend",
//     title: "Pembuatan API Backend",
//     date: "2 Desember 2024",
//     description:
//       "Jasa pembuatan REST API atau GraphQL untuk kebutuhan aplikasi kamu. Dukungan berbagai teknologi seperti Node.js, Express, Laravel, dan lainnya. Clean code dan dokumentasi lengkap.",
//     image: cover,
//   },
//   {
//     id: 3,
//     slug: "revisi-skripsi-coding",
//     title: "Revisi Skripsi Coding",
//     date: "20 September 2024",
//     description:
//       "Bantuan revisi skripsi khusus untuk bagian coding dan implementasi sistem. Tidak termasuk revisi laporan atau dokumen bab 1-5, fokus pada perbaikan kode dan fungsionalitas.",
//     image: cover,
//   },
//   {
//     id: 2,
//     slug: "pembuatan-website-aplikasi",
//     title: "Pembuatan Website / Aplikasi",
//     date: "10 Agustus 2024",
//     description:
//       "Layanan pembuatan website dan aplikasi berbasis web yang responsif, modern, dan SEO friendly. Cocok untuk UMKM, startup, hingga perusahaan besar. Custom fitur sesuai kebutuhan kamu.",
//     image: cover,
//   },
//   {
//     id: 1,
//     slug: "jasa-joki-tugas-coding",
//     title: "Jasa Joki Tugas Coding",
//     date: "20 Juli 2024",
//     description:
//       "Kami menyediakan jasa joki tugas coding untuk berbagai bahasa pemrograman seperti Java, Python, C++, dan lainnya. Proyek dikerjakan oleh profesional dengan jaminan kualitas, tepat waktu, dan aman dari plagiarisme.",
//     image: cover,
//   },
//   {
//     id: 6,
//     slug: "optimasi-website",
//     title: "Optimasi Website",
//     date: "5 Februari 2024",
//     description:
//       "Layanan optimasi kecepatan website agar lebih cepat diakses dan mendapatkan skor tinggi di Google PageSpeed. Termasuk kompres gambar, minify CSS/JS, dan setting cache.",
//     image: cover,
//   },
// ];

