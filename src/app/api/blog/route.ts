import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // prisma client

// GET semua blog
export async function GET() {
  const blogs = await prisma.blog.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(blogs);
}

