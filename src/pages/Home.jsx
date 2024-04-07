import Hometitle from "@/components/ui/hometitle";
import ViewAllButton from "@/components/customUI/ViewAllButton";

import TopProducts from "@/components/home/TopProducts";
import LatestArticles from "@/components/home/LatestNews";
import { FeaturedShops } from "@/components/home/FeaturedShops";
import Testimonials from "@/components/home/Testimonials";
import HeroSection from "@/components/home/HeroSection";
import LatestProducts from "@/components/shared/LatestProducts";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* Top rated items */}
      <div className=" mt-4 xl:mt-7">
        <div className="flex justify-between items-end w-full mt-4 xl:mt-0">
          <div>
            <Hometitle text="Popular Addons" />
            <p className="text-sm text-gray-600">
              Check out the most used addons these days. They can enhance your
              productivity.
            </p>
          </div>

          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts category={"Addons"} />
        <div className="flex justify-between items-end w-full mt-12">
          <div>
            <Hometitle text="Popular Courses" />
            <p className="text-sm text-gray-600">
              Explore the most popular courses to boost your knowledge.
            </p>
          </div>
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts category={"Courses"} />
      </div>

      {/* Top rated items */}
      <div className="mt-12">
        <div className="flex justify-between items-end w-full mt-4 xl:mt-0">
          <div>
            <Hometitle text="New items" />
            <p className="text-sm text-gray-600">
              Discover the latest items added to our collection.
            </p>
          </div>
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <LatestProducts />
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
