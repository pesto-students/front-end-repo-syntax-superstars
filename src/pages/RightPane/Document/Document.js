import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Grid, Tab, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
} from "../../../apis/apiRoutes";
import Dialog from "../../../components/Dialog/Dialog";
import IconButton from "../../../components/IconButton/IconButton";
import Loader from "../../../components/Loader/Loader";
import Tabs from "../../../components/Tabs/Tabs";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { DOCUMENT, MODAL, ROUTES } from "../../Constants";
import FileUpload from "./FileUpload/FileUpload";
import Result from "./Result/Result";
import TextScan from "./TextScan/TextScan";

const Document = () => {
  const [value, setValue] = useState(0);
  const [tabsData, setTabsData] = useState(DOCUMENT.tabsData);
  const { state, setProject } = useContext(AppContext);
  const { loading, error, apiCall } = useFetch();
  const [openModal, setOpenModal] = useState(false);
  const { docId } = useParams();

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createProject = async () => {
    const response = await apiCall(CREATE_PROJECT_URL, {
      method: "post",
    });
    if (response?.status === 201) {
      setProject(response?.data);
    }
  };

  const handleScan = (document) => {
    tabsData[tabsData.length - 1].show = true;
    setValue(2);
    const route = ROUTES.DOCUMENT_ROUTE;
    const path = route.split(/:([a-zA-Z]*)/);
    navigate(path[0] + document.project._id + path[2] + document._id);
  };

  const handleAddClick = () => {
    createProject();
  };

  const getTabView = (value) => {
    switch (value) {
      case 1:
        return <FileUpload handleScan={handleScan} />;
      case 2:
        return <Result />;
      default:
        return <TextScan handleScan={handleScan} />;
    }
  };

  const handleDelete = async () => {
    const response = await apiCall(
      `${DELETE_PROJECT_URL}/${state?.project?._id}`,
      {
        method: "delete",
      }
    );

    if (response?.status === 200) {
      setOpenModal(false);
      navigate(ROUTES.PROJECTS_ROUTE);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (docId === undefined) {
      tabsData[tabsData.length - 1].show = false;
    } else {
      tabsData[tabsData.length - 1].show = true;
    }
    setTabsData(tabsData);
  }, [docId, tabsData]);

  return (
    <>
      {loading && <Loader />}
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="subtitle1" color="secondary.dark">
            {state?.project?.name}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <IconButton color="secondary" onClick={handleAddClick}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <IconButton color="secondary" onClick={() => setOpenModal(true)}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid container>
        <Grid item xs={12}>
          <Tabs value={value} handleChange={handleChange}>
            {tabsData.map((tab, index) => (
              <Tab
                key={`tab-${index}`}
                icon={tab.icon()}
                label={tab.label}
                iconPosition="start"
                sx={{
                  minHeight: "5.5rem",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  paddingLeft: "unset",
                }}
                disabled={tab.show === false}
              />
            ))}
          </Tabs>
          {getTabView(value)}
        </Grid>
      </Grid>
      {openModal && (
        <Dialog
          header={MODAL.DELETE_PROJECT}
          content={MODAL.DELETE_PROJECT_MESSAGE}
          open={openModal}
          onDelete={handleDelete}
          onClose={handleClose}
          isDelete={true}
        />
      )}
    </>
  );
};

export default Document;
