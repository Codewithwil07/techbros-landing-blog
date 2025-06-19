/*
  Warnings:

  - You are about to drop the column `image` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `cover` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover` to the `Jasa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "image",
ADD COLUMN     "cover" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Jasa" ADD COLUMN     "blocks" JSONB,
ADD COLUMN     "cover" TEXT NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
