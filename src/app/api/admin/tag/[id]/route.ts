import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: ambil 1 tag by id
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const tag = await prisma.tag.findUnique({
    where: { id: Number(params.id) },
  });

  if (!tag) {
    return NextResponse.json({ error: "Tag tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(tag);
};

// PUT: update tag
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const data = await req.json();

    if (!data.name || typeof data.name !== "string") {
      return NextResponse.json({ error: "Name harus string" }, { status: 400 });
    }

    const tag = await prisma.tag.update({
      where: { id: Number(params.id) },
      data: { name: data.name },
    });

    return NextResponse.json(tag);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

// DELETE: hapus tag
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await prisma.tag.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ message: "Tag dihapus" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
