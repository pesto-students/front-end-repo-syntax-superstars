import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GOOGLE_LOGIN_URL } from "../apis/apiRoutes";
import { ButtonIcon } from "../components/Button/Button";
import { AppContext } from "../context/AppContext";
import useFetch from "../hooks/useFetch";
import googleLogo from "../images/google_logo.svg";
import logo from "../images/logo.svg";
import { getUser, setUser } from "../utils";
import { ROUTES } from "./Constants";

const Auth = ({ children, setValue }) => {
  const { apiCall } = useFetch();
  const navigate = useNavigate();
  const { state, setUserData } = useContext(AppContext);
  const [responseData, setResponse] = useState();

  const user = getUser();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          },
        }
      );
      const response = await apiCall(GOOGLE_LOGIN_URL, {
        method: "post",
        data: res.data,
      });

      setResponse(response);
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
    },
  });

  const handleClick = () => {
    setValue("email", "test@pestoproject.com");
    setValue("password", "123456");
  };

  useEffect(() => {
    if (responseData?.status === 200) {
      setUserData(user);
      setUser(responseData?.data);
      if (state?.user) {
        navigate(ROUTES.DASHBOARD_ROUTE);
      }
    }
  }, [responseData, state, user]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        sm={6}
        xs={12}
        container
        sx={{ backgroundColor: "primary.main" }}
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
      >
        <Typography variant="h3" color="white">
          Start scanning for free
        </Typography>
        <List dense>
          <ListItem>
            <Typography color="white" sx={{ fontWeight: 700 }}>
              <CheckIcon sx={{ marginBottom: "-10px" }} />
              No credit cards required
            </Typography>
          </ListItem>
          <ListItem>
            <Typography color="white" sx={{ fontWeight: 700 }}>
              <CheckIcon sx={{ marginBottom: "-10px" }} />
              Scan up to 2,000 words for free
            </Typography>
          </ListItem>
          <ListItem>
            <Typography color="white" sx={{ fontWeight: 700 }}>
              <CheckIcon sx={{ marginBottom: "-10px" }} />
              Access the world's most reliable AI content detection tool
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        sx={{ padding: "0 120px" }}
        justifyContent="center"
        alignContent="center"
      >
        <img src={logo} alt="logo" />
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          sx={{ marginTop: "30px" }}
          columnSpacing={2}
        >
          <Grid item xs={6}>
            <ButtonIcon
              label="Google"
              icon={<img src={googleLogo} alt="google" />}
              onClick={login}
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonIcon
              label="Guest User"
              icon={
                <AccountCircleIcon sx={{ fontSize: "3.5rem !important" }} />
              }
              onClick={handleClick}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider
            sx={{ width: "100%", alignItems: "center", margin: "20px 0" }}
          >
            <Typography color="secondary.dark" variant="h6">
              OR
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Auth;
