import React from "react";
import { categories } from "@/constants/Categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RatingGroup from "@/components/customUI/RatingGroup";

import { Star } from "lucide-react";

export default function SidebarFilter() {
  return (
    <div className="bg-darky py-10 px-6 text-white rounded-lg h-fit flex flex-col gap-6">
      <div>
        <h3 className="font-bruno text-lg">Sort By</h3>
        <Select>
          <SelectTrigger className="w-44 bg-transparent dark:bg-transparent">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((categorie) => (
              <SelectItem key={categorie.id} value={categorie.name}>
                {categorie.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <h3 className="font-bruno text-lg">Rating</h3>
        <div className="flex flex-col gap-2">
          <RatingGroup filled={4} />
          <RatingGroup filled={3} />
          <RatingGroup filled={2} />
          <RatingGroup filled={1} />
        </div>
      </div>
    </div>
  );
}
