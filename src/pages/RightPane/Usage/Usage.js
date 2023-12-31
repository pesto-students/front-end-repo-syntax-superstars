import { Box, CardContent, Grid, Typography } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GET_USAGE_URL } from "../../../apis/apiRoutes";
import Card from "../../../components/Card/Card";
import Loader from "../../../components/Loader/Loader";
import useFetch from "../../../hooks/useFetch";
import { getUser } from "../../../utils";

const Usage = () => {
  const { loading, error, apiCall } = useFetch();
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()));

  const user = getUser();

  const getDocuments = async (date) => {
    const response = await apiCall(`${GET_USAGE_URL}/${date}`, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data?.length > 0) {
        setData(response?.data);
      } else {
        setData("");
      }
    }
  };

  const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    getDocuments(date.format("YYYY-MM"));
  };

  useEffect(() => {
    getDocuments(selectedDate.format("YYYY-MM"));
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Grid container>
        <Grid item xs={12}>
          <Card styles={{ height: "100%" }}>
            <CardContent sx={{ padding: "5rem", height: "60%" }}>
              <Typography
                variant="h5"
                color="secondary"
                sx={{ lineHeight: "3rem" }}
              >
                Usage
              </Typography>
              <Typography variant="body1" color="secondary.dark">
                Monthly credtis remaining: {user?.creditsLeft}
              </Typography>
              <Typography
                variant="body1"
                color="secondary.dark"
                sx={{ display: "none" }}
              >
                Top up credits remaining: 0
              </Typography>
              <Box sx={{ padding: "3.5rem 0", textAlign: "center" }}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    views={["month", "year"]}
                    onChange={(newDate) => handleChange(moment(newDate))}
                    value={selectedDate}
                  />
                </LocalizationProvider>
              </Box>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="_id"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                    tickFormatter={dateFormatter}
                  />
                  <YAxis
                    label={{
                      value: "Daily Words Usage",
                      angle: -90,
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="count" fill="#3361FA" name="words count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Usage;
