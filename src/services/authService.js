import { axiosInstance } from "@/services/apiConfig";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("auth/login", data);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signup = async (data) => {
  try {
    const response = await axiosInstance.post("auth/signup", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const ChangePassword = async (data) => {
  try {
    const response = await axiosInstance.put("user/updatePassword", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
