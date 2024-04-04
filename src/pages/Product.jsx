import { useParams } from "react-router-dom";
import { CircleArrowLeft } from "lucide-react";
import BigBanner from "@/components/shared/BigBanner";
import SmallBanner from "@/components/shared/SmallBanner";
import DividerLine from "@/components/customUI/forms/DividerLine";

import Hometitle from "@/components/ui/hometitle";
import ViewAllButton from "@/components/customUI/ViewAllButton";
import ProductContent from "@/components/Product/ProductContent";

import { useProductQuery } from "@/hooks/react-query/useProduct";
import SimilarProducts from "@/components/shared/SimilarProducts";

export default function Product() {
  const { id } = useParams();
  const { data: product, isLoading } = useProductQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <h1 className="text-2xl  text-start">{product.title}</h1>
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
        <SimilarProducts productId={id} />
      </div>
    </>
  );
}
