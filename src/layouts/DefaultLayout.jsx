import React from "react";
import Navbar from "@/components/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div className="xl:px-8 lg:px-6 px-4">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
