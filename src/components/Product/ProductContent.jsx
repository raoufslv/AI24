import { Bookmark, Link2 } from "lucide-react";
import EmblaCarousel from "@/components/customUI/EmblaCarousel";
import "@/assets/styles/embla.css";
import ShopInfoCard from "./ShopInfoCard";
import ProductSpecificationList from "./ProductSpecificationList";

export default function ProductContent({ product }) {
  const OPTIONS = {};
  const SLIDES = product.imagesurls;
  return (
    <>
      <div className="flex flex-col gap-14">
        {/* first section */}
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-16 w-fit">
          {/* Product images */}
          <div className="md:w-1/2 sm:w-4/5">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          {/* Product shops info */}
          <ShopInfoCard productshopsinfo={product.productshopsinfolist} />
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
            <p
              className="mt-6 2xl:w-[37rem] xl:w-[33rem] lg:w-[22rem] md:w-[28rem]"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>

          {/* product specification */}
          <ProductSpecificationList
            license={product.license}
            software={product.software}
            category={product.categories}
            price={product.price}
            rating={product.rating}
            tags={product.tags}
            author={product.author}
          />
        </div>
      </div>
    </>
  );
}
