import ShopInfoLabel from "./ShopInfoLabel";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";

export default function ShopInfoCard({ productshopsinfo }) {
  const [selectedShopLink, setSelectedShopLink] = useState(
    productshopsinfo[0].productlink
  );

  return (
    <div className="rounded-lg border p-4 flex-shrink 2xl:w-[30rem] w-96">
      <RadioGroup
        className="flex flex-col gap-4"
        defaultValue={productshopsinfo[0].productlink}
        onValueChange={(value) => {
          setSelectedShopLink(value);
          console.log(value);
        }}
      >
        {productshopsinfo.map((productshopinfo, index) => (
          <ShopInfoLabel key={index} productshopinfo={productshopinfo} />
        ))}
      </RadioGroup>

      <Button
        className="w-full mt-8 mb-2"
        onClick={() => window.open(selectedShopLink, "_blank")}
      >
        <span>Go to shop</span>
      </Button>
    </div>
  );
}
