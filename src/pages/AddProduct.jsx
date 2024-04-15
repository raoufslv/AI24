import Step1 from "@/components/dashboard/FormSteps/Step1";
import Step2 from "@/components/dashboard/FormSteps/Step2";
import { Step, Stepper, useStepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";

import SubmitButton from "@/components/customUI/forms/SubmitButton";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductMutation } from "@/hooks/react-query/useProduct";

const steps = [{}, {}];

const ProductFormSchema = z.object({
  title: z.string().min(5).max(50),
  category: z.string().min(2).max(50),
  subCategory: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  description: z.string().min(8).max(200),
  author: z.string().min(2).max(50),
  images: z.array(z.object()),
  tags: z.array(z.string()),
  software: z.string().min(2).max(50),
  license: z.string().min(2).max(50),
  productShopInfo: z.array(
    z.object({
      price: z.number(),
      rating: z.number(),
      productLink: z.string(),
      shopId: z.string(),
    })
  ),
});

export default function AddProduct() {
  const CreateProduct = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      subCategory: "",
      subject: "",
      description: "",
      author: "",
      images: [],
      tags: [],
      software: "",
      license: "",
      productShopInfo: {
        price: 0,
        rating: 0,
        productLink: "",
        shopId: "",
      },
    },
    resolver: zodResolver(ProductFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("data");
      const response = await CreateProduct.mutateAsync(data);
      console.log(response);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stepper initialStep={0} steps={steps}>
        <Step>
          <Step1
            register={register}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </Step>
        <Step>
          <Step2
            register={register}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        </Step>
        <Footer isSubmitting={isSubmitting} />
      </Stepper>
      {errors.root && <ErrorMessage message={errors.root.message} />}
    </form>
  );
}

const Footer = ({ isSubmitting }) => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              variant="secondary"
              type="button"
            >
              Prev
            </Button>
            {isLastStep ? (
              <SubmitButton
                isSubmitting={isSubmitting}
                text="Create Product"
                loading="Creating Product..."
                className="w-40"
              />
            ) : (
              <Button type="button" onClick={nextStep} variant="primary">
                Next
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
};
