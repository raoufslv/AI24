import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { categories } from "@/constants/Categories";

export default function CategoryCards() {
  const navigate = useNavigate();

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className=""
    >
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-28 sm:basis-32 md:basis-36 lg:basis-40 xl:basis-44"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="rounded-lg bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center 
              flex aspect-square items-center justify-center cursor-pointer relative"
              style={{ "--image-url": `url(${category.image})` }}
              onClick={() => navigate(`/products?category=${category.id}`)}
            >
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg" />
              <span className="xl:text-2xl md:text-xl text-lg text-white z-10 text-center">
                {category.name}
              </span>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
