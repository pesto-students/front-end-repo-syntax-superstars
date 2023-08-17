import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GET_PLANS_URL } from "../../../apis/apiRoutes";
import Card from "../../../components/Card/Card";
import Loader from "../../../components/Loader/Loader";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { getUser } from "../../../utils";
import { ROUTES } from "../../Constants";
import { StyledCardContent } from "./UserInfo.styles";

const UserInfo = () => {
  const { loading, error, apiCall } = useFetch();
  const { setUserData, setPlan, state } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const user = getUser();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserData({});
    setAnchorEl(null);
    navigate(ROUTES.LOGIN_ROUTE);
  };

  const getPlanDetail = async () => {
    const response = await apiCall(`${GET_PLANS_URL}/${user?.plan}`, {
      method: "get",
    });

    if (response?.status === 200) {
      setPlan(response?.data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlanDetail();
  }, []);

  const dropdown = () => {
    return (
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          horizontal: 120,
          vertical: 180,
        }}
      >
        <MenuItem onClick={handleClose} disableRipple disabled>
          Manage Account
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <Link to={ROUTES.PROFILE_ROUTE} style={{ textDecoration: "unset" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <Typography variant="body1" color="text.title">
              Profile
            </Typography>
          </MenuItem>
        </Link>
        <Link to={ROUTES.PLAN_ROUTE} style={{ textDecoration: "unset" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <Typography variant="body1" color="text.title">
              Upgrade Plan
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleLogout} disableRipple>
          <Typography variant="body1" color="text.title">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <>
      {loading && <Loader />}
      <Card>
        <StyledCardContent sx={{ backgroundColor: "info.light" }}>
          <Grid container justifyContent="space-between">
            <Grid item container xs={11} justifyContent="flex-start">
              <Grid item xs={3}>
                <Avatar variant="square" src={user?.profilePic}></Avatar>
              </Grid>
              <Grid
                item
                container
                xs={8}
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography variant="body1" color="black">
                  {`${user?.firstName} ${user?.lastName}`}
                </Typography>
                <Typography variant="body2" color="info.dark">
                  {state?.plan?.name} Plan
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} alignSelf="center">
              <KeyboardArrowDownIcon onClick={handleClick} />
            </Grid>
          </Grid>
        </StyledCardContent>
      </Card>
      {anchorEl && dropdown()}
    </>
  );
};

export default UserInfo;
