import { ThemeProvider } from "./context/theme-provider";
import { useAuth } from "./context/AuthContext";
import { Fragment } from "react";
import Router from "./routes/Router";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getAccessToken, setAccessToken } from "@/context/accessToken";
import { axiosInstance, createAxiosInstance } from "@/services/apiConfig";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [loading, setLoading] = useState(true);
  const { setConnected, setRole, setImage, setFirstName } = useAuth();

  useEffect(() => {
    fetch(import.meta.env.VITE_PRODUCTIO_URL + "/auth/refresh", {
      method: "POST",
      credentials: "include",
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          if (data.accessToken) {
            setAccessToken(data.accessToken);
            setConnected(true);
            setRole(data.role);
            setImage(data.image);
            setFirstName(data.firstname);
          }
        }
        setLoading(false);
        createAxiosInstance();
      })
      .catch((error) => {
        console.error("Error refreshing access token:", error);
        setLoading(false);
        createAxiosInstance();
      });
  }, []);

  // Intercept all requests to check if the access token is expired
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = getAccessToken();

      if (token) {
        // Check if the access token is expired or about to expire
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        const tokenExpiration = decodedToken.exp;

        if (tokenExpiration - currentTime < 60) {
          // Token is about to expire in less than 1 minute, refresh it
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_PRODUCTIO_URL}/auth/refresh`,
              {},
              { withCredentials: true }
            );
            const newAccessToken = response.data.accessToken;
            if (newAccessToken) {
              setAccessToken(newAccessToken);
              config.headers.Authorization = `Bearer ${newAccessToken}`;
            } else {
              setConnected(false);
              setRole(null);
            }
          } catch (error) {
            // Handle refresh token failure, maybe redirect to login page
            setConnected(false);
            setRole(null);
            console.error("Failed to refresh access token:", error);
          }
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  if (loading) {
    return null;
  }

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Fragment>
        <ThemeProvider>
          <Router />
          <Toaster />
        </ThemeProvider>
      </Fragment>
    </GoogleOAuthProvider>
  );
}

export default App;
