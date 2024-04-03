import React from "react";
import ProductCard from "@/components/customUI/ProductCard";
import PaginationComponent from "@/components/shared/PaginationComponent";

export default function ProductsList({ data, isLoading, error, page, setPage }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || data.products.length === 0) {
    return <div>{error ? `Error: ${error.message}` : "No products found!"}</div>;
  }
  return (
    <div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <PaginationComponent
        page={page}
        setPage={setPage}
        hasMore={data.hasMore}
        totalPages={data.totalPages}
      />
    </div>
  );
}
