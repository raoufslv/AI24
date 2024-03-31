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
      <HeroSection />
      {/* Top rated items */}
      <div>
        <div className="flex justify-between items-end w-full lg:8 md:6 mt-4 xl:mt-0">
          <Hometitle text="Popular Items" />
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
      </div>

      {/* Top rated items */}
      <div>
        <div className="flex justify-between items-end w-full lg:8 md:6 mt-4 xl:mt-0">
          <Hometitle text="New items" />
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
      </div>

      {/* Latest articles */}
      <div className="my-12">
        <div className="flex justify-between items-end w-full lg:8 md:6">
          <Hometitle text="News" />
          <ViewAllButton />
        </div>
        <LatestArticles />
      </div>

      {/* About section */}
      <div id="about" className="my-12">
        <AboutSection />
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
