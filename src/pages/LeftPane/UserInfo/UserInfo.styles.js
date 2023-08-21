import { CardContent, styled } from "@mui/material";

export const StyledCardContent = styled(CardContent)({
  padding: "1.2rem",
  "&.MuiCardContent-root:last-child": {
    paddingBottom: "1.2rem",
  },
});
