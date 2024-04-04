// SimilarProducts.js
import ProductCard from "@/components/customUI/ProductCard";
import { useProductsWithMaxCount } from "@/hooks/custom/useProductsWithMaxCount";
import { useSimilarProductsQuery } from "@/hooks/react-query/useProduct";

export default function SimilarProducts({ productId }) {
  const { products, isLoading } = useProductsWithMaxCount(
    useSimilarProductsQuery,
    productId
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 w-full gap-4 pt-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
