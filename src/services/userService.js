import { axiosInstance } from "@/services/apiConfig";

export const updateUserInfo = async (data) => {
    try {
      const response = await axiosInstance.post("user/profile", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };