import { useAuth } from "@/context/AuthContext";
import { setAccessToken } from "@/context/accessToken";
import { axiosInstance } from "@/services/apiConfig";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export default function ProfilAvatar() {
  const navigate = useNavigate();
  const { setConnected, firstName, image } = useAuth();

  const logout = async () => {
    try {
      // clear the access token
      setConnected(false);
      await axiosInstance.post("auth/logout");
      setAccessToken(null);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={image}
              className=" object-cover object-center"
              alt="profil pic"
            />
            <AvatarFallback>
              {firstName ? firstName.charAt(0).toUpperCase() : <User />}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => navigate("/bookmarks")}
          >
            Bookmarks
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-red-500"
            onClick={logout}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
