import { Divider, Grid, Tab, Typography } from "@mui/material";
import React from "react";
import IconButton from "../../../components/IconButton/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { DOCUMENT } from "../../Constants";
import Tabs from "../../../components/Tabs/Tabs";
import TextScan from "./TextScan/TextScan";
import Result from "./Result/Result";
import FileUpload from "./FileUpload/FileUpload";

const Document = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabView = (value) => {
    switch (value) {
      case 1:
        return <FileUpload />;
      case 2:
        return <Result />;
      default:
        return <TextScan />;
    }
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="subtitle1" color="secondary.dark">
            Title
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <IconButton color="secondary">
            <AddCircleIcon />
          </IconButton>
          <IconButton color="secondary">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid container>
        <Grid item xs={12}>
          <Tabs value={value} handleChange={handleChange}>
            {DOCUMENT.tabsData.map((tab) => (
              <Tab
                icon={tab.icon()}
                label={tab.label}
                iconPosition="start"
                sx={{ minHeight: "55px", fontWeight: 700 }}
              />
            ))}
          </Tabs>
          {getTabView(value)}
        </Grid>
      </Grid>
    </>
  );
};

export default Document;
