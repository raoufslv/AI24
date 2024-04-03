import { getShops, getShop } from "@/services/shopsService";
import { useQuery } from "@tanstack/react-query";

export const useShopsQuery = () => {
  return useQuery({
    queryKey: ["shops"],
    queryFn: getShops,
  });
};

export const useShopQuery = (shopId) => {
  return useQuery({
    queryKey: ["shop", shopId],
    queryFn: () => getShop(shopId),
  });
};
