import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import MobileMenu from "@/components/shared/navbar/MobileMenu";
import NavLinks from "@/components/shared/navbar/NavLinks";
import AuthButtons from "@/components/shared/navbar/AuthButtons";
import Logo from "@/components/customUI/Logo";
import { setAccessToken } from "@/context/accessToken";
import { axiosInstance } from "@/services/authService";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useScrollDetector } from "@/hooks/custom/ScrollDetector";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { connected, setConnected, setRole } = useAuth();

  useEffect(() => {
    useScrollDetector(setIsScrolled);
  }, []);

  const logout = async () => {
    try {
      // clear the access token
      setConnected(false);
      setRole(null);
      await axiosInstance.post("auth/logout");
      setAccessToken(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg dark:bg-darky" : ""
      }`}
    >
      <div className="mx-auto 2xl:px-16 xl:px-10 lg:px-8 px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <MobileMenu />

            {/* Logo */}
            <Logo />
          </div>

          {/* Desktop Menu */}
          <nav aria-label="Main navigation" className="xl:flex-grow xl:pl-32">
            <ul className="hidden md:flex xl:space-x-8 lg:space-x-6 md:space-x-4 space-x-2">
              <NavLinks />
            </ul>
          </nav>

          {/* Mode Toggle and Auth Buttons */}
          <div className="flex items-center xl:space-x-10 lg:space-x-8 md:space-x-4 space-x-2">
            <ModeToggle />
            <div className="space-x-4 hidden sm:flex">
              {connected ? (
                <div>
                  connected
                  <Button onClick={logout}>logout</Button>
                </div>
              ) : (
                <AuthButtons />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
