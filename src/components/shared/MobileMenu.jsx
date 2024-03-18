import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "@/components/shared/NavLinks";
import AuthButtons from "@/components/shared/AuthButtons";

import Icon from "@/components/ui/icon";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div onClick={toggleMenu} className="md:hidden w-8 cursor-pointer">
        <Icon name="Menu" size={28} />
      </div>

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
            <div
              onClick={toggleMenu}
              className="w-8 cursor-pointer absolute top-4 left-4"
            >
              <Icon name="X" />
            </div>

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
