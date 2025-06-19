import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// UPDATE Jasa
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    const data = await req.json();

    // Validasi slug unik kecuali dirinya sendiri
    const existing = await prisma.jasa.findFirst({
      where: {
        slug: data.slug,
        NOT: { id },
      },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Slug sudah dipakai Jasa lain" },
        { status: 400 }
      );
    }

    // Validasi content harus JSON valid (kalau ada)
    if (data.content) {
      try {
        JSON.parse(data.content);
      } catch {
        return NextResponse.json(
          { message: "Content harus JSON valid" },
          { status: 400 }
        );
      }
    }

    const updated = await prisma.jasa.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        cover: data.cover,
        content: data.content,
        date: data.date ? new Date(data.date) : undefined,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("❌ Gagal update Jasa:", error);
    return NextResponse.json({ message: "Gagal update Jasa" }, { status: 500 });
  }
}

// GET Jasa by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
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
        { message: "Jasa tidak ditemukan" },
        { status: 404 }
      );
    }

    // Cek content valid (optional, untuk keamanan frontend)
    if (jasa.content) {
      try {
        JSON.parse(jasa.content);
      } catch {
        return NextResponse.json(
          { message: "Content rusak di database" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(jasa);
  } catch (error) {
    console.error("❌ Error ambil Jasa:", error);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}

// DELETE Jasa
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    await prisma.jasa.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Berhasil dihapus" });
  } catch (error) {
    console.error("❌ Gagal delete Jasa:", error);
    return NextResponse.json({ message: "Gagal delete" }, { status: 500 });
  }
}
