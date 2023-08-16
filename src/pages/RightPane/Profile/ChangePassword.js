import { Alert, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CHANGE_PASSWORD_URL } from "../../../apis/apiRoutes";
import { PrimaryButton } from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { TextBox } from "../../../components/TextField/TextBox";
import useFetch from "../../../hooks/useFetch";
import { getUser } from "../../../utils";
import { StyledGrid } from "./Profile.styles";

const ChangePassword = () => {
  const { control, handleSubmit, setValue } = useForm({});

  const { loading, error, apiCall } = useFetch();
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const user = getUser();

  const handleOnSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Password and Confirm password don't match.");
      setMessage("");
    } else {
      const response = await apiCall(`${CHANGE_PASSWORD_URL}/${user._id}`, {
        method: "put",
        data,
      });
      if (response.status === 200) {
        if (response?.data?.message) {
          setMessage(response?.data?.message);
          setErrorMessage("");
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h3" color="secondary.main">
          Set Password
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          Ensure your account is using a long, random password to stay secure.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Card styles={{ padding: "2rem 2rem 1rem 2rem" }}>
            {message && <Alert severity="success">{message}</Alert>}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <StyledGrid item xs={12}>
              <Typography variant="subtitle2" color="text.main">
                Password
              </Typography>
              <TextBox
                type="password"
                label="Password"
                name="password"
                control={control}
                required
              ></TextBox>
            </StyledGrid>
            <StyledGrid item xs={12}>
              <Typography variant="subtitle2" color="text.main">
                Confirm Password
              </Typography>
              <TextBox
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                control={control}
                required
              ></TextBox>
            </StyledGrid>
            <StyledGrid item xs={12}>
              <PrimaryButton
                type="submit"
                label="Save"
                height="4rem"
                width="20%"
              />
            </StyledGrid>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
