import { axiosInstance } from "@/services/apiConfig";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("product/all");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};