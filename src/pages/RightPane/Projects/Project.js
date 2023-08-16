import { Grid } from "@mui/material";
import { React, useEffect, useState } from "react";
import { GET_PROJECTS_URL } from "../../../apis/apiRoutes";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Loader from "../../../components/Loader/Loader";
import { SearchTextBox } from "../../../components/TextField/TextBox";
import useFetch from "../../../hooks/useFetch";
import { getUser } from "../../../utils";
import ProjectList from "./ProjectList";

const Project = () => {
  const { loading, error, apiCall } = useFetch();
  const [projectsData, setProjectsData] = useState([]);
  const [name, setName] = useState("");

  const user = getUser();

  const getProjects = async (name = "", sort = "") => {
    const response = await apiCall(
      `${GET_PROJECTS_URL}?name=${name}&sort=${sort}`,
      {
        method: "get",
      }
    );
    setProjectsData(response?.data);
  };

  const handleChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length > 3) {
      getProjects(event.target.value);
    }
  };

  const handleClick = (value) => {
    getProjects(name, value);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Grid
        container
        alignItems="center"
        sx={{
          marginBottom: "2.5rem",
        }}
      >
        <Grid item xs={12} sx={{ mb: "2rem" }}>
          <SearchTextBox label="Search by name" onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Dropdown handleItemClick={handleClick} />
        </Grid>
      </Grid>
      <ProjectList projectsData={projectsData} getProjects={getProjects} />
    </>
  );
};

export default Project;
