import React from "react";
import Navbar from "@/components/shared/Navbar";
export default function DefaultLayout({ children }) {
  return (
    <div className="2xl:px-16 xl:px-10 lg:px-8 px-6">
      <header className="mb-24">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
