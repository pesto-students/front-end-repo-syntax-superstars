import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
  EDIT_PROJECT_URL,
} from "../../../apis/apiRoutes";
import Card from "../../../components/Card/Card";
import Chip from "../../../components/Chip/Chip";
import Dialog from "../../../components/Dialog/Dialog";
import IconButton from "../../../components/IconButton/IconButton";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { getTime, getUser } from "../../../utils";
import { MODAL, ROUTES } from "../../Constants";
import { StyledCardContent } from "./Project.styles";

const ProjectList = ({ projectsData, getProjects }) => {
  const { setProject, setDocument } = useContext(AppContext);
  const { loading, error, apiCall } = useFetch();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();

  const user = getUser();

  const createProject = async () => {
    const response = await apiCall(CREATE_PROJECT_URL, {
      method: "post",
    });
    if (response?.status === 201) {
      setProject(response?.data);
      const route = ROUTES.PROJECT_ROUTE;
      const path = route.split(":")[0];
      navigate(path + response?.data?._id);
    }
  };

  const handleClick = () => {
    createProject();
  };

  const handleProjectClick = (project) => {
    setProject(project);
    const route = ROUTES.PROJECT_ROUTE;
    const path = route.split(":")[0];
    navigate(path + project._id);
  };

  const handleClickOnDelete = (project) => {
    setOpenModal(true);
    setData(project);
  };

  const handleDelete = async () => {
    const response = await apiCall(`${DELETE_PROJECT_URL}/${data._id}`, {
      method: "delete",
    });

    if (response?.status === 200) {
      setOpenModal(false);
      getProjects();
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setIsEditModalOpen(false);
  };

  const handleClickOnEdit = (project) => {
    setIsEditModalOpen(true);
    setData(project);
  };

  const handleEdit = async (name) => {
    const response = await apiCall(`${EDIT_PROJECT_URL}/${data._id}`, {
      method: "put",
      data: {
        name,
      },
    });

    if (response?.status === 200) {
      setIsEditModalOpen(false);
      getProjects();
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Card
            styles={{
              backgroundColor: "primary.main",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20rem",
              "&.MuiCard-root > a": { textDecoration: "none" },
            }}
            onClick={handleClick}
          >
            <CardActionArea
              onClick={handleClick}
              disableRipple
              disableTouchRipple
            >
              <StyledCardContent>
                <AddCircleIcon fontSize="large" />
                <Typography variant="subtitle2">New Project</Typography>
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {projectsData &&
          projectsData.map((project, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <Card
                styles={{
                  height: "100%",
                  "&.MuiCard-root > a": { textDecoration: "none" },
                }}
              >
                <CardActionArea onClick={() => handleProjectClick(project)}>
                  <CardHeader
                    title={
                      <Typography variant="subtitle1" color="secondary">
                        {project.name}
                      </Typography>
                    }
                  />
                  <Divider />
                  <CardContent sx={{ minHeight: "4.5rem" }}>
                    <Typography variant="body1" color="secondary">
                      {project.totalDocuments}{" "}
                      {project.totalDocuments === 1 ? "document" : "documents"}
                    </Typography>
                  </CardContent>
                  <Divider />
                </CardActionArea>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Chip content={getTime(project.createdAt)} color="primary" />
                  <div>
                    <IconButton onClick={() => handleClickOnDelete(project)}>
                      <DeleteIcon color="error" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => handleClickOnEdit(project)}>
                      <EditIcon color="info" fontSize="large" />
                    </IconButton>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
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
      {isEditModalOpen && (
        <Dialog
          header={MODAL.RENAME_PROJECT}
          content={MODAL.RENAME_PROJECT_MESSAGE}
          open={isEditModalOpen}
          onEdit={handleEdit}
          onClose={handleClose}
          isEdit={true}
          value={data?.name}
        />
      )}
    </>
  );
};

export default ProjectList;
