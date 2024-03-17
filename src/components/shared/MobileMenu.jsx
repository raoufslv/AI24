import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import NavLinks from "@/components/shared/NavLinks";
import AuthButtons from "@/components/shared/AuthButtons";

import hamburgerIcon from "@/assets/icons/hamburger-icon.svg";
import hamburgerWhiteIcon from "@/assets/icons/hamburgerWhite-icon.svg";
import exitIcon from "@/assets/icons/exit-icon.svg";
import exitWhiteIcon from "@/assets/icons/exitWhite-icon.svg";

export default function MobileMenu() {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <img
        onClick={toggleMenu}
        src={theme === "light" ? hamburgerIcon : hamburgerWhiteIcon}
        alt="menu"
        className="md:hidden w-8 cursor-pointer"
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 right-0 w-full h-full bg-white dark:bg-black
              flex flex-col items-center justify-center space-y-8 z-10"
          >
            {/* Exit icon */}
            <img
              onClick={toggleMenu}
              src={theme === "light" ? exitIcon : exitWhiteIcon}
              alt="exit"
              className="w-8 cursor-pointer absolute top-4 left-4"
            />

            <NavLinks />
            <div className="flex flex-col space-y-8 sm:hidden">
              <AuthButtons />
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
