import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ProtectedRoute from "./ProtectedRoutes";
import Project from "../pages/RightPane/Projects/Project";
import Dashboard from "../pages/RightPane/Dashboard/Dashboard";
import Documents from "../pages/RightPane/Documents/Documents";
import Document from "../pages/RightPane/Document/Document";
import Usage from "../pages/RightPane/Usage/Usage";
import Plans from "../pages/RightPane/Plans/Plans";
import { ROUTES } from "../pages/Constants";
import { Box } from "@mui/material";
import { useState } from "react";

const AppRoutes = () => {
  const {
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    DASHBOARD_ROUTE,
    PROJECTS_ROUTE,
    DOCUMENTS_ROUTE,
    USAGE_ROUTE,
    PLAN_ROUTE,
  } = ROUTES;

  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <BrowserRouter>
      <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
        <Routes>
          <Route
            path={DASHBOARD_ROUTE}
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={PROJECTS_ROUTE}
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path={DOCUMENTS_ROUTE}
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Documents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/document"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Document />
              </ProtectedRoute>
            }
          />
          <Route
            path={USAGE_ROUTE}
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Usage />
              </ProtectedRoute>
            }
          />
          <Route
            path={PLAN_ROUTE}
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Plans />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Registration />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default AppRoutes;
