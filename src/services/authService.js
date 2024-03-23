import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Replace 'your-api-url' with your actual API URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
