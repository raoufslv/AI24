import { useTheme } from "@/components/theme-provider";

import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logoWhite.svg";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <div className=" flex items-center space-x-2">
      <img
        src={theme === "light" ? logo : logoWhite}
        alt="logo"
        className="lg:w-12 sm:w-10 w-8"
      />
      <h1 className="lg:text-2xl sm:text-xl text-lg font-bruno">CG Vortex</h1>
    </div>
  );
}
