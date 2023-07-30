import React from "react";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { PrimaryButton } from "../../components/Button/Button";
import { TextBox } from "../../components/TextField/TextBox";
import { Link } from "react-router-dom";
import LandingPage from "../RightPane";
import { ROUTES } from "../Constants";

const Registration = () => {
  const { LOGIN_ROUTE } = ROUTES;
  return (
    <LandingPage>
      <Grid item xs={6}>
        <TextBox label="First Name"></TextBox>
      </Grid>
      <Grid item xs={6}>
        <TextBox label="Last Name"></TextBox>
      </Grid>
      <Grid item xs={12}>
        <TextBox label="Email"></TextBox>
      </Grid>
      <Grid item xs={12}>
        <TextBox label="Password"></TextBox>
      </Grid>
      <Grid item xs={12}>
        <TextBox label="Confirm Password"></TextBox>
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
          label="I agree to the Terms of Service and Privacy Policy"
        />
      </Grid>
      <Grid item xs={12}>
        <PrimaryButton label="REGISTER" width="100%" height="50px" />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={LOGIN_ROUTE}>
          <Typography variant="body2" color="secondary.dark">
            Already registred?
          </Typography>
        </Link>
      </Grid>
    </LandingPage>
  );
};

export default Registration;
