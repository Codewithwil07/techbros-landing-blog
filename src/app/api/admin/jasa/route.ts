import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // prisma client

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const sortBy = searchParams.get("sortBy") || "id";   // default id
  const order = searchParams.get("order") === "asc" ? "asc" : "desc"; // default desc
  const skip = (page - 1) * limit;

  const [jasa, total] = await Promise.all([
    prisma.jasa.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: { [sortBy]: order },  // dynamic sorting
      skip,
      take: limit,
    }),
    prisma.jasa.count({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
    }),
  ]);

  return NextResponse.json({
    jasa,
    pagination: {
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
      page,
      limit,
    },
  });
}


// POST tambah jasa
export async function POST(req: Request) {
  const data = await req.json();
  const jasa = await prisma.jasa.create({
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      content: data.content,
      image: data.image,
      tag: data.tag,
    },
  });
  return NextResponse.json(jasa);
}
