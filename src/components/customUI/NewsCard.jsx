import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import LazyLoad from "react-lazy-load";

export default function NewsCard({ news }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className=" bg-gray-50 relative group/card  
      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
      w-auto sm:w-[25rem] h-[28rem] 
      rounded-xl border"
      >
        <CardItem translateZ="100" className="w-full relative">
          <LazyLoad height={230}>
          <img
            src={news.image}
            className="h-56 object-cover object-center w-full rounded-t-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </LazyLoad>
          <div className="absolute top-2 right-2 flex gap-2">
            {news.tags.map((tag, index) => (
              <Badge
                className="bg-white dark:bg-gray-800 dark:text-white text-neutral-600 dark:border-white/[0.2] border px-2 py-1 text-xs font-light"
                key={index}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-1 px-2">
          <CardItem translateZ="50" className="px-2 py-2 text-xs font-bold">
            {news.date}
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center gap-1 text-center"
          >
            {news.rating}

            <Star size={20} />
          </CardItem>
        </div>

        <CardItem
          translateZ={20}
          className=" py-2 xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold text-neutral-600 dark:text-white px-4"
        >
          {news.title}
        </CardItem>

        <CardItem
          translateZ={20}
          className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
        >
          {news.description}
        </CardItem>
        <Link to={"/news/" + news.id}
        className="flex justify-end">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center gap-1"
          >
            See details →
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  );
}
