import ProductCard from "@/components/customUI/ProductCard";
import { products } from "@/constants/products";

export default function ProductsList() {
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
