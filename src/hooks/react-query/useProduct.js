import { getProducts } from "@/services/productsService";
import { getProduct } from "@/services/productsService";
import { useQuery } from "@tanstack/react-query";


export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductQuery = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
};
