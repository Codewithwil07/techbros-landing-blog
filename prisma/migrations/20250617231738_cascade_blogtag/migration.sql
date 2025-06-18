-- DropForeignKey
ALTER TABLE "BlogTag" DROP CONSTRAINT "BlogTag_blogId_fkey";

-- AddForeignKey
ALTER TABLE "BlogTag" ADD CONSTRAINT "BlogTag_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
