import { useMutation } from "@tanstack/react-query";
import { login, signup, ChangePassword } from "@/services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) => login(data),
  });
};

export const useChangePasswordMutatuion = () => {
  return useMutation({
    mutationFn: (data) => ChangePassword(data),
  });
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (data) => signup(data),
  });
};
