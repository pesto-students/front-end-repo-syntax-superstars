import { CardActions, CardContent, Grid, Typography } from "@mui/material";
import Card from "../../../components/Card/Card";
import { PrimaryButton } from "../../../components/Button/Button";

const Plans = () => {
  const plan = {
    title: "Essential",
    monthly_amount: "$12",
    yearly_amount: "$144",
    description: "Text...",
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h4" color="secondary">
          Choose the Plan That Works For You
        </Typography>
        <Typography variant="h6" color="secondary.light">
          Advanced Features and no hidden pricing
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card styles={{ padding: "16px" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", mb: "18px", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.monthly_amount}/month
              </Typography>
              <Typography
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.main"
              >
                Billed {plan.yearly_amount}/year
              </Typography>
              <Typography sx={{ mt: "24px" }}>{plan.description}</Typography>
            </CardContent>
            <CardActions>
              <PrimaryButton label="Get started" width="100%" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card styles={{ padding: "16px" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", mb: "18px", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.monthly_amount}/month
              </Typography>
              <Typography
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.main"
              >
                Billed {plan.yearly_amount}/year
              </Typography>
              <Typography sx={{ mt: "24px" }}>{plan.description}</Typography>
            </CardContent>
            <CardActions>
              <PrimaryButton label="Get started" width="100%" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card styles={{ padding: "16px" }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", mb: "18px", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.title"
              >
                {plan.monthly_amount}/month
              </Typography>
              <Typography
                sx={{ textAlign: "center", fontWeight: "bold" }}
                color="text.main"
              >
                Billed {plan.yearly_amount}/year
              </Typography>
              <Typography sx={{ mt: "24px" }}>{plan.description}</Typography>
            </CardContent>
            <CardActions>
              <PrimaryButton label="Get started" width="100%" />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Plans;
