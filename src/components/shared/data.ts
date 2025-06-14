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
  },
  {
    name: "Premium",
    price: "150.000",
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
  },
];

export const services: Service[] = [
  {
    icon: Code,
    title: "Bantuan Tugas Coding Cepat & Terpercaya",
    description:
      "Kami siap menyelesaikan tugas coding kamu dengan hasil yang akurat dan tepat waktu — tanpa ribet dan penuh tekanan.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Desain Website & Kode Modern",
    description:
      "Dapatkan solusi coding dengan kualitas kode bersih dan desain modern yang bisa langsung kamu gunakan.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Shield,
    title: "Solusi Joki Tugas Lengkap dan Andal",
    description:
      "Mulai dari tugas kecil hingga proyek besar, tim ahli kami siap membantu kamu menyelesaikan tugas coding dengan hasil terbaik.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Integrasi Lengkap Untuk Kemudahan Kamu",
    description:
      "Kami mendukung berbagai platform dan tools coding populer agar tugas kamu selesai dengan mudah dan cepat.",
    color: "from-orange-500 to-red-600",
  },
];

export const team: Team[] = [
  {
    name: "Hansi Garcia",
    role: "Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBwcm9maWxlfGVufDB8fDB8fHww",
  },
  {
    name: "Lamine Fort",
    role: "App Developer",
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
  },
  {
    name: "Sophia Ann",
    role: "UI/UX Developer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Alexa Shu",
    role: "Front-end Developer",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
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
    name: "TailGrids",
    src: "https://img.icons8.com/?size=96&id=Q7zerQ0gSSTU&format=png",
  },
];
