import {
  Alert,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CREATE_SESSION_URL,
  EDIT_PROFILE_URL,
  GET_PLANS_URL,
} from "../../../apis/apiRoutes";
import { PrimaryButton } from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Loader from "../../../components/Loader/Loader";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import {
  getUpgragePlan,
  getUser,
  setUpgragePlan,
  setUser,
} from "../../../utils";

const Plans = () => {
  const { loading, error, apiCall } = useFetch();
  const [plansData, setPlansData] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserData } = useContext(AppContext);
  const { value } = useParams();

  const user = getUser();

  const getPlans = async () => {
    const response = await apiCall(GET_PLANS_URL, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data?.length > 0) {
        setPlansData(response?.data);
      }
    }
  };

  const updatePlan = async (user) => {
    const response = await apiCall(`${EDIT_PROFILE_URL}/${user._id}`, {
      method: "put",
      data: user,
    });
    if (response.status === 200) {
      if (response?.data?.message) {
        setUserData(response?.data?.user);
        setUser(response?.data?.user);
      }
      return true;
    } else {
      console.log(error);
    }
  };

  const handleClick = async (plan) => {
    setUpgragePlan(plan);
    const response = await apiCall(CREATE_SESSION_URL, {
      method: "post",
      data: {
        price_id: plan.price_id,
      },
    });

    if (response?.status === 200) {
      if (response) {
        window.location.href = response?.data?.url;
      }
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  useEffect(() => {
    if (value === "success") {
      setMessage("Congratualtions! Successfully Upgrade the Plan.");
      const plan = getUpgragePlan();
      user.plan = plan._id;
      user.creditsLeft = plan.credits;
      updatePlan(user);
    }

    if (value === "canceled") {
      setErrorMessage("Sorry! Subscription Canceled.");
    }
  }, [value]);

  return (
    <>
      {loading && <Loader />}
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "4rem" }}>
          <Typography variant="h3" color="secondary">
            Choose the Plan That Works For You
          </Typography>
          <Typography variant="h6" color="secondary.light">
            Advanced Features and no hidden pricing
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
          {message && <Alert severity="success">{message}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </Grid>
        <Grid item container spacing={4}>
          {plansData &&
            plansData.map((plan, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={`plan-${index}`}
                sx={{ marginBottom: "2rem" }}
              >
                <Card
                  styles={{
                    padding: "1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        mb: "1.8rem",
                        fontWeight: "bold",
                      }}
                      color="text.title"
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                      color="text.title"
                    >
                      ${plan.monthly_rate}/month
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                      color="text.main"
                    >
                      Billed ${plan.yearly_rate}/year
                    </Typography>
                    <Typography
                      sx={{ mt: "2.4rem", fontWeight: 700, lineHeight: "2rem" }}
                      color="text.main"
                      variant="body2"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: plan.description }}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions onClick={() => handleClick(plan)}>
                    <PrimaryButton
                      label="Get started"
                      width="100%"
                      height="4rem"
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Plans;
