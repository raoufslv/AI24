import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
export default function DefaultLayout({ children }) {
  return (
    <div className="">
      <header className="mb-24 2xl:px-16 xl:px-10 lg:px-8 px-6">
        <Navbar />
      </header>
      <main className="2xl:px-16 xl:px-10 lg:px-8 px-6">{children}</main>
      <footer className="mt-56">
        <Footer />
      </footer>
    </div>
  );
}
