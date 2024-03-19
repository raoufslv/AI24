import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileMenu from "@/components/customUI/MobileMenu";
import NavLinks from "@/components/customUI/NavLinks";
import AuthButtons from "@/components/customUI/AuthButtons";
import Logo from "@/components/customUI/Logo";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center w-full xl:py-4 lg:py-3 py-2">
      <div className=" flex items-center lg:space-x-24 md:space-x-14 space-x-8">
        <div className="flex items-center md:space-x-0 space-x-4">
          {/*Mobile Menu*/}
          <MobileMenu />

          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex xl:space-x-8 lg:space-x-6 md:space-x-4 space-x-2">
            <NavLinks />
          </ul>
        </nav>
      </div>

      {/* Mode Toggle and Auth Buttons */}
      <div className="flex items-center xl:space-x-10 lg:space-x-8 md:space-x-4 space-x-2">
        <ModeToggle />
        <div className="space-x-4 hidden sm:flex">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}
