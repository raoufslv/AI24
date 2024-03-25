import { getAccessToken } from "@/context/accessToken";
import axios from "axios";

// https://cgvortexserver.onrender.com/
// http://localhost:5000
const BASE_URL = "http://localhost:5000/api";
const accessToken = getAccessToken();
console.log('accessToken454554: ',accessToken);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken ? `Bearer ${accessToken}` : "vdvd",
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
