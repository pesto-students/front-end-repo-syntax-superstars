import {
  Alert,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../apis/apiRoutes";
import { PrimaryButton } from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { TextBox } from "../../components/TextField/TextBox";
import { AppContext } from "../../context/AppContext";
import useFetch from "../../hooks/useFetch";
import { setUser } from "../../utils";
import Auth from "../Auth";
import { ROUTES } from "../Constants";

const Login = () => {
  const { REGISTER_ROUTE } = ROUTES;
  const [checked, setChedcked] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { control, handleSubmit, setValue } = useForm({});
  const { loading, error, apiCall } = useFetch();
  const { setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOnSubmit = async (data) => {
    const response = await apiCall(LOGIN_URL, {
      method: "post",
      data,
    });
    if (response?.status === 200) {
      if (response?.data?.error || response?.data?.message) {
        setErrorMessage(response?.data?.message);
        setErrorMessage(response?.data?.error);
      } else {
        setUser(response?.data);
        setUserData(response?.data);
        navigate(ROUTES.DASHBOARD_ROUTE);
      }
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Auth setValue={setValue}>
          <Grid item xs={12}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
              label="Password"
              name="password"
              control={control}
              type="password"
              required
            ></TextBox>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChedcked(!checked)}
                />
              }
              label="Remember me"
            />
          </Grid>
          <Grid item xs={12}>
            <PrimaryButton
              label="LOGIN"
              width="100%"
              height="50px"
              type="submit"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="">
              <Typography
                variant="body2"
                color="secondary.dark"
                sx={{ display: "none" }}
              >
                Forget Password
              </Typography>
            </Link>
            <Link to={REGISTER_ROUTE}>
              <Typography variant="body2" color="secondary.dark">
                New User? Register
              </Typography>
            </Link>
          </Grid>
        </Auth>
      </form>
    </>
  );
};

export default Login;
