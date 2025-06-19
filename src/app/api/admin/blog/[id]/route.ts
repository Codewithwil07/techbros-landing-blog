import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// UPDATE Blog
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

    // Cek slug unik kecuali dirinya sendiri
    const existing = await prisma.blog.findFirst({
      where: {
        slug: data.slug,
        NOT: { id },
      },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Slug sudah dipakai blog lain" },
        { status: 400 }
      );
    }

    const updated = await prisma.blog.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        cover: data.cover,
        content: data.content || null,
        tags: {
          deleteMany: {}, // hapus semua relasi tag lama
          create: (data.tag || []).map((tagId: number) => ({
            tag: { connect: { id: tagId } },
          })),
        },
      },
      include: {
        tags: { include: { tag: true } },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("❌ Gagal update blog:", error);
    return NextResponse.json({ message: "Gagal update blog" }, { status: 500 });
  }
}

// GET Blog by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        tags: { include: { tag: true } },
      },
    });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("❌ Error ambil blog:", error);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}

// DELETE Blog
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Berhasil dihapus" });
  } catch (error) {
    console.error("❌ Gagal delete blog:", error);
    return NextResponse.json({ message: "Gagal delete" }, { status: 500 });
  }
}
