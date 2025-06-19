/*
  Warnings:

  - You are about to drop the column `images` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Jasa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "images";

-- AlterTable
ALTER TABLE "Jasa" DROP COLUMN "images";
