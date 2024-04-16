import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductTable from "@/components/dashboard/ProductTable";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ShopsDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        className="xl:col-span-2 dark:bg-black dark:border-neutral-800"
        x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="grid gap-2">
            <CardTitle>All Shops</CardTitle>
            <CardDescription>
              All shops available in the database are listed here
            </CardDescription>
          </div>
          <Button onClick={() => navigate("/shopsDashboard/add")}>
            Add Shop
          </Button>
        </CardHeader>
        <CardContent>
          <ProductTable />
        </CardContent>
      </Card>
    </div>
  );
}
