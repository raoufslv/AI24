import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logoWhite.svg";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className=" flex justify-between items-center py-4 px-12">
      <div className=" flex items-center space-x-24">
        <div className=" flex items-center space-x-2">
          {theme === "dark" ? (
            <img src={logoWhite} alt="logo" className="w-10 h-10" />
          ) : (
            <img src={logo} alt="logo" className="w-10 h-10" />
          )}
          <h1 className="text-2xl font-Bruno">CG Vortex</h1>
        </div>
        <ul className=" flex space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className=" flex items-center space-x-10">
        <ModeToggle />
        <div className=" flex space-x-4">
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
