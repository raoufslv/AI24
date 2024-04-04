import { useEffect, useState } from "react";

export function useProductsWithMaxCount(queryFn, params = null) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [maxProducts, setMaxProducts] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth >= 1536) {
      setMaxProducts(10);
    } else if (screenWidth >= 1280) {
      setMaxProducts(8);
    } else if (screenWidth >= 768) {
      setMaxProducts(6);
    } else if (screenWidth >= 640) {
      setMaxProducts(4);
    } else {
      setMaxProducts(3);
    }
  }, [screenWidth]);

  const { data, isLoading } = params ? queryFn(params) : queryFn();

  if (isLoading || data.length === 0) {
    return { products: [], isLoading };
  }

  return {
    products: data ? data.slice(0, maxProducts) : [],
    isLoading,
  };
}
