import { shops } from "@/constants/shops";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import RatingGroup from "@/components/customUI/RatingGroup";
export default function ShopInfoLabel({productshopinfo}) {
  return (
    <Label
      className="border rounded p-2 flex flex-col gap-4"
      htmlFor={productshopinfo.shopid}
    >
      <div className="flex justify-between items-center gap-16">
        <div className="flex items-center gap-2">
          <img
            src={shops.find((shop) => shop.id == productshopinfo.shopid).image}
            alt={shops.find((shop) => shop.id == productshopinfo.shopid).name}
            className="w-8 h-8 object-cover rounded"
          />
          <p>{shops.find((shop) => shop.id == productshopinfo.shopid).name}</p>
        </div>
        <RadioGroupItem
          value={productshopinfo.shopid}
          id={productshopinfo.shopid}
          className="bg-white dark:text-darky"
        />
      </div>
      <div className="flex justify-between items-center gap-16">
        <RatingGroup
          filled={productshopinfo.rating}
          flag="none"
          className="flex gap-1 items-center"
        />
        <p className="font-semibold">
          {productshopinfo.price}
          {productshopinfo.currency}
        </p>
      </div>
    </Label>
  );
}
