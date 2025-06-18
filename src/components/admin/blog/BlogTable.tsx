"use client";
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import  Button  from "@/components/ui/custom/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogDialog from "@/components/ui/custom/ConfirmDialog";

export default function BlogTable() {
  const [data, setData] = React.useState<any[]>([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    totalPages: 1,
  });
  const [search, setSearch] = React.useState("");
  const [sortField, setSortField] = React.useState("id");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [loading, setLoading] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [targetDeleteId, setTargetDeleteId] = React.useState<number | null>(
    null
  );
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/blog?search=${encodeURIComponent(search)}&page=${
          pagination.page
        }&limit=5&sortField=${sortField}&sortOrder=${sortOrder}`
      );
      const result = await res.json();
      setData(result.blogs);
      setPagination({
        page: result.pagination.page,
        totalPages: result.pagination.totalPages,
      });
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [pagination.page, search, sortField, sortOrder]);

  const handleDelete = async () => {
    if (!targetDeleteId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/blog/${targetDeleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
        fetchData();
      } else {
        console.error("Gagal hapus");
      }
    } catch (err) {
      console.error("Error hapus:", err);
    } finally {
      setLoading(false);
      setDialogOpen(false);
      setTargetDeleteId(null);
    }
  };

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "No",
        cell: ({ row }) => (pagination.page - 1) * 5 + row.index + 1,
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "slug",
        header: "Slug",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Link href={`/admin/dashboard/blog/edit/${row.original.id}`}>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setTargetDeleteId(row.original.id);
                setDialogOpen(true);
              }}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [pagination.page]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-2">
        <input
          className="border rounded p-2 w-full md:w-1/3"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => {
            setPagination((prev) => ({ ...prev, page: 1 }));
            setSearch(e.target.value);
          }}
        />
        <div className="flex items-center gap-x-3">
          <Select value={sortField} onValueChange={setSortField}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">Sort by ID</SelectItem>
              <SelectItem value="title">Sort by Title</SelectItem>
              <SelectItem value="createdAt">Sort by Created At</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
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
                  {flexRender(
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
          variant="secondary"
          size="sm"
          onClick={() =>
            setPagination((p) => ({ ...p, page: Math.max(1, p.page - 1) }))
          }
          disabled={pagination.page === 1}
        >
          Prev
        </Button>
        <div className="text-sm">
          Page {pagination.page} of {pagination.totalPages}
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            setPagination((p) => ({
              ...p,
              page: Math.min(p.totalPages, p.page + 1),
            }))
          }
          disabled={pagination.page === pagination.totalPages}
        >
          Next
        </Button>
      </div>

      <BlogDialog
        open={dialogOpen}
        message="Yakin mau hapus blog ini?"
        onClose={() => {
          setDialogOpen(false);
          setTargetDeleteId(null);
        }}
        onOk={handleDelete}
      />
    </div>
  );
}
