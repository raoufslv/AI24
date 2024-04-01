import { useState } from "react";
import { categories } from "@/constants/categoriesTemp";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SubCategories from "@/components/customUI/SubCategories";

export default function Categories() {
  const [queryParameters] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    queryParameters.get("categories")
      ? queryParameters.get("categories")
      : "courses"
  );
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex gap-10">
        {categories.map((category, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <button
              className={`${
                selectedCategory === category.name ? "" : " opacity-70"
              } rounded-none`}
              style={{
                borderBottom:
                  selectedCategory === category.name ? "3px solid" : "none",
              }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          </motion.li>
        ))}
      </ul>
      <SubCategories category={selectedCategory} />
    </div>
  );
}
