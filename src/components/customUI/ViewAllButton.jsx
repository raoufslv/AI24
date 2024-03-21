import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewAllButton({path}) {
  const navigate = useNavigate();
  return (
    <Button
      className="gap-2"
      variant="outline"
      onClick={() => {
        navigate(path);
      }}
    >
      View All
      <LayoutGrid size={24} />
    </Button>
  );
}
