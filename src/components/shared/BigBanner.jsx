import React from "react";
import TempBanner from "@/assets/images/TempBanner.png";
import LazyLoad from "react-lazy-load";

export default function BigBanner() {
  // Calculate the appropriate height based on the screen width
  const screenHeight = window.innerHeight;
  let imageHeight = screenHeight * 0.03; // Set the height to 10% of the screen height initially

  // Adjust the height based on screen width
  if (window.innerWidth >= 1024) {
    // For large screens and above
    imageHeight = screenHeight * 0.1; // Set the height to 20% of the screen height
  }

  return (
    <LazyLoad height={imageHeight}>
      <img
        className="w-full mx-auto xl:h-32 rounded xl:object-fill object-scale-down object-center"
        src={TempBanner}
        alt="Ads Banner"
      />
    </LazyLoad>
  );
}
