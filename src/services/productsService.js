import { axiosInstance } from "@/services/apiConfig";

export const getProducts = async (
  page,
  searchQuery = "",
  categories = [],
  subcategories = [],
  subjects = [],
  selectedSoftware = "",
  selectedLicense = "",
  minPrice = 0,
  maxPrice = 200
) => {
  try {
    selectedLicense = selectedLicense === "All" ? "" : selectedLicense;
    selectedSoftware = selectedSoftware === "All" ? "" : selectedSoftware;
    const response = await axiosInstance.get("product/all/" + page, {
      params: {
        searchQuery,
        categories,
        subcategories,
        subjects,
        selectedSoftware,
        selectedLicense,
        minPrice, 
        maxPrice,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axiosInstance.get(`product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPopularProducts = async () => {
  try {
    const response = await axiosInstance.get("product/popular");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
