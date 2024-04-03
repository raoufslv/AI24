import { axiosInstance } from "@/services/apiConfig";

export const getShops = async () => {
  try {
    const response = await axiosInstance.get("shop/all");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getShop = async (shopId) => {
  try {
    const response = await axiosInstance.get(`shop/${shopId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
