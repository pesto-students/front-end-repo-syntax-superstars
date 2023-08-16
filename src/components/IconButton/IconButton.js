import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";

const IconButton = ({ children, color, onClick, ...rest }) => (
  <MuiIconButton aria-label="delete" color={color} onClick={onClick} {...rest}>
    {children}
  </MuiIconButton>
);

export default IconButton;
