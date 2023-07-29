import { Chip as MuiChip } from "@mui/material";
import React from "react";

const Chip = ({ content, color }) => (
  <MuiChip
    label={content}
    color={color}
    sx={{ fontWeight: 'bold' }}
  ></MuiChip>
);

export default Chip;
