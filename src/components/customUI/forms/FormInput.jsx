import LabelInputContainer from "@/components/customUI/forms/LabelInputContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";
import { cn } from "@/lib/utils";

export default function FormInput({
  register,
  errors,
  className,
  id,
  name,
  placeholder,
  number,
}) {
  return (
    <LabelInputContainer className={cn("mb-4", className)}>
      <Label htmlFor={id}>{name}</Label>
      <Input
        {...register(id)}
        id={id}
        placeholder={placeholder}
        type={number ? number : "text"}
      />
      {errors[id] && <ErrorMessage message={errors[id].message} />}
    </LabelInputContainer>
  );
}
