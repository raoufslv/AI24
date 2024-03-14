import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/about";
// import NotFound from "../pages/not-found";
// import Profile from "../pages/profile";
// import Dashboard from "../pages/dashboard";
import DefaultLayout from "../layouts/DefaultLayout";
// import DashboardLayout from "../layouts/DashboardLayout";

const Router = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Fetch user role from your backend and update setUserRole
    // Example: fetchUserRole().then(role => setUserRole(role));
    // For demonstration purposes, assuming user is an admin
    setUserRole("admin");
  }, []);

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
      {/* <Route
        path="/about"
        element={
          <DefaultLayout>
            <About />
          </DefaultLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <DefaultLayout>
            <Profile />
          </DefaultLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="*"
        element={
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        }
      />

      {/* Conditional routing based on user role /}
      {userRole === "admin" && (
        <Route
          path="/admin"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
      )} */}
    </Routes>
  );
};

export default Router;
