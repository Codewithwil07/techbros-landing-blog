import { prisma } from "@/lib/prisma"; // pastikan ada prisma.ts di lib
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jasa = await prisma.jasa.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        cover: body.cover,
        content: body.content,
        date: new Date(),
      },
    });
    return NextResponse.json(jasa);
  } catch (err) {
    console.error("POST error", err);
    return NextResponse.json({ error: "Gagal membuat jasa" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const sortBy = searchParams.get("sortBy") || "id";
  const order = searchParams.get("order") === "asc" ? "asc" : "desc";

  try {
    const where = search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { slug: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const [total, jasa] = await Promise.all([
      prisma.jasa.count({ where }),
      prisma.jasa.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: order },
      }),
    ]);

    return NextResponse.json({
      pagination: {
        page,
        totalPages: Math.ceil(total / limit),
      },
      jasa,
    });
  } catch (err) {
    console.error("GET error", err);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

