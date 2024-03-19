import React from "react";
import TempBanner from "@/assets/images/TempBanner.png";

export default function BigBanner() {
  return (
    <img
      className="xl:w-11/12 w-full mx-auto xl:h-32 rounded xl:object-fill object-scale-down 
      object-center my-6"
      src={TempBanner}
      alt="Ads Banner"
    />
  );
}
