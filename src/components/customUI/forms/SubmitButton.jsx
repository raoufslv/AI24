import BottomGradient from "@/components/customUI/forms/BottomGradient";

export default function SubmitButton({ isSubmitting, text, loading }) {
  return (
    <button
      disabled={isSubmitting}
      className={`bg-black dark:bg-white relative group/btn w-full text-white dark:text-black rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
      ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      type="submit"
    >
      {isSubmitting ? loading : text}
      <BottomGradient />
    </button>
  );
}
