import React, { useState } from "react";
import { Box, Drawer, Grid, Typography } from "@mui/material";
import Menu from "../../components/Menu/Menu";
import { SIDEBAR } from "../Constants";
import UserInfo from "./UserInfo/UserInfo";
import { LinearDeterminate } from "../../components/Progress/Progress";
import logo from "../../images/logo.svg";
import UpgradePlanCard from "./UpgradePlanCard/UpgradePlanCard";

const LeftPane = () => {
  const drawerWidth = 350;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Grid container height="inherit">
      <Grid item sm={12} sx={{ mt: "20px" }}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item sm={12}>
        <Menu menuList={SIDEBAR.MENU} />
      </Grid>
      <Grid item sm={12} alignSelf="flex-end">
        <UpgradePlanCard />
      </Grid>
      <Grid
        item
        sm={12}
        alignSelf="flex-end"
        sx={{ lineHeight: "25px", textAlign: "center" }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: "10px" }}>
          1800 credits left
        </Typography>
        <LinearDeterminate value={20} />
      </Grid>
      <Grid item sm={12} alignSelf="flex-end" sx={{ mb: "20px" }}>
        <UserInfo />
      </Grid>
    </Grid>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            padding: "0 40px",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default LeftPane;
