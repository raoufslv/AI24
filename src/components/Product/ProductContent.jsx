import { Bookmark, Link2 } from "lucide-react";
import EmblaCarousel from "@/components/customUI/EmblaCarousel";
import "@/assets/styles/embla.css";
import { images } from "@/constants/images";
import ShopInfoCard from "./ShopInfoCard";
import ProductSpecificationList from "./ProductSpecificationList";

const OPTIONS = {};
const SLIDES = images;

export default function ProductContent({ product }) {
  return (
    <>
      <div className="flex flex-col gap-14">
        {/* first section */}
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-16 w-fit">
          {/* Product images */}
          <div className="sm:w-1/2">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          {/* Product shops info */}
          <ShopInfoCard productshopsinfo={product.productshopsinfo} />
        </div>

        {/* second section */}
        <div className="flex md:flex-row flex-col items-center md:items-start w-full justify-between gap-8 md:gap-0">
          {/* product description */}
          <div className="w-fit">
            <div className="flex justify-between gap-16">
              <h2 className="text-lg font-bold font-bruno">Description</h2>
              <div className="flex gap-2">
                <Link2 />
                <Bookmark />
              </div>
            </div>
            <p className="mt-6 2xl:w-[37rem] xl:w-[33rem] lg:w-[22rem] md:w-[28rem] w-[22rem]">
              {product.description}
            </p>
          </div>

          {/* product specification */}
          <ProductSpecificationList
            license={product.license}
            software={product.software}
            category={product.category}
            price={product.price}
            rating={product.rating}
            tags={product.tags}
          />
        </div>
      </div>
    </>
  );
}
