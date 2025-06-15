import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "techbros | Joki Tugas Coding Cepat & Amanah No 1 di Indonesia",
  description: "Jasa Joki Tugas Coding Cepat & Amanah No 1 di Indonesia",
  icons: {
    icon: "/logos.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body>
        <main className="bg-main-light">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
