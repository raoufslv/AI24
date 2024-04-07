import { axiosInstance } from "@/services/apiConfig";

export const updateUserInfo = async (data) => {
  try {
    const response = await axiosInstance.put("user/profile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("user/profile");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addProductBookmark = async (productID) => {
  try {
    const response = await axiosInstance.post(
      `user/addProductBookmark/${productID}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const CheckProductBookmarks = async (productID) => {
  try {
    const response = await axiosInstance.get(
      `user/checkProductBookmarks/${productID}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const GetProductsBookmarks = async () => {
  try {
    const response = await axiosInstance.get(`user/productsBookmarks`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
