import ArchiveIcon from "@mui/icons-material/Archive";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ListItemIcon, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const Dropdown = ({ handleItemClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [title, setTitle] = React.useState("created");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setTitle(value);
    setAnchorEl(null);
    handleItemClick(value);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined"
        color="secondary"
        sx={{ height: "40px", backgroundColor: "#FFFFFF" }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Sort By {title !== "title" ? `Date ${title}` : title}
        </Typography>
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiMenu-paper": {
            width: "18rem",
          },
        }}
      >
        <MenuItem onClick={() => handleClose("title")} disableRipple>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <Typography variant="inhertit">Title</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("created")} disableRipple>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          Date Created
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => handleClose("modified")} disableRipple>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          Date Modified
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
