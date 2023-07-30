import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import logo from "../../images/logo.svg";
import { ButtonIcon, PrimaryButton } from "../../components/Button/Button";
import { TextBox } from "../../components/TextField/TextBox";
import { Link } from "react-router-dom";
import { ROUTES } from "../Constants";
import LandingPage from "../RightPane";

const Login = () => {
  const { REGISTER_ROUTE } = ROUTES;
  return (
    <LandingPage>
      <Grid item xs={12}>
        <TextBox label="Email"></TextBox>
      </Grid>
      <Grid item xs={12}>
        <TextBox label="Password"></TextBox>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked
              // onChange={handleChange}
              name="gilad"
            />
          }
          label="Remember me"
        />
      </Grid>
      <Grid item xs={12}>
        <PrimaryButton label="LOGIN" width="100%" height="50px" />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="">
          <Typography variant="body2" color="secondary.dark">
            Forget Password
          </Typography>
        </Link>
        <Link to={REGISTER_ROUTE}>
          <Typography variant="body2" color="secondary.dark">
            New User? Register
          </Typography>
        </Link>
      </Grid>
    </LandingPage>
  );
};

export default Login;
