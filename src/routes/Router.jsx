import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Profile from "@/pages/Profile";
import DefaultLayout from "@/layouts/DefaultLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import { useAuth } from "@/context/AuthContext";
import Aboutus from "@/pages/Aboutus";
import Challenges from "@/pages/Challenges";
import Evenets from "@/pages/Evenets";
import Arena from "@/pages/Arena";

const Router = () => {
  const { connected } = useAuth();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <DefaultLayout>
            <Aboutus />
          </DefaultLayout>
        }
      />
      <Route
        path="/challenges"
        element={
          <DefaultLayout>
            <Challenges />
          </DefaultLayout>
        }
      />
      <Route
        path="/evenets"
        element={
          <DefaultLayout>
            <Evenets />
          </DefaultLayout>
        }
      />
      <Route
        path="/arena"
        element={
          <DefaultLayout>
            <Arena />
          </DefaultLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      {connected == true && (
        <>
          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            }
          />
        </>
      )}
    </Routes>
  );
};

export default Router;
