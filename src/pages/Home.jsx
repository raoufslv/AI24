import CategoryCards from "@/components/CategoryCards";
import BigBanner from "@/components/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import SearchBar from "@/components/SearchBar";
import ThreeDCard from "@/components/ui/ThreeDCard";
import ViewAllButton from "@/components/shared/ViewAllButton";

import AboutSection from "@/components/AboutSection";

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

      <div
        className="flex flex-wrap justify-start gap-10 w-full"
        style={{ overflow: "hidden" }}
      >
        {[...Array(6)].map((_, index) => (
          <ThreeDCard key={index} />
        ))}
      </div>

      <AboutSection />
    </>
  );
}
