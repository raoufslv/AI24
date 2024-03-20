import CategoryCards from "@/components/home/CategoryCards";
import BigBanner from "@/components/shared/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import SearchBar from "@/components/shared/SearchBar";
import ViewAllButton from "@/components/customUI/ViewAllButton";

import AboutSection from "@/components/home/AboutSection";
import TopProducts from "@/components/home/TopProducts";
import LatestArticles from "@/components/home/LatestArticles";
import { FeaturedShops } from "@/components/home/FeaturedShops";

export default function Home() {
  return (
    <>
      <BigBanner />

      <Hometitle text="Explore By Category" />
      <CategoryCards />

      <Hometitle text="Personalize your search" />
      <SearchBar />

      <div className="flex justify-between items-end w-full 2xl:pr-16 xl:pr-12 lg:8 md:6">
        <Hometitle text="Top rated Items" />
        <ViewAllButton />
      </div>
      <TopProducts />

      <AboutSection />

      <div className="flex justify-between items-end w-full 2xl:pr-16 xl:pr-12 lg:8 md:6">
        <Hometitle text="Latest Articles" />
        <ViewAllButton />
      </div>
      <LatestArticles />

      <div className="my-20">
        <Hometitle text="Featured shops" />
        <FeaturedShops />
      </div>
    </>
  );
}
