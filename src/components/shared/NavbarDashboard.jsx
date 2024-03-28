import { useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ProfilAvatar from "./navbar/ProfilAvatar";

export default function NavbarDashboard() {
  const location = useLocation();
  const path = location.pathname.slice(1).split("/")[0];
  return (
    <div className="border-b-2 flex justify-between px-8 py-4">
      <h2 className="text-2xl font-bruno">{path}</h2>
      <div className=" flex justify-center items-center gap-4 pr-8">
        <ModeToggle />
        <ProfilAvatar />
      </div>
    </div>
  );
}
