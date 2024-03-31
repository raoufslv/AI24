import { Boxes } from "@/components/ui/background-boxes";
import { Input } from "../ui/input";

export default function HeroSection() {
  return (
    <div className="h-[70vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div>
            
        </div>
      <Boxes />
      <h1 className="md:text-4xl text-xl text-white relative z-20">
        Welcome to CG Vortex
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        where you can find the best products at the best prices
      </p>
      <div className="w-full max-w-[400px] mt-4 relative z-20 px-4 md:px-0">
        <Input
          placeholder="Search for products"
          className="relative z-20 bg-opacity-20 text-white dark:bg-opacity-40
          "
        />
      </div>
    </div>
  );
}
