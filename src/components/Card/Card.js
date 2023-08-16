import { Card as MuiCard } from "@mui/material";
import React from "react";

const Card = ({ children, styles, onClick }) => (
  <MuiCard sx={{ borderRadius: "10px", ...styles }}>{children}</MuiCard>
);

export default Card;
