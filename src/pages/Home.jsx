import CategoryCards from "@/components/home/CategoryCards";
import BigBanner from "@/components/shared/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import SearchBar from "@/components/shared/SearchBar";
import ProductCard from "@/components/customUI/ProductCard";
import ViewAllButton from "@/components/customUI/ViewAllButton";

import AboutSection from "@/components/home/AboutSection";
import TopProducts from "@/components/home/TopProducts";

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
    </>
  );
}
