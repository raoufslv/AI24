import { getAccessToken } from "@/context/accessToken";
export let axiosInstance = axios.create();

import axios from "axios";
const localUrl = "http://localhost:5000/api";
const deployedUrl = "https://cgvortexserver.onrender.com/api";
const BASE_URL = deployedUrl;

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
