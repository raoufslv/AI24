import ProductCard from "@/components/customUI/ProductCard";
import { useGetProductsBookmarks } from "@/hooks/react-query/useUser";
import React from "react";

export default function Bookmarks() {
  const { data: products, isLoading, isError } = useGetProductsBookmarks();
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error occeurd, please try again later</div>;
  if (products.length == 0) return <div>you have no bookmarks yet</div>;
  return (
    <>
      <h1>Your products bookmarks</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 w-full gap-4 pt-4"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}
