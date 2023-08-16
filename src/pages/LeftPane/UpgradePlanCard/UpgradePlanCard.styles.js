import { CardContent, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)({
  lineHeight: "2.5rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  height: "inherit",
  justifyContent: "center",
  padding: "unset",
  "&.MuiCardContent-root:last-child": {
    paddingBottom: "unset",
  },
});
