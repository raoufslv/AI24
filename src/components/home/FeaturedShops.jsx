import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { shops } from "@/constants/shops";

export function FeaturedShops() {
  return (
    <div
      className="rounded-md flex flex-col
    items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards items={shops} direction="right" speed="normal" />
    </div>
  );
}
