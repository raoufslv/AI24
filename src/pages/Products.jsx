import DividerLine from "@/components/customUI/forms/DividerLine";
import BigBanner from "@/components/shared/BigBanner";
import SearchBar from "@/components/shared/SearchBar";
import SidebarFilter from "@/components/customUI/SidebarFilter";
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

      <div className="flex flex-row gap-4">
        {/* side bar */}
        <SidebarFilter />
        {/* product list */}
        <ProductsList />
      </div>
    </>
  );
}
