import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// UPDATE jasa
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const jasa = await prisma.jasa.update({
    where: { id: Number(params.id) },
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      content: data.content,
      image: data.image,
      date: data.date,
      tag: data.tag,
    },
  });
  return NextResponse.json(jasa);
}
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    const jasa = await prisma.jasa.findUnique({
      where: { id },
    });

    if (!jasa) {
      return NextResponse.json(
        { message: "jasa tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(jasa);
  } catch (error) {
    console.error("Error ambil jasa:", error);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}


export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.jasa.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("Gagal delete jasa:", error);
    return NextResponse.json({ message: "Gagal delete" }, { status: 500 });
  }
}
