import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationTable({ table, setpageIndex, pageIndex }) {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setpageIndex((prev) => Math.max(prev - 1, 0))}
            disabled={pageIndex === 0}
          />
        </PaginationItem>
        {Array.from({ length: table.getPageCount() }, (_, i) => i).map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === pageIndex}
              onClick={() => setpageIndex(p)}
            >
              {p + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              setpageIndex((prev) =>
                prev + 1 < table.getPageCount() ? prev + 1 : prev
              )
            }
            disabled={pageIndex === table.getPageCount() - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
