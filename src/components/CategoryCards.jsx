import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { categories } from "@/constants/Categories";

import TempCategory from "@/assets/images/TempCategory.png";
console.log(TempCategory);

export default function CategoryCards() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="mx-10 my-3"
      >
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-28 sm:basis-32 md:basis-36 lg:basis-40 xl:basis-44"
            >
              <div
                style={{ "--image-url": `url(${category.image})` }}
                className="rounded-lg bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center 
            flex aspect-square items-center justify-center cursor-pointer relative
            "
              >
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg" />
                <span
                  className="xl:text-3xl lg:text-2xl md:text-xl text-lg
             text-white z-10 text-center"
                >
                  {category.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
