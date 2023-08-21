import React from "react";
import { Tabs as MuiTabs } from "@mui/material";
import { Box } from "@mui/material";

const Tabs = ({ children, value, handleChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <MuiTabs value={value} onChange={handleChange} aria-label="icon-tab">
        {children}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
