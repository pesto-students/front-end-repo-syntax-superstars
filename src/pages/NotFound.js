import { Box } from "@mui/material";
import React from "react";
import notFound from "../images/not-found.jpg";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <img src={notFound} alt="" style={{ width: "inherit" }} />
    </Box>
  );
};

export default NotFound;
