import BlogTable from "@/components/admin/blog/BlogTable";
import Button from "@/components/ui/custom/Button";
import Link from "next/link";

export default async function BlogListPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Link href="/admin/dashboard/blog/add">
          <Button className="cursor-pointer" variant="solid">
            Tambah Data
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  );
}
