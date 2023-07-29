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
import Dropdown from "../../../components/Dropdown/Dropdown";
import { SearchTextBox } from "../../../components/TextField/TextBox";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants";

const Documents = () => {
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
          <SearchTextBox label="Type a document name" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Dropdown title="Sort by Date Created" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
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
                  <>
                    <Typography variant="subtitle1" color="secondary">
                      {" "}
                      Untitled
                    </Typography>
                    <Typography variant="body2" color="secondary">
                      Anonymous
                    </Typography>
                  </>
                }
              />
              <Divider />
              <CardContent>
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
            <CardContent>
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
            <CardContent>
              <Typography variant="body1" color="secondary">
                In literary theory, a text is any object that can be "read",
                whether this object is a work of literature, a street sign, an
                arrangement of buildings on a city block, or styles of clothing.
                It is a coherent set of signs that transmits some kind of
                informative message.[1] This set of signs is considered in terms
                of the informative message's content, rather than in terms...
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Chip content="untitled" color="primary" />
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

export default Documents;
