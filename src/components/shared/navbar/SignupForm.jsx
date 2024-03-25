import SubmitButton from "@/components/customUI/forms/SubmitButton";
import FormInput from "@/components/customUI/forms/FormInput";
import PasswordInput from "@/components/customUI/forms/PasswordInput";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSignupMutation } from "@/hooks/react-query/useAuth";
import { setAccessToken } from "@/context/accessToken";
import { useAuth } from "@/context/AuthContext";

const SignupFormSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

export function SignupForm({ toggle, selfOpenModal }) {
  const { setConnected, setRole } = useAuth();
  const signupMutation = useSignupMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signupMutation.mutateAsync(data);
      setAccessToken(response.accessToken);
      setConnected(true);
      setRole(response.role);
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
        Create your account
      </h2>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <FormInput
            register={register}
            errors={errors}
            id="firstname"
            name="First name"
            placeholder="Enter your first name"
          />

          <FormInput
            register={register}
            errors={errors}
            id="lastname"
            name="Last name"
            placeholder="Enter your last name"
          />
        </div>
        <FormInput
          register={register}
          errors={errors}
          id="username"
          name="Username"
          placeholder="Enter your username"
        />
        <FormInput
          register={register}
          errors={errors}
          id="email"
          name="Email"
          placeholder="Enter your email"
        />
        <PasswordInput register={register} errors={errors} className="mb-8" />

        <SubmitButton
          isSubmitting={isSubmitting}
          text="Sign up"
          loading="signing up..."
        />
        {errors.root && <ErrorMessage message={errors.root.message} />}

        <p className="text-center text-neutral-600 dark:text-neutral-300 mt-4 text-sm">
          Already have an account?{" "}
          <button className="font-bold" onClick={toggle} type="button">
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
