import { useParams } from "react-router-dom";
import { products } from "@/constants/products";
import { CircleArrowLeft } from "lucide-react";
import BigBanner from "@/components/shared/BigBanner";
import SmallBanner from "@/components/shared/SmallBanner";
import DividerLine from "@/components/customUI/forms/DividerLine";

import Hometitle from "@/components/ui/hometitle";
import ViewAllButton from "@/components/customUI/ViewAllButton";

import TopProducts from "@/components/home/TopProducts";
import ProductContent from "@/components/Product/ProductContent";

export default function Product() {
  const { id } = useParams();
  const product = products.find((product) => {
    return product.id == id;
  });
  if (!product) return <div>Product not found</div>;

  return (
    <>
      {/* add Banner */}
      <BigBanner />

      {/* Product Title */}
      <div className="flex items-center gap-4 mt-4">
        <CircleArrowLeft
          className="cursor-pointer"
          onClick={() => {
            window.history.back();
          }}
        />
        <h1 className="text-2xl font-bruno text-start">{product.title}</h1>
      </div>

      {/* Divider Line */}
      <DividerLine className={"opacity-30 mt-1"} />

      {/* Main page */}
      <div className="flex lg:flex-row lg:items-start flex-col gap-16 justify-end items-center w-full">
        {/* Product content */}
        <ProductContent product={product} />
        {/* ads banner */}
        <div className="xl:w-1/6 min-w-36 flex flex-col gap-6">
          <SmallBanner />
          <SmallBanner />
          <SmallBanner />
          <SmallBanner />
        </div>
      </div>

      {/* Similar items */}
      <div className="mt-20">
        <div className="flex justify-between items-end w-full lg:8 md:6">
          <Hometitle text="Similar to this items" />
          <ViewAllButton path={"/products"} />
        </div>
        <TopProducts products={products} />
      </div>
    </>
  );
}
