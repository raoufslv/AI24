import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import LazyLoad from "react-lazy-load";

export default function ProductCard({ product, className }) {
  return (
    <Link to={"/products/" + product.id}>
      <CardContainer className={cn("inter-var", className)}>
        <CardBody
          className=" bg-gray-50 relative group/card  
      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
      dark:bg-black w-[17rem] h-auto rounded-lg border"
        >
          <CardItem translateZ="100" className="w-full h-fit">
            <LazyLoad height={175}>
              <img
                src={product.image}
                className="h-full w-full rounded-t-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </LazyLoad>
          </CardItem>
          <div className="flex justify-between items-center mt-1 px-4">
            <CardItem
              translateZ="50"
              className=" py-2 xl:text-xl lg:text-lg md:text-base sm:text-sm  text-neutral-600 dark:text-white"
              style={{
                width: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.title}
            </CardItem>
            <CardItem
              translateZ={20}
              className="px-2 py-2 text-xs  dark:text-white flex items-center justify-center gap-1"
            >
              {product.rating}
              <Star size={20} />
            </CardItem>
          </div>
          <div className="flex justify-between items-center my-4 px-4">
            <CardItem
              translateZ={20}
              as="button"
              className="px-2 py-2 text-xs font-semibold"
            >
              $ {product.price}
            </CardItem>

            <CardItem
              translateZ={20}
              className="px-2 py-2 text-xs  dark:text-white"
            >
              by {product.author}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
