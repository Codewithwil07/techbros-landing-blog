import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GetJasaBySlug(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const jasa = await prisma.jasa.findUnique({
      where: { slug: params.slug },
    });

    if (!jasa) {
      return NextResponse.json(
        { message: "Jasa tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(jasa);
  } catch (error) {
    console.error("Error ambil jasa:", error);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}
