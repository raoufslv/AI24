import ProductCard from "@/components/customUI/ProductCard";
import { useProductsQuery } from "@/hooks/react-query/useProduct";

export default function ProductsList() {
  const { data: products, isLoading } = useProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(products);

  return (
    <div
      className="flex flex-wrap sm:justify-start justify-center
     gap-4"
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
