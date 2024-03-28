import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "@/services/userService";

export const useUpdateUserInfoMutation = () => {
  return useMutation({
    mutationFn: (data) => updateUserInfo(data),
  });
};
