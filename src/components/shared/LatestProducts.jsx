// TopProducts.js
import ProductCard from "@/components/customUI/ProductCard";
import { useProductsWithMaxCount } from "@/hooks/custom/useProductsWithMaxCount";
import { useLatestProductsQuery } from "@/hooks/react-query/useProduct";

export default function LatestProducts() {
  const { products, isLoading } = useProductsWithMaxCount(
    useLatestProductsQuery
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 w-full gap-4 pt-4"
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
