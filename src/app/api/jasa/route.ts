import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const jasa = await prisma.jasa.findMany();
  return NextResponse.json(jasa);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newJasa = await prisma.jasa.create({
    data: {
      title: body.title,
      slug: body.slug,
      description: body.description,
      image: body.image,
    },
  });
  return NextResponse.json(newJasa, { status: 201 });
}
