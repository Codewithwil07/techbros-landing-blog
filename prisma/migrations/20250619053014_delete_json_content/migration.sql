/*
  Warnings:

  - Made the column `content` on table `Jasa` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Jasa" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
