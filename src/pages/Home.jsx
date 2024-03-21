import CategoryCards from "@/components/home/CategoryCards";
import BigBanner from "@/components/shared/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import SearchBar from "@/components/shared/SearchBar";
import ViewAllButton from "@/components/customUI/ViewAllButton";

import AboutSection from "@/components/home/AboutSection";
import TopProducts from "@/components/home/TopProducts";
import LatestArticles from "@/components/home/LatestArticles";
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
        <CategoryCards />
      </div>

      {/* Search bar */}
      <div>
        <Hometitle text="Personalize your search" />
        <SearchBar />
      </div>

      {/* Top rated items */}
      <div>
        <div className="flex justify-between items-end w-full 2xl:pr-16 xl:pr-12 lg:8 md:6">
          <Hometitle text="Top rated Items" />
          <ViewAllButton />
        </div>
        <TopProducts />
      </div>

      {/* About section */}
      <div className="my-12">
        <AboutSection />
      </div>

      {/* Latest articles */}
      <div className="my-12">
        <div className="flex justify-between items-end w-full 2xl:pr-16 xl:pr-12 lg:8 md:6">
          <Hometitle text="Latest Articles" />
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
        <div className="md:px-20 sm:mx-16 mx-6">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
