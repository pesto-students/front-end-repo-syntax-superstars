import { Button, styled } from "@mui/material";

export const StyledButtonIcon = styled(Button)(({ theme }) => ({
  height: "60px",
  width: "100%",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));
