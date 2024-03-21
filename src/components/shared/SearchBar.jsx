import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Selector from "../customUI/Selector";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import { categories } from "@/constants/Categories";
import Softwares from "@/constants/softwares";
import license from "@/constants/license";
import PriceDropDown from "@/components/customUI/PriceDropDown";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedLicense, setSelectedLicense] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedSearchQuery = encodeURIComponent(searchQuery);
    const sanitizedCategory = encodeURIComponent(selectedCategory);
    const sanitizedSoftware = encodeURIComponent(selectedSoftware);
    const sanitizedLicense = encodeURIComponent(selectedLicense);

    navigate(
      `/products?query=${sanitizedSearchQuery}&category=${sanitizedCategory}&software=${sanitizedSoftware}&license=${sanitizedLicense}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };

  return (
    <form
      className="bg-darky flex md:flex-nowrap flex-wrap md:justify-start justify-center items-center rounded-lg xl:space-x-12 md:space-x-4 space-x-2 w-fit p-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for anything"
        className="xl:w-[35rem] text-black lg:w-[30rem] sm:w-[20rem] w-full p-2 border-2 border-gray-300 rounded-md md:text-base text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex items-center text-white justify-center">
        <Selector
          topic="category"
          items={categories}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </div>

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

      <Button
        variant="outline"
        type="submit"
        className="bg-white dark:bg-white px-3 py-2 rounded-md dark:hover:bg-gray-400"
      >
        <Search color="#000" />
      </Button>
    </form>
  );
}
