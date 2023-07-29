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
import { StyledCardContent } from "./Dashboard.styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginBottom: "25px",
        }}
      >
        <Grid item>
          <Typography variant="h5" color="secondary.main">
            Latest Projects
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            color="secondary.dark"
            sx={{ display: "flex" }}
          >
            All Projects
            <ChevronRightIcon />
          </Typography>
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
            }}
          >
            <StyledCardContent>
              <AddCircleIcon />
              <Typography variant="h6">New Project</Typography>
            </StyledCardContent>
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

export default Dashboard;
