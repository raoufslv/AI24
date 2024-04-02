import DividerLine from "@/components/customUI/forms/DividerLine";
import SidebarFilter from "@/components/shared/SidebarFilter";
import ProductsList from "@/components/customUI/ProductsList";
import CategoriesBar from "@/components/shared/CategoriesBar";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Selector from "@/components/customUI/Selector";

import Softwares from "@/constants/softwares";
import license from "@/constants/license";
import PriceDropDown from "@/components/customUI/PriceDropDown";

export default function Products() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedLicense, setSelectedLicense] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <CategoriesBar flag="products" />
        <div className="w-96 relative mt-4">
          <Input
            placeholder="Search for products"
            className=""
            onChange={() => setSearch(event.target.value)}
          />
          <Button
            variant="icon"
            className="absolute right-3 top-0 p-0"
            onClick={() => navigate(`/products?search=${search}`)}
          >
            <Search />
          </Button>
        </div>
        <div className="self-end flex gap-6">
          <div className="flex items-center text-white justify-center">
            <Selector
              topic="Softwares"
              items={Softwares}
              value={selectedSoftware}
              onChange={(value) => setSelectedSoftware(value)}
            />
          </div>
          

          <div className="flex items-center text-white justify-center">
            <Selector
              topic="license"
              items={license}
              value={selectedLicense}
              onChange={(value) => setSelectedLicense(value)}
            />
          </div>

          <div className="flex items-center text-white justify-center">
            <PriceDropDown
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
            />
          </div>
        </div>
      </div>

      <DividerLine className={"opacity-40 mt-1"} />

      <div className="flex sm:flex-row flex-col gap-4 sm:items-start items-center">
        {/* side bar */}
        <SidebarFilter />
        {/* product list */}
        <ProductsList />
      </div>
    </>
  );
}
