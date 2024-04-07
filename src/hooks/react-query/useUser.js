import { useMutation, useQuery } from "@tanstack/react-query";
import {
  updateUserInfo,
  getUserInfo,
  addProductBookmark,
  CheckProductBookmarks,
  GetProductsBookmarks,
} from "@/services/userService";

export const useUpdateUserInfoMutation = () => {
  return useMutation({
    mutationFn: (data) => updateUserInfo(data),
  });
};

export const useUserInfoQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });
};

export const useAddProductBookmark = () => {
  return useMutation({
    mutationFn: (productID) => addProductBookmark(productID),
    networkMode: "online"
  });
};

export const useCheckProductBookmarks = (productID) => {
  return useQuery({
    queryKey: ["CheckProductBookmarks", productID],
    queryFn: () => CheckProductBookmarks(productID),
    networkMode: "online"
  });
};

export const useGetProductsBookmarks = () => {
  return useQuery({
    queryKey: ["ProductsBookmarks"],
    queryFn: () => GetProductsBookmarks(),
  });
};
