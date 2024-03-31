import SelectCategory from "@/components/customUI/SelectCategory";
import { categories } from "@/constants/Categories";
import { useState } from "react";

export default function CategoriesBar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div
      className="bg-white bg-opacity-30 rounded-lg
       flex gap-8 absolute z-20 top-20 px-3 py-[0.35rem]"
    >
      <div className="flex">
        <SelectCategory
          topic="Addons"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />{" "}
      </div>
      <div className="flex">
        <SelectCategory
          topic="Courses"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>
      <div className="flex">
        <SelectCategory
          topic="Materials"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>
      <div className="flex">
        <SelectCategory
          topic="Shaders"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>
      <div className="flex">
        <SelectCategory
          topic="Brushes"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>
      <div className="flex">
        <SelectCategory
          topic="Models"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>
    </div>
  );
}
