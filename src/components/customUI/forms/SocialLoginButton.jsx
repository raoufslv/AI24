import google from "@/assets/icons/google.svg";
import BottomGradient from "@/components/customUI/forms/BottomGradient";

export default function SocialLoginButton() {
  return (
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
  );
}
