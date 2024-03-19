import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Selector({ topic, items }) {
  return (
    <Select>
      <span className="text-sm">{topic}:</span>
      <SelectTrigger className="w-full bg-transparent dark:bg-transparent text-greeny border-0 p-0 ">
        <SelectValue className="w-full" placeholder="All" />
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
