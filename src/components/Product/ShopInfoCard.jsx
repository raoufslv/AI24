import ShopInfoLabel from "./ShopInfoLabel";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

export default function ShopInfoCard({ productshopsinfo }) {
  return (
    <div className="rounded-lg border p-4 flex-shrink 2xl:w-[30rem] w-96">
      <RadioGroup className="flex flex-col gap-4">
        {productshopsinfo.map((productshopinfo, index) => (
          <ShopInfoLabel key={index} productshopinfo={productshopinfo} />
        ))}
      </RadioGroup>

      <Button
        className="w-full mt-8 mb-2"
        onClick={() => window.open(productshopsinfo[0].productlink, "_blank")}
      >
        <span>Go to shop</span>
      </Button>
    </div>
  );
}
