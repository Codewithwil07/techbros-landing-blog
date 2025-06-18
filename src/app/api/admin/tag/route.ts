import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: ambil semua tag
export const GET = async () => {
  const tags = await prisma.tag.findMany();
  return NextResponse.json(tags);
};

// POST: buat tag baru
export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    if (!data.name || typeof data.name !== "string") {
      return NextResponse.json({ error: "Name harus string" }, { status: 400 });
    }

    const tag = await prisma.tag.create({
      data: { name: data.name },
    });

    return NextResponse.json(tag, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
