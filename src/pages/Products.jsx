import DividerLine from "@/components/customUI/forms/DividerLine";
import BigBanner from "@/components/shared/BigBanner";
import SearchBar from "@/components/shared/SearchBar";
import SidebarFilter from "@/components/shared/SidebarFilter";
import ProductsList from "@/components/customUI/ProductsList";

export default function Products() {
  return (
    <>
      {/* ads banner */}
      <div>
        <BigBanner />
      </div>

      {/* Search bar */}
      <div className="mt-4">
        <SearchBar />
      </div>

      <DividerLine className={"opacity-40"} />

      <div className="flex sm:flex-row flex-col gap-4 sm:items-start items-center">
        {/* side bar */}
        <SidebarFilter />
        {/* product list */}
        <ProductsList />
      </div>
    </>
  );
}
