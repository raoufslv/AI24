import BottomGradient from "@/components/customUI/forms/BottomGradient";

export default function SubmitButton({
  isSubmitting,
  text,
  loading,
  className,
}) {
  return (
    <button
      className={`bg-emerald-700  relative group/btn text-white dark:bg-emerald-700 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
      ${isSubmitting ? "cursor-not-allowed bg-opacity-60" : "cursor-pointer"}
      ${className ? className : "w-full"}
      `}
      type="submit"
    >
      {isSubmitting ? loading : text}
      <BottomGradient />
    </button>
  );
}
