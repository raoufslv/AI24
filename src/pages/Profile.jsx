import SubmitButton from "@/components/customUI/forms/SubmitButton";
import FormInput from "@/components/customUI/forms/FormInput";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

import { useUpdateUserInfoMutation } from "@/hooks/react-query/useUser";
import { Button } from "@/components/ui/button";

import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useState } from "react";

const ProfilInfoFormSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  image: z.string().optional(),
});

export default function Profile() {
  const { toast } = useToast();
  const [isUpdatePreview, setIsUpdatePreview] = useState(false);
  const updateUserInfoMutation = useUpdateUserInfoMutation();

  const handleImageUpload = (file, status) => {
    setIsUpdatePreview(!isUpdatePreview);
    if (status === "done") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target.result;
        setValue("image", image);
      };
      reader.readAsDataURL(file);
    }

    if (status === "removed") {
      setValue("image", null);
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      image: null,
    },
    resolver: zodResolver(ProfilInfoFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      await updateUserInfoMutation.mutateAsync(data);
      // Show success message
      toast({
        variant: "success",
        title: "Profile updated successfully",
        description: "Your profile information has been updated",
      });
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl w-full mx-auto"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Update Profile
      </h2>

      <Dropzone
        onChangeStatus={({ meta, file }, status) => {
          handleImageUpload(file, status);
          // display all the react hook form fields values
          console.log(getValues());
        }}
        inputContent="Drop or click to upload your profile image"
        accept="image/*"
        maxFiles={1}
        styles={{
          dropzone: {
            border: "2px dashed #0087F7",
            borderRadius: "8px",
            padding: "20px",
            height: "200px",
          },
          inputLabel: {
            color: "#0087F7",
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />

      <div className="grid grid-cols-1 sm:gap-6 mt-6 sm:grid-cols-2">
        <FormInput
          register={register}
          errors={errors}
          id="firstname"
          name="First Name"
          placeholder="Enter your first name"
        />
        <FormInput
          register={register}
          errors={errors}
          id="lastname"
          name="Last Name"
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

      <div className="flex justify-between gap-4 mt-4 w-full ">
        <Button
          type="button"
          variant="outline"
          className="border-2  border-stone-700 dark:border-white dark:bg-transparent"
        >
          Change Password
        </Button>
        <Button type="submit" disabled={isSubmitting} className="">
          {isSubmitting ? "updating..." : "Update Profile"}
        </Button>
      </div>

      {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}
    </form>
  );
}
