import {
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Card from "../../../components/Card/Card";
import Chip from "../../../components/Chip/Chip";
import IconButton from "../../../components/IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledCardContent } from "./Project.styles";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { SearchTextBox } from "../../../components/TextField/TextBox";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{
          marginBottom: "25px",
        }}
      >
        <Grid item xs={12} sx={{ mb: "20px" }}>
          <SearchTextBox label="Search by name" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Dropdown title="Sort by Date Created" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          <Card
            styles={{
              backgroundColor: "primary.main",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&.MuiCard-root > a": { textDecoration: "none" },
            }}
          >
            <Link to="/document">
              <StyledCardContent>
                <AddCircleIcon />
                <Typography variant="h6">New Project</Typography>
              </StyledCardContent>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card
            styles={{
              height: "100%",
              "&.MuiCard-root > a": { textDecoration: "none" },
            }}
          >
            <Link to="/document">
              <CardHeader
                title={
                  <Typography variant="subtitle1" color="secondary">
                    {" "}
                    Untitled
                  </Typography>
                }
              />
              <Divider />
              <CardContent sx={{ minHeight: "45px" }}>
                <Typography variant="body1" color="secondary">
                  2 documents
                </Typography>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Chip content="1 week ago" color="primary" />
                <div>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton>
                    <EditIcon color="info" />
                  </IconButton>
                </div>
              </CardActions>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card
            styles={{
              height: "100%",
              "&.MuiCard-root > a": { textDecoration: "none" },
            }}
          >
            <CardHeader
              title={
                <Typography variant="subtitle1" color="secondary">
                  {" "}
                  Untitled
                </Typography>
              }
            />
            <Divider />
            <CardContent sx={{ minHeight: "45px" }}>
              <Typography variant="body1" color="secondary">
                2 documents
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Chip content="1 week ago" color="primary" />
              <div>
                <IconButton>
                  <DeleteIcon color="error" />
                </IconButton>
                <IconButton>
                  <EditIcon color="info" />
                </IconButton>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card styles={{ height: "100%" }}>
            <CardHeader
              title={
                <Typography variant="subtitle1" color="secondary">
                  {" "}
                  Untitled
                </Typography>
              }
            />
            <Divider />
            <CardContent sx={{ minHeight: "45px" }}>
              <Typography variant="body1" color="secondary">
                2 documents
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Chip content="1 week ago" color="primary" />
              <div>
                <IconButton>
                  <DeleteIcon color="error" />
                </IconButton>
                <IconButton>
                  <EditIcon color="info" />
                </IconButton>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
