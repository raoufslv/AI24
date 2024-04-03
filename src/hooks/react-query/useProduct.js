import {
  getProducts,
  getProduct,
  getPopularProducts,
} from "@/services/productsService";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useProductsQuery = (
  page,
  searchQuery,
  categories,
  subcategories,
  subjects,
  selectedSoftware,
  selectedLicense,
  minPrice,
  maxPrice
) => {
  return useQuery({
    queryKey: [
      "products",
      page,
      searchQuery,
      categories,
      subcategories,
      subjects,
      selectedSoftware,
      selectedLicense,
      minPrice,
      maxPrice,
    ],
    queryFn: () =>
      getProducts(
        page,
        searchQuery,
        categories,
        subcategories,
        subjects,
        selectedSoftware,
        selectedLicense,
        minPrice,
        maxPrice
      ),
    keepPreviousData,
  });
};

export const useProductQuery = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
};

export const usePopularProductsQuery = () => {
  return useQuery({
    queryKey: ["popularProducts"],
    queryFn: getPopularProducts,
  });
};
