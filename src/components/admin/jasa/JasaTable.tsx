"use client";
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import Button from "@/components/ui/custom/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LIMIT = 5;

export default function JasaTable() {
  const [data, setData] = React.useState<any[]>([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    totalPages: 1,
  });
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("id");
  const [order, setOrder] = React.useState<"asc" | "desc">("desc");
  const [loading, setLoading] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);
  const router = useRouter();
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const fetchData = async (signal?: AbortSignal) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/jasa?search=${encodeURIComponent(search)}&page=${
          pagination.page
        }&limit=${LIMIT}&sortBy=${sort}&order=${order}`,
        { signal }
      );
      const result = await res.json();
      setData(Array.isArray(result.jasa) ? result.jasa : []);
      setPagination({
        page: result.pagination.page,
        totalPages: result.pagination.totalPages,
      });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Fetch error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [pagination.page, search, sort, order]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      setPagination((p) => ({ ...p, page: 1 }));
      setSearch(value);
    }, 300);
  };

  const toggleSort = (col: string) => {
    if (sort === col) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSort(col);
      setOrder("asc");
    }
  };

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "No",
        cell: ({ row }) => (pagination.page - 1) * LIMIT + row.index + 1,
      },
      {
        accessorKey: "title",
        header: () => (
          <button onClick={() => toggleSort("title")} className="font-bold">
            Title {sort === "title" ? (order === "asc" ? "↑" : "↓") : ""}
          </button>
        ),
      },
      {
        accessorKey: "slug",
        header: () => (
          <button onClick={() => toggleSort("slug")} className="font-bold">
            Slug {sort === "slug" ? (order === "asc" ? "↑" : "↓") : ""}
          </button>
        ),
      },
      {
        accessorKey: "description",
        header: () => (
          <button
            onClick={() => toggleSort("description")}
            className="font-bold"
          >
            Description{" "}
            {sort === "description" ? (order === "asc" ? "↑" : "↓") : ""}
          </button>
        ),
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Link href={`/admin/dashboard/jasa/edit/${row.original.id}`}>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
            <Button
              variant="solid"
              size="sm"
              onClick={() => setDeleteId(row.original.id)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [pagination.page, sort, order]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDelete = async () => {
    if (!deleteId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/jasa/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await fetchData();
        router.refresh();
      } else {
        console.error("Gagal hapus");
      }
    } catch (err) {
      console.error("Error hapus:", err);
    } finally {
      setLoading(false);
      setDeleteId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-2">
        <input
          className="border rounded p-2 w-full md:w-1/3"
          placeholder="Search jasa..."
          onChange={handleSearchChange}
        />
        <div className="flex gap-x-3 items-center">
          <Select value={sort} onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">ID</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="createdAt">Created At</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={order}
            onValueChange={(value) => setOrder(value as "asc" | "desc")}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Asc</SelectItem>
              <SelectItem value="desc">Desc</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <table className="w-full border rounded">
        <thead className="bg-muted">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 border text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                Loading...
              </td>
            </tr>
          ) : table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-muted/50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <Button
          variant="solid"
          size="sm"
          onClick={() =>
            setPagination((p) => ({ ...p, page: Math.max(1, p.page - 1) }))
          }
          disabled={pagination.page === 1 || loading}
        >
          Prev
        </Button>
        <div className="text-sm">
          Page {pagination.page} of {pagination.totalPages}
        </div>
        <Button
          variant="solid"
          size="sm"
          onClick={() =>
            setPagination((p) => ({
              ...p,
              page: Math.min(p.totalPages, p.page + 1),
            }))
          }
          disabled={
            pagination.page >= pagination.totalPages ||
            loading ||
            pagination.totalPages === 0
          }
        >
          Next
        </Button>
      </div>

      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
          </DialogHeader>
          <p>Yakin ingin menghapus data ini?</p>
          <DialogFooter className="justify-end">
            <Button
              variant="outline"
              onClick={() => setDeleteId(null)}
              disabled={loading}
            >
              Batal
            </Button>
            <Button
              variant="solid"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Menghapus..." : "Hapus"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
