import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginMutation } from "@/hooks/react-query/useAuth";
import { setAccessToken } from "@/context/accessToken";
import { useAuth } from "@/context/AuthContext";
import { createAxiosInstance } from "@/services/apiConfig";

export default function GoogleAuth() {
  const GoogleLoginMutation = useGoogleLoginMutation();
  const { setConnected, setRole, setImage, setFirstName, setOpenLogin } =
    useAuth();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        const response = await GoogleLoginMutation.mutateAsync({
          clientId: credentialResponse.clientId,
          credential: credentialResponse.credential,
        });
        console.log(response);
        setAccessToken(response.accessToken);
        setConnected(true);
        setRole(response.role);
        setImage(response.image);
        setFirstName(response.firstName);
        createAxiosInstance();
        // close the modal
        setOpenLogin(false);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
