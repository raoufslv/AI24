"use client";

import * as React from "react";
import * as Slider from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const SliderP = React.forwardRef(({ className, ...props }, ref) => (
  <Slider.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
      <Slider.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
    </Slider.Track>
    <Slider.Thumb
      name="minPrice"
      className="block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
    />
    <Slider.Thumb
      name="maxPrice"
      className="block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
    />
  </Slider.Root>
));
SliderP.displayName = Slider.Root.displayName;

export { SliderP as Slider };
