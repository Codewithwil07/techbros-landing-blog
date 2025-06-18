"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export function ClientSide({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarFooter = pathname.startsWith("/admin");

  return (
    <main>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </main>
  );
}
