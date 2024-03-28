import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import News from "@/pages/News";
import OneNews from "@/pages/OneNews";
import Profile from "@/pages/Profile";
import Bookmarks from "@/pages/Bookmarks";
// import NotFound from "../pages/not-found";
// import Dashboard from "../pages/dashboard";
import DefaultLayout from "@/layouts/DefaultLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import { useAuth } from "@/context/AuthContext";

const Router = () => {
  const { connected, role } = useAuth();
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
        path="/contact"
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      <Route
        path="/products"
        element={
          <DefaultLayout>
            <Products />
          </DefaultLayout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
      <Route
        path="/news"
        element={
          <DefaultLayout>
            <News />
          </DefaultLayout>
        }
      />
      <Route
        path="/news/:id"
        element={
          <DefaultLayout>
            <OneNews />
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
          <Route
            path="/bookmarks"
            element={
              <DashboardLayout>
                <Bookmarks />
              </DashboardLayout>
            }
          />
        </>
      )}
      {/*
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
