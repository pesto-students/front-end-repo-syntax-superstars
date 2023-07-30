import React from "react";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonIcon } from "../components/Button/Button";
import logo from "../images/logo.svg";

const RightPane = ({ children }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
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
        xs={6}
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
            <ButtonIcon label="Google" />
          </Grid>
          <Grid item xs={6}>
            <ButtonIcon label="Guest User" />
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

export default RightPane;
