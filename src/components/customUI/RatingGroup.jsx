import React from "react";
import { Star } from "lucide-react";

export default function RatingGroup({ filled, flag }) {
  return (
    <div className=" flex justify-between items-center">
      <div className="flex gap-1">
        {
          // create an array of 5 elements
          Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={20}
              fill={index < filled ? "currentColor" : "none"}
            />
          ))
        }
      </div>
      {flag ? "" : "& up"}
    </div>
  );
}
