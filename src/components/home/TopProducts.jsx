import ProductCard from "@/components/customUI/ProductCard";
import { products } from "@/constants/products";
import { useEffect, useState } from "react";

export default function TopProducts() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let maxProducts;
  if (screenWidth >= 1970) {
    maxProducts = 6;
  } else if (screenWidth >= 1536) {
    maxProducts = 5;
  } else if (screenWidth >= 1280) {
    maxProducts = 4;
  } else if (screenWidth >= 768) {
    maxProducts = 6;
  } else if (screenWidth >= 640) {
    maxProducts = 4;
  } else {
    maxProducts = 3;
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6
    w-full gap-4 pt-4"
    >
      {products.slice(0, maxProducts).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
