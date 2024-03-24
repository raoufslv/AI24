import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Replace 'your-api-url' with your actual API URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

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
