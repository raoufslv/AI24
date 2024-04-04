import SelectCategory from "@/components/customUI/SelectCategory";
import { categories } from "@/constants/categoriesTemp";
import { Menubar } from "@/components/ui/menubar";

export default function CategoriesBar({ flag }) {
  return (
    <Menubar
      className={`${
        flag
          ? "bg-darky bg-opacity-80 w-fit"
          : "absolute z-20 top-20 bg-white bg-opacity-30"
      } 
       px-3 py-6 border-0 gap-2 sm:flex hidden`}
    >
      {categories.map((category, idx) => (
        <div key={idx} className="flex">
          <SelectCategory
            category={category.name}
            subcategories={category.subcategories}
            flag={flag}
          />
        </div>
      ))}
    </Menubar>
  );
}
