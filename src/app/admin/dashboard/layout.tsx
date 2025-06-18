"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SessionProvider, signOut } from "next-auth/react";
import { LogOut, FileText, Briefcase, LayoutDashboard } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-2 p-2 rounded hover:bg-gray-200 ${
      pathname === path ? "bg-gray-300 font-semibold" : ""
    }`;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 border-r p-4 space-y-4">
        <h1 className="text-xl font-bold text-accent mb-4">Admin Panel</h1>
        <nav className="flex flex-col space-y-1">
          <Link
            href="/admin/dashboard  "
            className={linkClass("/admin/dashboard")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link
            href="/admin/dashboard/blog"
            className={linkClass("/admin/dashboard/blog")}
          >
            <FileText size={18} />
            Kelola Blog
          </Link>
          <Link
            href="/admin/dashboard/jasa"
            className={linkClass("/admin/dashboard/jasa")}
          >
            <Briefcase size={18} />
            Kelola Jasa
          </Link>
          <Link
            href="/admin/dashboard/tag"
            className={linkClass("/admin/dashboard/tag")}
          >
            <Briefcase size={18} />
            Kelola Tag
          </Link>
        </nav>

        <div className="mt-6 border-t pt-4">
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-2 p-2 rounded hover:bg-red-100 cursor-pointer text-red-500 w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <SessionProvider>{children}</SessionProvider>
      </main>
    </div>
  );
}
