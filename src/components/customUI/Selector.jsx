import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Selector({ topic, items, value, onChange }) {
  const handleSelectChange = (selectedValue) => {
    // Pass the selected value back to the parent component
    onChange(selectedValue);
  };

  return (
    <Select onValueChange={(value) => handleSelectChange(value)}>
      <span className="text-sm">{topic}:</span>
      <SelectTrigger className="w-full bg-transparent dark:bg-transparent text-greeny border-0 p-0 ">
        <SelectValue className="w-full" placeholder="All" value={value} />
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
