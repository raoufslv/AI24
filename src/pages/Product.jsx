import { useParams } from "react-router-dom";
import { products } from "@/constants/products";
import { shops } from "@/constants/shops";
import BigBanner from "@/components/shared/BigBanner";
import SmallBanner from "@/components/shared/SmallBanner";
import DividerLine from "@/components/customUI/forms/DividerLine";
import { CircleArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import RatingGroup from "@/components/customUI/RatingGroup";

export default function Product() {
  const { id } = useParams();
  const product = products.find((product) => {
    return product.id == id;
  });
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <BigBanner />

      <div className="flex items-center gap-4 mt-4">
        <CircleArrowLeft
          className="cursor-pointer"
          onClick={() => {
            window.history.back();
          }}
        />
        <h1 className="text-2xl font-bruno text-start">{product.title}</h1>
      </div>
      <DividerLine className={"opacity-30 mt-1"} />
      <div className="flex lg:flex-row lg:items-start flex-col gap-16 justify-end items-center">
        <div className="flex justify-between items-start gap-36">
          <div className="w-full">
            <img src={product.image} alt={product.title}
            className="w-[60rem] object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg border p-4 w-full">
            <RadioGroup className="flex flex-col gap-4">
              {product.productshopsinfo.map((productshopinfo, index) => (
                <Label
                  key={index}
                  className="border rounded p-2 flex flex-col gap-4"
                  htmlFor={productshopinfo.shopid}
                >
                  <div className="flex justify-between items-center gap-16">
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          shops.find(
                            (shop) => shop.id == productshopinfo.shopid
                          ).image
                        }
                        alt={
                          shops.find(
                            (shop) => shop.id == productshopinfo.shopid
                          ).name
                        }
                        className="w-8 h-8 object-cover rounded"
                      />
                      <p>
                        {
                          shops.find(
                            (shop) => shop.id == productshopinfo.shopid
                          ).name
                        }
                      </p>
                    </div>
                    <RadioGroupItem
                      value={productshopinfo.shopid}
                      id={productshopinfo.shopid}
                      className="bg-white dark:text-darky"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-16">
                    <p className="flex gap-1 items-center">
                      <RatingGroup filled={productshopinfo.rating} flag="none"/>
                    </p>
                    <p className="font-semibold">
                      {productshopinfo.price}
                      {productshopinfo.currency}
                    </p>
                  </div>
                </Label>
              ))}
            </RadioGroup>

            <Button className="w-full mt-6">
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
        {/* ads banner */}
        <div className="xl:w-1/6 min-w-36 flex flex-col gap-6">
          <SmallBanner />
          <SmallBanner />
          <SmallBanner />
        </div>
      </div>
    </>
  );
}
