import {
  RowPagination,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  useAllProductsQuery,
  useDeleteProductMutation,
} from "@/hooks/react-query/useProduct";
import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import PaginationTable from "./PaginationTable";
import { roundUp } from "@/lib/utils";

export const columns = [
  {
    accessorKey: "image",
    header: "Cover Image",
    cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.getValue("image")}
          alt={row.getValue("title")}
          className="h-14 rounded"
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div
        className="capitalize"
        style={{
          width: "280px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "categories",
    header: () => <div className="text-left">Categories</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("categories")}</div>
    ),
  },
  {
    accessorKey: "subcategories",
    header: () => <div className="text-left">Subcategories</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("subcategories")}</div>
    ),
  },
  {
    accessorKey: "author",
    header: () => <div className="text-left"> Author</div>,

    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("author")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">${row.getValue("price")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      const queryClient = useQueryClient();
      const deleteProduct = useDeleteProductMutation();
      const { toast } = useToast();
      const handleDelete = async (productId) => {
        try {
          const response = await deleteProduct.mutateAsync(productId);
          queryClient.invalidateQueries("allProducts");
          toast({
            description: response.message,
          });
        } catch (error) {
          toast({
            description: error.message,
            status: "error",
          });
        }
      };

      const handleEdit = async (productId) => {
        try {
          queryClient.invalidateQueries("users");
          toast({
            description: response.message,
          });
        } catch (error) {
          toast({
            description: error.message,
            status: "error",
          });
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                handleEdit(product.id);
              }}
            >
              Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ShopTable() {
  const { data, isLoading, error } = useAllProductsQuery();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [pageIndex, setpageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(7);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Include pagination model
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: pageIndex,
        pageSize: pageSize,
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-4 justify-between">
        <div className=" w-[40rem]">
          <Input
            placeholder="Filter titles..."
            value={table.getColumn("title")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="w-full"
          />
        </div>
        <div className="flex gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto dark:bg-black dark:border-neutral-800"
              >
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto dark:bg-black dark:border-neutral-800"
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table.getAllColumns().map((column) => {
                if (!column.getCanSort()) {
                  return null;
                }
                return (
                  <DropdownMenuItem
                    key={column.id}
                    onClick={() => {
                      column.toggleSorting(column.getIsSorted() === "asc");
                    }}
                  >
                    {column.id}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div className="space-x-2">
          <PaginationTable
            setpageIndex={setpageIndex}
            pageIndex={pageIndex}
            totalPages={roundUp(data.length / pageSize) - 1}
            hasMore={roundUp(data.length / pageSize) - 1 > pageIndex}
          />
        </div>
      </div>
    </div>
  );
}
