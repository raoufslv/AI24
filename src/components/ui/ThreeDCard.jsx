"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card.tsx";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function ThreeDCard() {
  return (
    <CardContainer className="inter-var m-0 p-0">
      <CardBody className=" m-0 p-0 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[16rem] h-auto rounded-xl border">
        <CardItem translateZ="100" className="w-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full object-cover rounded-t-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-1 px-4">
          <CardItem
            translateZ="50"
            className=" py-2 xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold text-neutral-600 dark:text-white"
          >
            3D character illustration
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center gap-1"
          >
            4.3 <Star size={20} fill="#fff" />
          </CardItem>
        </div>
        <div className="flex justify-between items-center my-4 px-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-2 py-2 text-xs font-bold"
          >
            $ 50000
          </CardItem>
          <Link to={"/details"}>
            <CardItem
              translateZ={20}
              className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              See details →
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
