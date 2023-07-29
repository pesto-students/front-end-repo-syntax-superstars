import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledCardContent } from "./UserInfo.styles";
import Card from "../../../components/Card/Card";

const UserInfo = () => {
  return (
    <Card>
      <StyledCardContent sx={{ backgroundColor: "info.light" }}>
        <Grid container justifyContent="space-between">
          <Grid item container sm={11} justifyContent="flex-start">
            <Grid item sm={3}>
              <Avatar sx={{ bgcolor: "secondary.main" }} variant="square">
                A
              </Avatar>
            </Grid>
            <Grid
              item
              container
              sm={8}
              flexDirection="column"
              justifyContent="space-around"
            >
              <Typography variant="body1" color="black">
                Archana Rangrej
              </Typography>
              <Typography variant="body2" color="info.dark">
                Trial Plan
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={1} alignSelf="center">
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
      </StyledCardContent>
    </Card>
  );
};

export default UserInfo;
