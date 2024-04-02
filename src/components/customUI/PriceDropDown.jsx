import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Slider } from "@/components/ui/slider";


export default function PriceDropDown({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="text-black dark:text-white">
        Prix
        <span className="p-1 text-greeny">
          {
            // if the minPrice and maxPrice are not the default values, display the range else display 'all'
            minPrice !== 0 || maxPrice !== 1000 ? (
              <>
                ${minPrice} - ${maxPrice}
              </>
            ) : (
              <>All</>
            )
          }
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose a price range</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
          className="flex justify-between items-center"
        >
          <p>${minPrice}</p>
          <Slider
            defaultValue={[minPrice, maxPrice]}
            max={1000}
            step={10}
            minStepsBetweenThumbs={1}
            onValueChange={(values) => {
              setMinPrice(values[0]);
              setMaxPrice(values[1]);
            }}
            className="w-40 h-2 bg-gray-300 dark:bg-gray-600 rounded-md"
          />
          <p>${maxPrice}</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
