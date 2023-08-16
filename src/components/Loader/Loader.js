import * as React from "react";
import { StyledBox, StyledCircularProgress } from "./Loader.styles";
import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <StyledBox>
      <StyledCircularProgress size="4rem" />
      <Typography variant="h6">Loading...</Typography>
    </StyledBox>
  );
};

export default Loader;
