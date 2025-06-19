/*
  Warnings:

  - You are about to drop the column `image` on the `Jasa` table. All the data in the column will be lost.
  - Changed the type of `content` on the `Jasa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "blocks" JSONB,
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "Jasa" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[],
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;
