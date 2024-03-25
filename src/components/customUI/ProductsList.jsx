import ProductCard from "@/components/customUI/ProductCard";
import { products } from "@/constants/products";

export default function ProductsList() {
  return (
    <div
      className="flex flex-row flex-wrap justify-start
  w-full gap-6"
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
