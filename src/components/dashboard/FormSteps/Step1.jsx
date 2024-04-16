import FormInput from "@/components/customUI/forms/FormInput";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";
import ProductSelector from "@/components/dashboard/ProductSelector";
import FormTextarea from "@/components/customUI/forms/FormTextarea";
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";

import { categories } from "@/constants/categoriesTemp";
import softwares from "@/constants/softwares";
import license from "@/constants/license";

export default function Step1({
  register,
  errors,
  getValues,
  setValue,
  updatePreview,
  setUpdatePreview,
  unselectedTags,
  setUnselectedTags,
}) {
  const handleCategoryChange = (category) => {
    setValue("category", category);
    setValue(
      "subCategory",
      categories.find((c) => c.name === category).subcategories[0].name
    );

    setValue(
      "subject",
      categories.find((c) => c.name === category).subcategories[0].subjects
        ? categories.find((c) => c.name === category).subcategories[0]
            .subjects[0]
        : ""
    );
    setUpdatePreview(!updatePreview);
  };

  const handleSubCategoryChange = (subCategory) => {
    setValue("subCategory", subCategory);
    setValue(
      "subject",
      categories
        .find((c) => c.name === getValues("category"))
        .subcategories.find((s) => s.name === subCategory).subjects
        ? categories
            .find((c) => c.name === getValues("category"))
            .subcategories.find((s) => s.name === subCategory).subjects[0]
        : ""
    );
    setUpdatePreview(!updatePreview);
  };

  const handleSubjectChange = (subject) => {
    setValue("subject", subject);
  };

  const handleSoftwareChange = (software) => {
    setValue("software", software);
  };

  const handleLicenseChange = (license) => {
    setValue("license", license);
  };

  const categoryNames = categories.map((category) => category.name);
  let subCategoryNames = [];
  let subjects = [];
  if (getValues("category")) {
    subCategoryNames = categories
      .find((c) => c.name === getValues("category"))
      .subcategories.map((sub) => sub.name);
    subjects =
      categories
        .find((c) => c.name === getValues("category"))
        .subcategories.find((s) => s.name === getValues("subCategory"))
        ?.subjects || [];
  }

  const softwareNames = softwares.map((software) => software.name);
  const licenseNames = license.map((license) => license.name);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <FormInput
          register={register}
          errors={errors}
          id="title"
          name="Title"
          placeholder="Enter the product title"
          className=""
        />
        <FormInput
          register={register}
          errors={errors}
          id="author"
          name="Author"
          placeholder="Enter the product author"
          className="w-[40rem]"
        />
      </div>

      <div className="flex gap-4">
        <ProductSelector
          topic={"Category"}
          items={categoryNames}
          value={getValues("category")}
          onChange={handleCategoryChange}
          errors={errors}
          id="category"
        />

        <ProductSelector
          topic={"SubCategory"}
          items={subCategoryNames}
          value={getValues("subCategory")}
          onChange={handleSubCategoryChange}
          errors={errors}
          id="subCategory"
        />
        {subjects.length > 0 && (
          <>
            <ProductSelector
              topic={"Subject"}
              items={subjects}
              value={getValues("subject")}
              onChange={handleSubjectChange}
              errors={errors}
              id="subject"
            />
          </>
        )}
      </div>
      <div className="flex gap-4">
        <ProductSelector
          topic={"Software"}
          items={softwareNames}
          value={getValues("software")}
          onChange={handleSoftwareChange}
          errors={errors}
          id="software"
        />

        <ProductSelector
          topic={"License"}
          items={licenseNames}
          value={getValues("license")}
          onChange={handleLicenseChange}
          errors={errors}
          id="license"
        />
      </div>
      <FormTextarea
        register={register}
        errors={errors}
        id="description"
        name="Description"
        placeholder="Enter the product description"
        className="h-32"
      />
      <div>
        <h3 className="mt-4">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          {
            // create a button for each selected tag
            getValues("tags").map((tag, idx) => (
              <Button
                type="button"
                key={idx}
                onClick={() => {
                  // remove the tag from the selected tags
                  setValue(
                    "tags",
                    getValues("tags").filter(
                      (selectedTag) => selectedTag.id !== tag.id
                    )
                  );
                  // add the tag to the unselected tags
                  setUnselectedTags([...unselectedTags, tag]);
                }}
                className="bg-black text-white hover:bg-darky border hover:text-white"
              >
                <X size={16} />
                {tag.name}
              </Button>
            ))
          }
          {
            // create a button for each tag
            unselectedTags.map((tag, idx) => (
              <Button
                type="button"
                key={idx}
                onClick={() => {
                  // add the tag to the selected tags
                  setValue("tags", [...getValues("tags"), tag]);
                  // remove the tag from the unselected tags
                  setUnselectedTags(
                    unselectedTags.filter(
                      (selectedTag) => selectedTag.id !== tag.id
                    )
                  );
                }}
                variant="outline"
                className="bg-transparent dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                {tag.name}
              </Button>
            ))
          }
        </div>
        {errors.tags && <ErrorMessage message={errors.tags.message} />}
      </div>
    </div>
  );
}
