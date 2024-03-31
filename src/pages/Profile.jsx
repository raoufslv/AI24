import { useUserInfoQuery } from "@/hooks/react-query/useUser";

import UserFormInfo from "@/components/profile/UserFormInfo";

export default function Profile() {
  const { data: userInfo, isLoading } = useUserInfoQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UserFormInfo userInfo={userInfo} />;
}
