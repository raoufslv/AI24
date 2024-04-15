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
  maxPrice = 200,
  sort = "",
  tags = []
) => {
  try {
    selectedLicense = selectedLicense === "All" ? "" : selectedLicense;
    selectedSoftware = selectedSoftware === "All" ? "" : selectedSoftware;
    sort = sort === "Default" ? "" : sort;
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
        sort,
        tags,
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

export const getPopularProducts = async (category) => {
  try {
    const response = await axiosInstance.get(`product/popular/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSimilarProducts = async (productId) => {
  try {
    const response = await axiosInstance.get(`product/similar/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getLatestProducts = async () => {
  try {
    const response = await axiosInstance.get("product/latest");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("product/all");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axiosInstance.delete(`product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post("product/add", productData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};