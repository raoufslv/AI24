import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="">
      <header className="mb-24">
        <Navbar />
      </header>
      <main className="3xl:px-44 2xl:px-16 xl:px-10 lg:px-8 px-6">
        {children}
      </main>
      <footer className="mt-36">
        <Footer />
      </footer>
    </div>
  );
}
