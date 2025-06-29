import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminIndex() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  redirect("/admin/dashboard");
}
