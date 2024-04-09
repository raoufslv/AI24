import { categories } from "@/constants/categoriesTemp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SubCategories({ category }) {
  const navigate = useNavigate();
  const subCategories = categories.find(
    (cat) => cat.name === category
  ).subcategories;

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {subCategories.map((subCategory, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.1 }}
          className={`rounded-lg bg-[image:var(--image-url)] bg-no-repeat bg-origin-padding bg-cover bg-center 
              flex aspect-square items-center justify-center cursor-pointer relative
              h-64 ${idx % 2 === 0 ? "w-26 lg:w-[16rem]" : "w-44 lg:w-[26rem]"}`}
          style={{ "--image-url": `url(${subCategory.image})` }}
          onClick={() =>
            navigate({
              pathname: "/products",
              search: `?categories=${category}&subcategories=${subCategory.name}`,
            })
          }
        >
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg" />
          <span className="xl:text-2xl md:text-xl text-lg text-white z-10 text-center stroke-black">
            {subCategory.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
