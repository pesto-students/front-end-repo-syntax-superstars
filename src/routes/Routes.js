import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ROUTES } from "../pages/Constants";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../pages/RightPane/Dashboard/Dashboard";
import Document from "../pages/RightPane/Document/Document";
import Documents from "../pages/RightPane/Documents/Documents";
import Plans from "../pages/RightPane/Plans/Plans";
import Profile from "../pages/RightPane/Profile/Profile";
import Project from "../pages/RightPane/Projects/Project";
import Usage from "../pages/RightPane/Usage/Usage";
import { SentryRoutes } from "../sentry";
import { getUser } from "../utils";
import ProtectedRoute from "./ProtectedRoutes";

const AppRoutes = () => {
  const {
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    DASHBOARD_ROUTE,
    PROJECTS_ROUTE,
    PROJECT_ROUTE,
    DOCUMENTS_ROUTE,
    DOCUMENT_ROUTE,
    USAGE_ROUTE,
    PLAN_ROUTE,
    PROFILE_ROUTE,
  } = ROUTES;

  const user = getUser();

  return (
    <BrowserRouter>
      <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
        <SentryRoutes>
          <Route
            path={DASHBOARD_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={PROJECTS_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path={PROJECT_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Document />
              </ProtectedRoute>
            }
          />
          <Route
            path={DOCUMENTS_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Documents />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={DOCUMENT_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Document />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={USAGE_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Usage />
              </ProtectedRoute>
            }
          />
          <Route
            path={PLAN_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Plans />
              </ProtectedRoute>
            }
          />
          <Route
            path={PROFILE_ROUTE}
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </SentryRoutes>
        <SentryRoutes>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Registration />} />
        </SentryRoutes>
      </Box>
    </BrowserRouter>
  );
};

export default AppRoutes;
