import Hometitle from "@/components/ui/hometitle";
import ViewAllButton from "@/components/customUI/ViewAllButton";
import { products } from "@/constants/products";

import AboutSection from "@/components/home/AboutSection";
import TopProducts from "@/components/home/TopProducts";
import LatestArticles from "@/components/home/LatestNews";
import { FeaturedShops } from "@/components/home/FeaturedShops";
import Testimonials from "@/components/home/Testimonials";

import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* Top rated items */}
      <div className=" mt-4 xl:mt-0">
        <Hometitle text="Popular Items" />
        <div className="flex justify-between items-end w-full mt-4 xl:mt-0">
          <h2 className="text-lg">Addons</h2>
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
        <div className="flex justify-between items-end w-full mt-4">
          <h2 className="text-lg">Courses</h2>
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
      </div>

      {/* Top rated items */}
      <div className="mt-12">
        <div className="flex justify-between items-end w-full mt-4 xl:mt-0">
          <Hometitle text="New items" />
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
      </div>

      {/* Latest articles */}
      <div className="my-12">
        <div className="flex justify-between items-end w-full">
          <Hometitle text="News" />
          <ViewAllButton />
        </div>
        <LatestArticles />
      </div>

      {/* Featured shops */}
      <div className="">
        <Hometitle text="Featured shops" />
        <FeaturedShops />
      </div>

      {/* Testimonials */}
      <div className="">
        <Hometitle text="Testimonials" />
        <div className="">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
