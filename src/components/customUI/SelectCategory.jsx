import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export default function SelectCategory({ topic, items, value, onChange }) {
  const handleSelectChange = (selectedValue) => {
    // Pass the selected value back to the parent component
    onChange(selectedValue);
  };

  return (
    <Select onValueChange={(value) => handleSelectChange(value)}>
      <Button
        className=" text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent 
      bg-transparent dark:bg-transparent border-0 p-0"
      >
        {topic}
      </Button>

      <SelectTrigger className="text-white w-full bg-transparent dark:bg-transparent border-0 p-0 ">
        <SelectValue className="" value={value} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
