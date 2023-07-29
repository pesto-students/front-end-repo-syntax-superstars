import React from "react";
import { Card as MuiCard } from "@mui/material";

const Card = ({ children, styles }) => (
  <MuiCard sx={{ borderRadius: "10px", ...styles }}>{children}</MuiCard>
);

export default Card;
