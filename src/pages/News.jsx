import BigBanner from "@/components/shared/BigBanner";
import SmallBanner from "@/components/shared/SmallBanner";
import SearchBar from "@/components/shared/SearchBar";
import SidebarFilter from "@/components/shared/SidebarFilter";
import NewsList from "@/components/customUI/NewsList";

export default function News() {
  return (
    <>
      {/* ads banner */}
      <div>
        <BigBanner />
      </div>

      {/* Search bar */}
      <div className="mt-4 flex justify-center mb-8">
        <SearchBar flag="news" />
      </div>

      <div className="flex lg:flex-row lg:items-start flex-col gap-16 justify-center items-center">
        {/* side bar */}
        <SidebarFilter />

        {/* product list */}
        <NewsList />

        {/* ads banner */}
        <div className="xl:w-1/6 min-w-36 flex flex-col gap-6">
          <SmallBanner />
          <SmallBanner />
          <SmallBanner />
        </div>
      </div>
    </>
  );
}
