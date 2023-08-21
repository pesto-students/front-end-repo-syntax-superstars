import { CardContent, Typography, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: theme.palette.white,
  fontWeight: "bold",
}));

export const StyledTypography = styled(Typography)({
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "8",
});
