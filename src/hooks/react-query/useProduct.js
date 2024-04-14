import {
  getProducts,
  getProduct,
  getPopularProducts,
  getSimilarProducts,
  getLatestProducts,
  getAllProducts,
  deleteProduct,
} from "@/services/productsService";
import { keepPreviousData, useQuery, useMutation } from "@tanstack/react-query";

export const useProductsQuery = (
  page,
  searchQuery,
  categories,
  subcategories,
  subjects,
  selectedSoftware,
  selectedLicense,
  minPrice,
  maxPrice,
  sort,
  tags
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
      sort,
      tags,
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
        maxPrice,
        sort,
        tags
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

export const usePopularProductsQuery = (category) => {
  return useQuery({
    queryKey: ["popularProducts", category],
    queryFn: () => getPopularProducts(category),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useSimilarProductsQuery = (productId) => {
  return useQuery({
    queryKey: ["similarProducts", productId],
    queryFn: () => getSimilarProducts(productId),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useLatestProductsQuery = () => {
  return useQuery({
    queryKey: ["latestProducts"],
    queryFn: () => getLatestProducts(),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

export const useAllProductsQuery = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export const useDeleteProductMutation = () => {
  return useMutation({
    mutationFn: (productId) => deleteProduct(productId),
  });
};