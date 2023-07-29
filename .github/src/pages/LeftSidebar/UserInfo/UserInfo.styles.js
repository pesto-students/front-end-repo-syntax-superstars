import { CardContent, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)({
  padding: "12px",
  "&.MuiCardContent-root:last-child": {
    paddingBottom: "12px",
  },
});
