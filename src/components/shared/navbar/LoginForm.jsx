import SubmitButton from "@/components/customUI/forms/SubmitButton";
import DividerLine from "@/components/customUI/forms/DividerLine";
import FormInput from "@/components/customUI/forms/FormInput";
import PasswordInput from "@/components/customUI/forms/PasswordInput";
import SocialLoginButton from "@/components/customUI/forms/SocialLoginButton";
import ForgotPasswordLink from "@/components/customUI/forms/ForgotPasswordLink";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@/hooks/react-query/useAuth";
import { setAccessToken } from "@/context/accessToken";
import { useAuth } from "@/context/AuthContext";
import { createAxiosInstance } from "@/services/apiConfig";
import GoogleAuth from "./GoogleAuth";

const LoginFormSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().min(8).max(20),
});

export function LoginForm({ toggle, selfOpenModal }) {
  const { setConnected, setRole, setImage, setFirstName } = useAuth();
  const loginMutation = useLoginMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      setAccessToken(response.accessToken);
      setConnected(true);
      setRole(response.role);
      setImage(response.image);
      setFirstName(response.firstName);
      createAxiosInstance();
      // close the modal
      selfOpenModal(false);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Log in to your account
      </h2>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        {/*<SocialLoginButton />*/}
        <GoogleAuth />

        <div className="flex items-center gap-2">
          <DividerLine />
          or
          <DividerLine />
        </div>

        <FormInput
          register={register}
          errors={errors}
          id="email"
          name="Email or username"
          placeholder="Enter your email or username"
          className="w-80"
        />
        <PasswordInput
          register={register}
          errors={errors}
          className="mb-1"
          params=""
        />

        <ForgotPasswordLink />
        <SubmitButton
          isSubmitting={isSubmitting}
          text="Log in"
          loading="Logging in..."
        />

        {errors.root && <ErrorMessage message={errors.root.message} />}

        <p className="text-center text-neutral-600 dark:text-neutral-300 mt-4 text-sm">
          Don't have an account?{" "}
          <button className="font-bold" onClick={toggle} type="button">
            Register
          </button>
        </p>
      </form>
    </div>
  );
}
