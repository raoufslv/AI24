import ProductCard from "@/components/customUI/ProductCard";
import { products } from "@/constants/products";

export default function TopProducts() {
  return (
    <div className="flex flex-wrap justify-start space-x-6 w-full">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
