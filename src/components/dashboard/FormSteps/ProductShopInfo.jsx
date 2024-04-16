import FormInput from "@/components/customUI/forms/FormInput";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ProductShopInfo({
  index,
  register,
  errors,
  getValues,
  setValue,
  shopid,
}) {
  const [updateProductShopInfo, setUpdateProductShopInfo] = useState(false);
  setValue(`productShopInfo[${index}].shopid`, shopid); // Update the form value
  const handleClick = (idx) => {
    const newRating = idx + 1;
    setValue(`productShopInfo[${index}].rating`, newRating); // Update the form value
    setUpdateProductShopInfo(!updateProductShopInfo);
  };
  return (
    <div className="flex flex-col gap-4">
      <FormInput
        register={register}
        errors={errors}
        id={`productShopInfo[${index}].price`}
        name="Price $"
        placeholder="Enter the product price"
        number="number"
      />
      <div>
        <label htmlFor="">Rating</label>
        <div className="flex">
          {/* choose rating by hover over the stars and click */}
          {Array.from({ length: 5 }, (_, idx) => (
            <Star
              key={idx}
              size={24}
              fill={
                idx < getValues(`productShopInfo[${index}].rating`)
                  ? "currentColor"
                  : "none"
              }
              onClick={() => handleClick(idx)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      <FormInput
        register={register}
        errors={errors}
        id={`productShopInfo[${index}].productlink`}
        name="Product Link"
        placeholder="Enter the product link"
      />
    </div>
  );
}
