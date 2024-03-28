import NavbarDashboard from "@/components/shared/NavbarDashboard";
import SidebarDashboard from "@/components/shared/SidebarDashboard";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="">
        <SidebarDashboard />
      </div>
      <div className="grow">
        <header className="mb-10">
          <NavbarDashboard />
        </header>
        <main className="2xl:px-16 xl:px-10 lg:px-8 px-6">{children}</main>
      </div>
    </div>
  );
}
