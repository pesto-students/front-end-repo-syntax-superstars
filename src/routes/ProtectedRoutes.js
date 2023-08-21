import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import LeftPane from "../pages/LeftPane/LeftPane";

function ProtectedRoute({ user, children }) {
  if (!user & !user?.isVerified) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <LeftPane />
      <Box
        sx={{
          width: { sm: `calc(100 % -"300px")`, xs: "100%" },
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
