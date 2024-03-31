import { useMutation, useQuery } from "@tanstack/react-query";
import { updateUserInfo, getUserInfo } from "@/services/userService";

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
