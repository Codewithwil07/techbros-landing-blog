import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET semua blog
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const sortField = searchParams.get("sortField") || "id";
  const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "desc";

  const skip = (page - 1) * limit;

  const where = {
    OR: [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ],
  };

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      orderBy: { [sortField]: sortOrder },
      skip,
      take: limit,
      include: {
        tags: {
          include: { tag: true },
        },
      },
    }),
    prisma.blog.count({ where }),
  ]);

  return NextResponse.json({
    blogs,
    pagination: {
      total,
      totalPages: Math.ceil(total / limit),
      page,
      limit,
    },
  });
}

// POST tambah blog
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug, // slug sudah di-generate di halaman
        description: data.description,
        cover: data.cover,
        content: data.content || null,
        date: data.date ? new Date(data.date) : undefined,
        tags: {
          create: (data.tag || []).map((tagId: number) => ({
            tag: { connect: { id: tagId } },
          })),
        },
      },
      include: {
        tags: {
          include: { tag: true },
        },
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error("❌ Gagal create blog:", error);
    return NextResponse.json({ message: "Gagal create blog" }, { status: 500 });
  }
}
