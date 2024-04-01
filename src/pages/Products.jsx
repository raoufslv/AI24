import DividerLine from "@/components/customUI/forms/DividerLine";
import SidebarFilter from "@/components/shared/SidebarFilter";
import ProductsList from "@/components/customUI/ProductsList";
import CategoriesBar from "@/components/shared/CategoriesBar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6">
        <CategoriesBar flag="products" />
        <div className="w-96 relative">
          <Input placeholder="Search for products" className="" />
          <Button className="absolute right-0 top-0">
            <Search />
          </Button>
        </div>
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
