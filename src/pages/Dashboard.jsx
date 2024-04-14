import { Users, Box, Newspaper, Link2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "@/components/dashboard/DataTable";
import {
  useGetRecentUsers,
  useGetStatistics,
} from "@/hooks/react-query/useUser";

export default function Dashboard() {
  const { data: recentUsers } = useGetRecentUsers();
  const { data: statistics, isLoading } = useGetStatistics();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card
            x-chunk="dashboard-01-chunk-1"
            className="dark:bg-black dark:border-neutral-800"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.users}</div>
              <p className="text-xs text-muted-foreground">
                +32% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-1"
            className="dark:bg-black dark:border-neutral-800"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <Box className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.products}</div>
              <p className="text-xs text-muted-foreground">
                +80% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-1"
            className="dark:bg-black dark:border-neutral-800"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total News</CardTitle>
              <Newspaper className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statistics.news}</div>
              <p className="text-xs text-muted-foreground">
                +13% from last month
              </p>
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-2"
            className="dark:bg-black dark:border-neutral-800"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                links clicked
              </CardTitle>
              <Link2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2 dark:bg-black dark:border-neutral-800"
            x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>All Users</CardTitle>
                <CardDescription>
                  All users in the system and their details. (except you)
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable />
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-5"
            className="dark:bg-black dark:border-neutral-800"
          >
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {recentUsers?.map((user) => (
                <div key={user._id} className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} alt="Avatar" />
                    <AvatarFallback>{user.firstname.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
