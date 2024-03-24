import { useMutation } from "@tanstack/react-query";
import { login, signup } from "@/services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) => login(data),
  });
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (data) => signup(data),
  });
};
