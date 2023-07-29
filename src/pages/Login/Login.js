import React from "react";
import { Box, Checkbox, Divider, Grid } from "@mui/material";
import logo from "../../images/logo.svg";
import { ButtonIcon } from "../../components/Button/Button";
import { TextBox } from "../../components/TextField/TextBox";

const Login = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ backgroundColor: "primary.main" }}></Grid>
      <Grid
        item
        xs={6}
        container
        sx={{ padding: "100px" }}
        justifyContent="center"
      >
        <img src={logo} alt="logo" />
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          sx={{ marginTop: "30px" }}
        >
          <ButtonIcon label="Google" />
          <ButtonIcon label="Guest User" />
        </Grid>
        <Divider sx={{ width: "100%", margin: "25px 0" }}>OR</Divider>
        <Grid item xs={12} container rowSpacing={2}>
          <Grid item xs={12}>
            <TextBox label="Email"></TextBox>
          </Grid>
          <Grid item xs={12}>
            <TextBox label="Password"></TextBox>
          </Grid>
          <Checkbox label="Remember me"></Checkbox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
