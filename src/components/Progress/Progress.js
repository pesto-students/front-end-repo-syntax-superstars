import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress } from "@mui/material";

export const LinearDeterminate = ({ value }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={value} color="progress" sx={{ borderRadius: '5px' }} />
    </Box>
  );
}

export const CircularDeterminate = ({ value }) => (
  <CircularProgress variant="determinate" value={value} color="" size={200} sx={{ strokeLinecap: 'round' }} />
);
