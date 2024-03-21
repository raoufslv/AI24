import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import artstation from "@/assets/images/logos/artstation.png";
import cgtrade from "@/assets/images/logos/cgtrade.png";
import blendarmarket from "@/assets/images/logos/blendarmarket.png";
import flippednormals from "@/assets/images/logos/flippednormals.png";

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

const shops = [
  {
    name: "Artstation",
    image: artstation,
    link: "https://www.artstation.com/",
  },
  {
    name: "CG Trade",
    image: cgtrade,
    link: "https://www.cgtrader.com/",
  },
  {
    name: "Blender market",
    image: blendarmarket,
    link: "https://blendermarket.com/",
  },
  {
    name: "Flipped Normals",
    image: flippednormals,
    link: "https://flippednormals.com/",
  },
];
