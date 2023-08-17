import { Alert, Avatar, Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { EDIT_PROFILE_URL, UPLOAD_PIC_URL } from "../../../apis/apiRoutes";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Loader from "../../../components/Loader/Loader";
import { TextBox } from "../../../components/TextField/TextBox";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { getUser, setUser } from "../../../utils";
import ChangePassword from "./ChangePassword";
import { StyledGrid } from "./Profile.styles";

const Profile = () => {
  const { control, handleSubmit, setValue } = useForm({});
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);

  const { loading, error, apiCall } = useFetch();

  const { setUserData } = useContext(AppContext);

  const user = getUser();

  const handleOnSubmit = async (data) => {
    data.profilePic = imageUrl;
    const response = await apiCall(`${EDIT_PROFILE_URL}/${user._id}`, {
      method: "put",
      data,
    });
    if (response.status === 200) {
      if (response?.data?.message) {
        setMessage(response?.data?.message);
        setUserData(response?.data?.user);
        setUser(response?.data?.user);
      }
    } else {
      console.log(error);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await apiCall(UPLOAD_PIC_URL, {
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const user = getUser();
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("email", user.email);
  }, [setValue]);

  return (
    <>
      {loading && <Loader />}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3" color="secondary.main">
            Profile Information
          </Typography>
          <Typography variant="body1" color="secondary.dark">
            Update your account’s profile information and email address
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Card styles={{ padding: "2rem 2rem 1rem 2rem" }}>
              {message && (
                <Alert severity="success" sx={{ marginBottom: "1rem" }}>
                  {message}
                </Alert>
              )}
              <StyledGrid item xs={12}>
                <Avatar alt="Profile Pic" src={imageUrl} />
                <input
                  type="file"
                  ref={fileInputRef}
                  hidden
                  onChange={handleUpload}
                />
                <SecondaryButton
                  onClick={() => fileInputRef.current.click()}
                  label="Upload"
                ></SecondaryButton>
              </StyledGrid>
              <StyledGrid item xs={12}>
                <Typography variant="subtitle2" color="text.main">
                  First Name
                </Typography>
                <TextBox
                  label="First Name"
                  name="firstName"
                  control={control}
                  required
                ></TextBox>
              </StyledGrid>
              <StyledGrid item xs={12}>
                <Typography variant="subtitle2" color="text.main">
                  Last Name
                </Typography>
                <TextBox
                  label="Last Name"
                  name="lastName"
                  control={control}
                  required
                ></TextBox>
              </StyledGrid>
              <StyledGrid item xs={12}>
                <Typography variant="subtitle2" color="text.main">
                  Email
                </Typography>
                <TextBox
                  label="Email"
                  name="email"
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
      <Divider sx={{ margin: "2rem 0" }}></Divider>
      <ChangePassword />
    </>
  );
};

export default Profile;
