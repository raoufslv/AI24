import { testimonials } from "@/constants/testimonials";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/customUI/CustomCarousel";
import LazyLoad from "react-lazy-load";

export default function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 pt-12 flex flex-col items-center justify-center">
              <Card className="relative w-11/12 dark:bg-darky dark:border-0 rounded-2xl flex flex-col justify-end min-h-[17rem] md:min-h-full pt-12">
                <LazyLoad>
                  <img
                    src={testimonial.image}
                    className="w-20 h-20 object-cover object-center rounded-full
                  absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  border dark:border-0"
                    alt="avatar"
                  />
                </LazyLoad>
                <CardContent className="flex items-center justify-center">
                  <span className="text-center">{testimonial.content}</span>
                </CardContent>
                <CardContent className="flex flex-col items-center justify-center">
                  <span className="text-xl">{testimonial.name}</span>
                  <span className=" text-gray-500">{testimonial.role}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border  dark:border-0" />
      <CarouselNext className="border  dark:border-0" />
    </Carousel>
  );
}
