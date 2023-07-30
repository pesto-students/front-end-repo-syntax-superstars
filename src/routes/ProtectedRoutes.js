import React from "react";
import { Navigate } from "react-router-dom";
import LeftPane from "../pages/LeftPane/LeftPane";
import { Box } from "@mui/material";
function ProtectedRoute({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <LeftPane />
      <Box
        sx={{
          width: "100%",
          padding: "30px 60px",
          backgroundColor: "backgroundColor",
        }}
      >
        {children}
      </Box>
    </>
  );
}
export default ProtectedRoute;
