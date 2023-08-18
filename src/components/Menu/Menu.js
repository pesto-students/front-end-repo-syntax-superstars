import Paper from "@mui/material/Paper";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { lightTheme } from "../../themes";
import { StyledMenuItem, StyledMenuList } from "./Menu.styles";

const Menu = ({ menuList }) => {
  const location = useLocation();
  return (
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
          <Link to={item.url} key={`menu-${index}`}>
            <StyledMenuItem
              key={`Menu-${index}`}
              selected={item.url === location.pathname}
            >
              {item.icon()} &nbsp;
              {item.title}
            </StyledMenuItem>
          </Link>
        ))}
      </StyledMenuList>
    </Paper>
  );
};

export default Menu;
