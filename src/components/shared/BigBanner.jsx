import TempBanner from "@/assets/images/TempBanner.png";
import LazyLoad from "react-lazy-load";

export default function BigBanner() {
  // Calculate the appropriate height based on the screen width
  const screenWidth = window.innerWidth;
  let imageWidth = screenWidth * 0.03; // Set the Width to 10% of the screen Width initially

  // Adjust the Width based on screen width
  if (window.innerWidth >= 1024) {
    // For large screens and above
    imageWidth = screenWidth * 0.1; // Set the Width to 20% of the screen Width
  }

  return (
    <LazyLoad Width={imageWidth}>
      <img
        className="w-full mx-auto xl:h-32 rounded xl:object-fill object-scale-down object-center"
        src={TempBanner}
        alt="Ads Banner"
      />
    </LazyLoad>
  );
}
