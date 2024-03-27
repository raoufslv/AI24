import CategoryCards from "@/components/home/CategoryCards";
import BigBanner from "@/components/shared/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import SearchBar from "@/components/shared/SearchBar";
import ViewAllButton from "@/components/customUI/ViewAllButton";
import { products } from "@/constants/products";

import AboutSection from "@/components/home/AboutSection";
import TopProducts from "@/components/home/TopProducts";
import LatestArticles from "@/components/home/LatestNews";
import { FeaturedShops } from "@/components/home/FeaturedShops";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      {/* ads banner */}
      <div>
        <BigBanner />
      </div>

      {/* Category cards */}
      <div>
        <Hometitle text="Explore By Category" />
        <div className="mt-4">
          <CategoryCards />
        </div>
      </div>

      {/* Search bar */}
      <div>
        <Hometitle text="Personalize your search" />
        <div className="mt-4">
          <SearchBar />
        </div>
      </div>

      {/* Top rated items */}
      <div>
        <div className="flex justify-between items-end w-full lg:8 md:6">
          <Hometitle text="Top rated Items" />
          <ViewAllButton path={"/products?filter=toprated"} />
        </div>
        <TopProducts products={products} />
      </div>

      {/* About section */}
      <div id="about" className="my-12">
        <AboutSection />
      </div>

      {/* Latest articles */}
      <div className="my-12">
        <div className="flex justify-between items-end w-full lg:8 md:6">
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
