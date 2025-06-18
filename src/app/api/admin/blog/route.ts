import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET semua blog
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const sortField = searchParams.get("sortField") || "id";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  const skip = (page - 1) * limit;

  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: { [sortField]: sortOrder },
      skip,
      take: limit,
    }),
    prisma.blog.count({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
    }),
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
        slug: data.slug,
        description: data.description,
        content: data.content,
        image: data.image,
        date: data.date,
        tags: {
          create: data.tag.map((tagId: number) => ({
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
    console.error("Gagal create blog:", error);
    return NextResponse.json({ message: "Gagal create blog" }, { status: 500 });
  }
}
