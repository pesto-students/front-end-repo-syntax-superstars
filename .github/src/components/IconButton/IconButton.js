import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";

const IconButton = ({ children, color }) => (
  <MuiIconButton aria-label="delete" color={color}>
    {children}
  </MuiIconButton>
);

export default IconButton;