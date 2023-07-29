import { MenuItem, MenuList, styled } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: "10px",
  boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
  height: "60px",
  color: theme.palette.secondary.main,
  fontWeight: 900,
  fontSize: "13px",
  textDecorationLine: "unset",
  "&.MuiMenuItem-root:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    ".MuiSvgIcon-root": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

export const StyledMenuList = styled(MenuList)({
  padding: "15px",
  "&.MuiList-root > a": {
    textDecoration: "unset",
  },
});
