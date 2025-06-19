import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ja } from "zod/v4/locales";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const jasa = await prisma.jasa.findUnique({
    where: { slug: params.slug },
  });

  if (!jasa) {
    return NextResponse.json(
      { message: "Jasa tidak ditemukan" },
      { status: 404 }
    );
  }

  const jasaLainnya = await prisma.jasa.findMany({
    where: {
      slug: { not: params.slug },
    },
    take: 8,
  });

  const jasaSering = await prisma.jasa.findMany({
    where: {
      slug: { not: params.slug },
    },
    take: 3,
  });

  return NextResponse.json({ jasa, jasaLainnya, jasaSering });
}
