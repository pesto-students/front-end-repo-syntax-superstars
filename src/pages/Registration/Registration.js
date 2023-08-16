import {
  Alert,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../../apis/apiRoutes";
import { PrimaryButton } from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { TextBox } from "../../components/TextField/TextBox";
import useFetch from "../../hooks/useFetch";
import Auth from "../Auth";
import { ROUTES } from "../Constants";

const Registration = () => {
  const { LOGIN_ROUTE } = ROUTES;
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const { control, handleSubmit } = useForm({});

  const { loading, error, apiCall } = useFetch();

  const handleOnSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Password and Confirm password don't match.");
      setMessage("");
    } else {
      const response = await apiCall(SIGNUP_URL, {
        method: "post",
        data,
      });

      if (response?.status === 200) {
        setMessage(response?.data?.message);
      } else {
        setErrorMessage(error);
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Auth>
          <Grid item xs={12}>
            {message && <Alert severity="success">{message}</Alert>}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </Grid>
          <Grid item xs={6}>
            <TextBox
              label="First Name"
              name="firstName"
              control={control}
              required
            ></TextBox>
          </Grid>
          <Grid item xs={6}>
            <TextBox
              label="Last Name"
              name="lastName"
              control={control}
              required
            ></TextBox>
          </Grid>
          <Grid item xs={12}>
            <TextBox
              label="Email"
              name="email"
              control={control}
              required
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              }}
            ></TextBox>
          </Grid>
          <Grid item xs={12}>
            <TextBox
              type="password"
              label="Password"
              name="password"
              control={control}
              required
            ></TextBox>
          </Grid>
          <Grid item xs={12}>
            <TextBox
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              control={control}
              required
            ></TextBox>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value={agree}
                  onChange={() => setAgree(!agree)}
                  required={"You must accept the terms"}
                />
              }
              label="I agree to the Terms of Service and Privacy Policy"
            />
          </Grid>
          <Grid item xs={12}>
            <PrimaryButton
              type="submit"
              label="REGISTER"
              width="100%"
              height="50px"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link to={LOGIN_ROUTE}>
              <Typography variant="body2" color="secondary.dark">
                Already registred?
              </Typography>
            </Link>
          </Grid>
        </Auth>
      </form>
    </>
  );
};

export default Registration;
