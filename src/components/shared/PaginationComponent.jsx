import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ page, setPage, totalPages, hasMore }) {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          />
        </PaginationItem>
        {page > 2 && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
          </PaginationItem>
        )}
        {page > 3 && <PaginationEllipsis />}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => p < page + 2 && p > page - 2)
          .map((p) => (
            <PaginationItem key={p}>
              <PaginationLink isActive={p === page} onClick={() => setPage(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        {page < totalPages - 2 && <PaginationEllipsis />}
        {page < totalPages - 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((prev) => (hasMore ? prev + 1 : prev))}
            disabled={!hasMore}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
