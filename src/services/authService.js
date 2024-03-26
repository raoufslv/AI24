import { getAccessToken } from "@/context/accessToken";
export let axiosInstance = axios.create();

import axios from "axios";
// https://cgvortexserver.onrender.com/
// http://localhost:5000
const BASE_URL = "http://localhost:5000/api";
export const createAxiosInstance = () => {
  axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

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
