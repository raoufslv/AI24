import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleAuth() {
  const clientId = "92760030325-so87ablotka9b2tpbrh21t5v947cscj9.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}
