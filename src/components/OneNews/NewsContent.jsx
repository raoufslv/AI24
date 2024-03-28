import { Bookmark, Link2 } from "lucide-react";
import React from "react";
import RatingGroup from "../customUI/RatingGroup";
import CommentSection from "./CommentSection";

export default function NewsContent({ newsItem }) {
  return (
    <div>
      <img
        src={newsItem.image}
        alt={newsItem.id}
        className="w-[73rem] h-72 object-cover object-center rounded-t-lg"
      />
      <div className="flex justify-between mt-3">
        <div className="flex gap-4 flex-wrap">
          <p>{newsItem.date}</p>
          <RatingGroup flag="none" filled={newsItem.rating} />
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 flex-wrap justify-end">
            {newsItem.tags.map((tag) => (
              <p
                key={tag}
                className="mr-2 text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </p>
            ))}
          </div>

          <Link2 className="" size={24} />
          <Bookmark className="" size={24} />
        </div>
      </div>
      <h2 className="text-lg font-bruno mt-10">Descreption</h2>
      <p className="my-6 pr-16">{newsItem.description}</p>
      <h2 className="text-lg font-bruno mt-10">Rate this news</h2>
      <RatingGroup flag="none" />

      <CommentSection />
    </div>
  );
}
