import { Box, CircularProgress, styled } from "@mui/material";

export const StyledBox = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  background: "rgba(0, 0, 0, 0.834)",
  zIndex: 9999,
  opacity: 0.5,
  flexDirection: "column",
  color: "white",
});

export const StyledCircularProgress = styled(CircularProgress)({
  transition: "color 0.2s linear",
});
