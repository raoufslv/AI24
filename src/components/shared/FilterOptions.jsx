// FilterOptions.js
import React from "react";
import Selector from "@/components/customUI/Selector";
import PriceDropDown from "@/components/customUI/PriceDropDown";
import Softwares from "@/constants/softwares";
import license from "@/constants/license";

export default function FilterOptions({
  selectedSoftware,
  setSelectedSoftware,
  selectedLicense,
  setSelectedLicense,
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
}) {
  return (
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
          topic="License"
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
  );
}
