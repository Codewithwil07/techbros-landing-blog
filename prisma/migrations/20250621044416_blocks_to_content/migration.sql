/*
  Warnings:

  - You are about to drop the column `blocks` on the `Blog` table. All the data in the column will be lost.
  - The `content` column on the `Blog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `blocks` on the `Jasa` table. All the data in the column will be lost.
  - The `content` column on the `Jasa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "blocks",
DROP COLUMN "content",
ADD COLUMN     "content" JSONB;

-- AlterTable
ALTER TABLE "Jasa" DROP COLUMN "blocks",
DROP COLUMN "content",
ADD COLUMN     "content" JSONB;
