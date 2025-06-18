import JasaTable from "@/components/admin/jasa/JasaTable";
import Button from "@/components/ui/custom/Button";
import Link from "next/link";

export default async function JasaListPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Jasa Management</h1>
        <Link href={`/admin/dashboard/jasa/add`} >
          <Button className="cursor-pointer" variant="solid">
            Tambah Data
          </Button>
        </Link>
      </div>
      <JasaTable />
    </div>
  );
}
