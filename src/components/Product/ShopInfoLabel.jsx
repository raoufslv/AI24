import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import RatingGroup from "@/components/customUI/RatingGroup";
import { useShopQuery } from "@/hooks/react-query/useShop";

export default function ShopInfoLabel({ productshopinfo }) {
  const { data: shop, isLoading } = useShopQuery(productshopinfo.shopid);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Label
      className="border rounded p-2 flex flex-col gap-4"
      htmlFor={shop._id}
    >
      <div className="flex justify-between items-center gap-16">
        <div className="flex items-center gap-2">
          <img
            src={shop.logoimageurl}
            alt={shop.name}
            className="w-8 h-8 object-cover rounded"
          />
          <p>{shop.name}</p>
        </div>
        <RadioGroupItem
          value={shop._id}
          id={shop._id}
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
