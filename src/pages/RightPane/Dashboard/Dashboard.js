import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_LATEST_PROJECTS_URL } from "../../../apis/apiRoutes";
import Loader from "../../../components/Loader/Loader";
import useFetch from "../../../hooks/useFetch";
import { ROUTES } from "../../Constants";
import ProjectList from "../Projects/ProjectList";

const Dashboard = () => {
  const { loading, error, apiCall } = useFetch();
  const [projectsData, setProjectsData] = useState([]);

  const getLatestProjects = async () => {
    const response = await apiCall(GET_LATEST_PROJECTS_URL, {
      method: "get",
    });
    setProjectsData(response?.data);
  };

  useEffect(() => {
    getLatestProjects();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginBottom: "2.5rem",
          marginTop: "7.5rem",
        }}
      >
        <Grid item>
          <Typography variant="h5" color="secondary.main">
            Latest Projects
          </Typography>
        </Grid>
        <Grid item>
          <Link to={ROUTES.PROJECTS_ROUTE} style={{ textDecoration: "unset" }}>
            <Typography
              variant="body1"
              color="secondary.dark"
              sx={{ display: "flex", alignItems: "center" }}
            >
              All Projects
              <ChevronRightIcon />
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <ProjectList
        projectsData={projectsData}
        getProjects={getLatestProjects}
      />
    </>
  );
};

export default Dashboard;
