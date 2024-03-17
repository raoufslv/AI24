import { useState } from "react";
import CategoryCards from "@/components/CategoryCards";
import BigBanner from "@/components/BigBanner";
import Hometitle from "@/components/ui/hometitle";
import Icon from "@/components/ui/icon";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [position, setPosition] = useState("bottom");
  return (
    <>
      <BigBanner />

      <Hometitle text="Explore By Category" />
      <CategoryCards />

      <Hometitle text="Personalize your search" />
      {/* SearchBar */}
      <form
        action=""
        className="bg-darky flex justify-center items-center space-x-4 rounded-lg
        w-full mt-5 mb-10 p-6"
      >
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full p-2 border-2 border-gray-300 rounded-md"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white">
              Category: All
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose a Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <button type="submit" className="bg-white px-3 py-2 rounded-md">
          <Icon name="Search" />
        </button>
      </form>
    </>
  );
}
