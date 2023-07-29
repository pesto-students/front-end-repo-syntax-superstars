import {
  Box,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Card from "../../../components/Card/Card";
import Dropdown from "../../../components/Dropdown/Dropdown";

const Usage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ padding: "50px" }}>
            <Typography
              variant="h5"
              color="secondary"
              sx={{ lineHeight: "30px" }}
            >
              Usage
            </Typography>
            <Typography variant="body1" color="secondary.dark">
              Monthly credtis remaining: 1800
            </Typography>
            <Typography variant="body1" color="secondary.dark">
              Top up credits remaining: 0
            </Typography>
            <Box sx={{ padding: "35px 0", textAlign: "center" }}>
              <Dropdown title="JUNE 2023" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Usage;
