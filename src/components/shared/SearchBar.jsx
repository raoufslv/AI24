import { useState } from "react";

import Selector from "../customUI/Selector";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import { categories } from "@/constants/Categories";
import Softwares from "@/constants/softwares";
import license from "@/constants/license";
import PriceDropDown from "@/components/customUI/PriceDropDown";

export default function SearchBar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <form
      action=""
      className="bg-darky flex md:flex-nowrap flex-wrap md:justify-start justify-center items-center rounded-lg 
    xl:space-x-12 md:space-x-4 space-x-2
     w-fit mt-5 mb-10 p-6"
    >
      <input
        type="text"
        placeholder="Search for anything"
        className="xl:w-[35rem] text-black lg:w-[30rem] sm:w-[20rem] w-full p-2 border-2 border-gray-300 rounded-md
      md:text-base text-sm"
      />

      <div className="flex items-center text-white justify-center">
        <Selector topic="category" items={categories} />
      </div>

      <div className="flex items-center text-white justify-center">
        <Selector topic="Softwares" items={Softwares} />
      </div>

      <div className="flex items-center text-white justify-center">
        <Selector topic="license" items={license} />
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
