import { Boxes } from "@/components/ui/background-boxes";
import { Input } from "../ui/input";
import CategoriesBar from "@/components/shared/CategoriesBar";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="h-[29rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <CategoriesBar />
      <Boxes />
      <h1 className="md:text-4xl text-xl text-white relative z-20 mt-24">
        Welcome to CG Vortex
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Find the best 3D products from all markets in one place
      </p>
      <div className="w-full max-w-[400px] mt-4 relative z-20 px-4 md:px-0">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target[0].value);
            navigate({
              pathname: "/products",
              search: `?search=${e.target[0].value}`,
            });
          }}
        >
          <Input
            placeholder="Search for products"
            className="relative z-20 bg-opacity-20 text-white dark:bg-opacity-40"
          />
          <Button
            variant="icon"
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30"
          >
            <Search color="#fff" />
          </Button>
        </form>
      </div>
    </div>
  );
}
