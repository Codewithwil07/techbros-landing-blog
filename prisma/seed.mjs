import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional untuk development)
  await prisma.blogTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.blog.deleteMany();

  // Create tags
  const frontendTag = await prisma.tag.create({ data: { name: "frontend" } });
  const backendTag = await prisma.tag.create({ data: { name: "backend" } });
  const fullstackTag = await prisma.tag.create({ data: { name: "fullstack" } });

  // Create blogs + assign tags
  const blog1 = await prisma.blog.create({
    data: {
      title: "Panduan Next.js untuk Pemula",
      slug: "panduan-nextjs-pemula",
      description: "Belajar Next.js dari nol untuk membangun website modern.",
      content: "Konten panjang dan mendetail tentang Next.js...",
      image: "https://example.com/nextjs.jpg",
      tags: {
        create: [
          { tag: { connect: { id: frontendTag.id } } },
          { tag: { connect: { id: fullstackTag.id } } },
        ]
      }
    }
  });

  const blog2 = await prisma.blog.create({
    data: {
      title: "Backend API dengan Express.js",
      slug: "backend-api-expressjs",
      description: "Membangun REST API menggunakan Express.js dan Node.js.",
      content: "Konten lengkap membahas routing, middleware, dan database...",
      image: "https://example.com/express.jpg",
      tags: {
        create: [
          { tag: { connect: { id: backendTag.id } } },
          { tag: { connect: { id: fullstackTag.id } } },
        ]
      }
    }
  });

  const blog3 = await prisma.blog.create({
    data: {
      title: "Integrasi Frontend dan Backend",
      slug: "integrasi-frontend-backend",
      description: "Cara menghubungkan frontend React dengan backend Express.",
      content: "Penjelasan detail integrasi API dan penanganan CORS...",
      image: "https://example.com/integrasi.jpg",
      tags: {
        create: [
          { tag: { connect: { id: frontendTag.id } } },
          { tag: { connect: { id: backendTag.id } } },
          { tag: { connect: { id: fullstackTag.id } } },
        ]
      }
    }
  });

  console.log("✅ Seeder berhasil dijalankan!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
