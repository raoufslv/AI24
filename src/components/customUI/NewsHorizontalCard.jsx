import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import LazyLoad from "react-lazy-load";

export default function NewsHorizontalCard({ news }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className=" bg-gray-50 relative group/card  
      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
      w-auto h-auto rounded-xl border
      flex flex-row-reverse justify-between"
      >
        <CardItem translateZ="80" className="h-full xl:max-h-64">
          <LazyLoad className="h-full">
            <img
              src={news.image}
              className="object-cover w-[40rem] object-center h-full rounded-r-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </LazyLoad>
        </CardItem>
        <div className="flex flex-col justify-between p-2">
          <CardItem
            translateZ="80"
            className=" py-2 xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold dark:text-white px-4"
          >
            {news.title}
          </CardItem>

          <CardItem
            translateZ="50"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            {news.description}
          </CardItem>
          <CardItem
            translateZ="30"
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center gap-1 text-center"
          >
            {news.rating}

            <Star size={20} />
          </CardItem>
          <CardItem translateZ="10" className="px-2 py-2 text-xs font-bold">
            {news.date}
          </CardItem>

          <div className=" flex justify-between">
            <div className="flex gap-2">
              {news.tags.map((tag, index) => (
                <CardItem translateZ="10">
                  <Badge
                    className="bg-neutral-200 dark:bg-darky dark:text-white text-neutral-600 dark:border-white/[0.2] border px-2 py-1 text-xs font-light"
                    key={index}
                  >
                    {tag}
                  </Badge>
                </CardItem>
              ))}
            </div>
            <Link to={"/news/" + news.id} className="flex justify-end">
              <CardItem
                translateZ="10"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center gap-1"
              >
                See details →
              </CardItem>
            </Link>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
