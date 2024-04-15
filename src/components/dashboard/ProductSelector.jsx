import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "../customUI/forms/ErrorMessage";
import { useState } from "react";

export default function ProductSelector({
  topic,
  items,
  value,
  onChange,
  img,
  errors,
  id,
}) {
  const [updatePreview, setUpdatePreview] = useState(false);
  const handleSelectChange = (selectedValue) => {
    onChange(selectedValue);
    setUpdatePreview(!updatePreview);
  };

  return (
    <>
      <Select
        defaultValue={value}
        onValueChange={(value) => handleSelectChange(value)}
        className=""
      >
        <div className="text-sm self-center text-black dark:text-white">
          {topic}:
        </div>
        <SelectTrigger className=" dark:bg-darky dark:border-darky">
          <SelectValue className="w-full" placeholder="All" value={value} />
        </SelectTrigger>
        <SelectContent className="dark:bg-darky dark:border-darky">
          {items.map((item, idx) => (
            <SelectItem key={idx} value={item}>
              <div className="flex items-center justify-center gap-2">
                {img ? (
                  <img
                    src={img[idx]}
                    className="h-8 w-8 rounded-lg"
                    alt={item}
                  />
                ) : (
                  ""
                )}
                <p>{item}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
        {id && errors[id] && <ErrorMessage message={errors[id].message} />}
      </Select>
    </>
  );
}
