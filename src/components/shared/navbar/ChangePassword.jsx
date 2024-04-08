import SubmitButton from "@/components/customUI/forms/SubmitButton";
import PasswordInput from "@/components/customUI/forms/PasswordInput";
import ForgotPasswordLink from "@/components/customUI/forms/ForgotPasswordLink";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useChangePasswordMutatuion } from "@/hooks/react-query/useAuth";
import { useToast } from "@/components/ui/use-toast";

const ChangePasswordFormSchema = z.object({
  Oldpassword: z.string().min(8).max(20),
  Newpassword: z.string().min(8).max(20),
});

export function ChangePassword({ selfOpenModal }) {
  const ChangePasswordMutatuion = useChangePasswordMutatuion();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      NewPassword: "",
    },
    resolver: zodResolver(ChangePasswordFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await ChangePasswordMutatuion.mutateAsync(data);
      console.log(response);
      toast({
        variant: "success",
        title: response.message,
      });
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
    <div className="max-w-md w-96 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Reset your password
      </h2>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <PasswordInput
          register={register}
          errors={errors}
          className="mb-1"
          params="Old"
        />
        <ForgotPasswordLink />
        <PasswordInput
          register={register}
          errors={errors}
          className="mb-6"
          params="New"
        />

        <SubmitButton
          isSubmitting={isSubmitting}
          text="Reset"
          loading="Reseting..."
        />

        {errors.root && <ErrorMessage message={errors.root.message} />}
      </form>
    </div>
  );
}
