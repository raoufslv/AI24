import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="h-[29rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="md:text-4xl text-xl text-white relative z-20 mt-24">
        Welcome to Code Quest Arena
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        <h1>Master the Code, Rule the Arena</h1>
      </p>
      <div className="w-full max-w-[400px] mt-4 relative z-20 px-4 md:px-0">
        <Button className="w-full  bg-emerald-500">
          let's have a new beginning
        </Button>
      </div>
    </div>
  );
}
