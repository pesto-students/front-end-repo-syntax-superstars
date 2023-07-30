import { CardContent, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)({
  lineHeight: "25px",
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
