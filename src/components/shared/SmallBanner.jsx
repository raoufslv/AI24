import TempBanner from "@/assets/images/TempBanner2.png";
import LazyLoad from "react-lazy-load";

export default function SmallBanner() {

  return (
    <LazyLoad className="w-full">
      <img
        className="w-full rounded object-center"
        src={TempBanner}
        alt="Ads Banner"
      />
    </LazyLoad>
  );
}
