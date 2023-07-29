import * as React from "react";
import Paper from "@mui/material/Paper";
import { StyledMenuItem, StyledMenuList } from "./Menu.styles";
import { lightTheme } from "../../themes";
import { Link } from "react-router-dom";

const Menu = ({ menuList }) => (
  <Paper
    variant="outlined"
    sx={{
      borderRadius: "20px",
      border: `1px solid ${lightTheme.palette.borderColor}}`,
      maxWidth: 310,
    }}
  >
    <StyledMenuList sx={{ padding: "15px" }}>
      {menuList.map((item, index) => (
        <Link to={item.url}>
          <StyledMenuItem key={`Menu-${index}`}>
            {item.icon()} &nbsp;
            {item.title}
          </StyledMenuItem>
        </Link>
      ))}
    </StyledMenuList>
  </Paper>
);

export default Menu;
