import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("📝 Seeding database...");

  // Bersihin dulu
  await prisma.blogTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.jasa.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  // Insert User
  const user = await prisma.user.create({
    data: {
      username: "wang",
      password: "wang", // Sebaiknya hashed, tapi ini contoh real case
    },
  });

  // Insert Jasa
  await prisma.jasa.create({
    data: {
      title: "Jasa Joki Coding Fullstack",
      slug: "jasa-joki-coding-fullstack",
      description: "Kami menyediakan jasa joki coding fullstack untuk berbagai keperluan tugas kuliah.",
      image: "https://via.placeholder.com/600x400.png?text=Jasa+Joki+Coding",
      content: "Konten lengkap tentang jasa joki coding fullstack.",
    },
  });

  await prisma.jasa.create({
    data: {
      title: "Jasa Joki Skripsi Sistem Informasi",
      slug: "jasa-joki-skripsi-sistem-informasi",
      description: "Bantu skripsi Anda selesai tepat waktu dengan jasa joki skripsi sistem informasi.",
      image: "https://via.placeholder.com/600x400.png?text=Jasa+Joki+Skripsi",
      content: "Konten lengkap tentang jasa joki skripsi.",
    },
  });

  // Insert Blog + Tag
  const tag1 = await prisma.tag.create({
    data: { name: "Coding" }
  });

  const tag2 = await prisma.tag.create({
    data: { name: "Skripsi" }
  });

  const blog1 = await prisma.blog.create({
    data: {
      title: "Tips Lulus Skripsi Tepat Waktu",
      slug: "tips-lulus-skripsi",
      description: "Artikel berisi tips menyelesaikan skripsi tepat waktu.",
      image: "https://via.placeholder.com/600x400.png?text=Tips+Skripsi",
      content: "Konten lengkap tips lulus skripsi.",
      tags: {
        create: [
          { tag: { connect: { id: tag2.id } } }
        ]
      }
    },
  });

  const blog2 = await prisma.blog.create({
    data: {
      title: "Belajar Fullstack Web Development",
      slug: "belajar-fullstack",
      description: "Panduan belajar fullstack web development.",
      image: "https://via.placeholder.com/600x400.png?text=Fullstack",
      content: "Konten lengkap belajar fullstack.",
      tags: {
        create: [
          { tag: { connect: { id: tag1.id } } }
        ]
      }
    },
  });

  console.log("✅ Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
