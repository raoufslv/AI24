"use client";
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import google from "@/assets/icons/google.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Log in to your account
      </h2>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <button
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <img src={google} alt="Google" className="h-6 w-6" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Sign in with Google
          </span>
          <BottomGradient />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-neutral-700 my-8 h-[1px] w-full" />
          or
          <div className="bg-neutral-700 my-8 h-[1px] w-full" />
        </div>
        <LabelInputContainer className="mb-4 w-80">
          <Label htmlFor="email">Email or username</Label>
          <Input
            {...register("email", {
              required: "Email or username is required",
            })}
            id="email"
            placeholder="taylor02@gmail.com"
            type="text"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-1 relative">
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must have at most 20 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            })}
            id="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-6 h-6 w-6 text-neutral-400 dark:text-neutral-300"
          >
            <EyeOff className={`h-6 w-6 ${showPassword ? "hidden" : ""}`} />
            <Eye className={`h-6 w-6 ${showPassword ? "" : "hidden"}`} />
          </button>
        </LabelInputContainer>
        <div className="flex items-center justify-end mb-8">
          <Link
            to="/forgot-password"
            className="text-xs text-neutral-400 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            Forgot password?
          </Link>
        </div>

        <button
          disabled={isSubmitting}
          className="bg-black dark:bg-white relative group/btn w-full text-white dark:text-black rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {isSubmitting ? "Logging in..." : "Log in"}
          <BottomGradient />
        </button>

        {errors.root && (
          <span className="text-red-500 text-xs mt-2 text-center mx-auto">
            {errors.root.message}
          </span>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
