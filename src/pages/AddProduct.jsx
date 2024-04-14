import MultiStepForm from "@/components/dashboard/MultiStepForm";
import { CircleArrowLeft } from "lucide-react";

export default function AddProduct() {
  return (
    <div>
      <CircleArrowLeft
        className="cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
        size={42}
      />

        <h1 className="text-2xl text-start">Add Product</h1>
        <MultiStepForm />
      
    </div>
  );
}
