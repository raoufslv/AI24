import React from "react";
import Navbar from "@/components/shared/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
