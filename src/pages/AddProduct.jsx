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
import { useState, useMemo } from "react";

import tags from "@/constants/tags";

const steps = [{}, {}];

const ProductFormSchema = z.object({
  title: z.string().min(1, "please add a title").max(200),
  category: z.string().min(1, "please select a category"),
  subCategory: z.string().min(1, "please select a subCategory"),
  subject: z.string(),
  description: z.string().min(1, "please add a description").max(2000),
  author: z.string().min(1, "please add an author").max(100),
  images: z.array(z.any()).min(1, "Please upload at least one image"),
  tags: z.array(z.any()).min(1, "Please select at least one tag"),
  software: z.string().min(1, "please select a software"),
  license: z.string().min(1, "please select a license"),
  productShopInfo: z
    .array(
      z.object({
        price: z.string().min(0, "please add a price").max(1000),
        rating: z.number().min(0).max(5),
        productlink: z.string().min(1, "please add a product link").max(400),
        shopid: z.string().min(5).max(300),
      })
    )
    .min(1, "please add at least one shop info"),
});

export default function AddProduct() {
  const [updatePreview, setUpdatePreview] = useState(false);
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
      productShopInfo: [],
    },
    resolver: zodResolver(ProductFormSchema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      data.tags = data.tags.map((tag) => tag.name);
      data.images = data.images.map((image) => image.file);

      const formData = new FormData();
      for (const key in data) {
        if (key === "images") {
          data[key].forEach((image) => {
            formData.append("images", image);
          });
        } else if (key === "productShopInfo") {
          data[key].forEach((shopInfo, index) => {
            for (const shopInfoKey in shopInfo) {
              formData.append(
                `productShopInfo[${index}][${shopInfoKey}]`,
                shopInfo[shopInfoKey]
              );
            }
          });
        } else {
          formData.append(key, data[key]);
        }
      }

      const response = await CreateProduct.mutateAsync(formData);
      console.log(response);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  let FilteredTags = tags;
  if (getValues("category")) {
    FilteredTags = tags.filter((tag) =>
      tag.categories.includes(getValues("category"))
    );
  }

  const [unselectedTags, setUnselectedTags] = useState(FilteredTags);

  useMemo(() => {
    // get the tags that belong to the category
    if (getValues("category")) {
      FilteredTags = tags.filter((tag) =>
        tag.categories.includes(getValues("category"))
      );
    }
    // set the unselected tags to the filtered tags
    setUnselectedTags(FilteredTags);

    // set the selected tags to empty
    setValue("tags", []);
  }, [getValues("category")]);

  return (
    <form
      key={updatePreview ? 0 : 1}
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
            updatePreview={updatePreview}
            setUpdatePreview={setUpdatePreview}
            unselectedTags={unselectedTags}
            setUnselectedTags={setUnselectedTags}
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
