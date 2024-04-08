import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginMutation } from "@/hooks/react-query/useAuth";

export default function GoogleAuth() {
  const GoogleLoginMutation = useGoogleLoginMutation();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        const response = await GoogleLoginMutation.mutateAsync({
          clientId: credentialResponse.clientId,
          credential: credentialResponse.credential,
        });
        console.log(response);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
