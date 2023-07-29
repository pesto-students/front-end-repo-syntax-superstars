import { CardContent, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: theme.palette.white,
  fontWeight: "bold",
}));
