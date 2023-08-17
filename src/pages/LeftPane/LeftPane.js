import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { LinearDeterminate } from "../../components/Progress/Progress";
import { AppContext } from "../../context/AppContext";
import logo from "../../images/logo.svg";
import { getUser } from "../../utils";
import { SIDEBAR } from "../Constants";
import UpgradePlanCard from "./UpgradePlanCard/UpgradePlanCard";
import UserInfo from "./UserInfo/UserInfo";

const LeftPane = () => {
  const drawerWidth = "25%";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [credit, setCredit] = useState();
  const { state } = useContext(AppContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const user = getUser();

  useEffect(() => {
    if (user.creditsLeft) {
      setCredit((user.creditsLeft * 100) / 2000);
    }
  }, [user.creditsLeft]);

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Grid container height="inherit" alignContent="space-between">
      <Grid item container>
        <Grid item xs={12} sx={{ mt: "2rem" }}>
          <img src={logo} alt="logo" width="100%" />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "5rem" }}>
          <Menu menuList={SIDEBAR.MENU} />
        </Grid>
      </Grid>
      <Grid item container>
        {state?.plan?.name !== "Elite" && (
          <Grid item xs={12} sx={{ marginBottom: "3rem" }}>
            <UpgradePlanCard />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          alignSelf="flex-end"
          sx={{
            lineHeight: "2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "1rem" }}>
            {user?.creditsLeft} credits left
          </Typography>
          <LinearDeterminate value={credit} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
          <UserInfo />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          height: "6%",
          width: "15%",
          position: "absolute",
        }}
      >
        <MenuIcon />
      </IconButton>
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
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "25%",
              padding: "0 2rem",
            },
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
              padding: "0 3rem",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default LeftPane;
