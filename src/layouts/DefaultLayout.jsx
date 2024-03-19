import React from "react";
import Navbar from "@/components/shared/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div className="2xl:px-10 xl:px-8 lg:px-6 px-4">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
