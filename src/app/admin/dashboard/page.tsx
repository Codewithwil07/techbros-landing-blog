"use client";


import { useSession } from "next-auth/react";

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  return (
    <>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p>
        Hai {session?.user?.name || "Admin"}, Selamat datang di admin panel!
      </p>
    </>
  );
}
