/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Jasa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT[];

-- AlterTable
ALTER TABLE "Jasa" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
