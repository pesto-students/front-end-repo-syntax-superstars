import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_REPORT_URL } from "../../../../apis/apiRoutes";
import Card from "../../../../components/Card/Card";
import Loader from "../../../../components/Loader/Loader";
import { CircularDeterminate } from "../../../../components/Progress/Progress";
import useFetch from "../../../../hooks/useFetch";
import { getUser } from "../../../../utils";
import { StyledTypography } from "./Result.styles";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginBottom: "2rem",
};

const cardStyle = {
  padding: "2rem",
  margin: "5rem 0",
  height: "70%",
};

const Result = () => {
  const { docId } = useParams();
  const { loading, error, apiCall } = useFetch();
  const [reportData, setReportData] = useState();

  const user = getUser();

  const getReport = async () => {
    const response = await apiCall(`${GET_REPORT_URL}/${docId}`, {
      method: "get",
    });

    if (response?.status === 200) {
      setReportData(response?.data[0]);
    }
  };

  const getColor = (percent) => {
    if (percent >= 50) return "success";
    else if (percent < 25) return "error";
    else return "warning";
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card styles={cardStyle}>
            <CardContent>
              <Box sx={boxStyle}>
                <CircularDeterminate
                  value={reportData?.uniquePercent}
                  color={getColor(reportData?.uniquePercent)}
                />
                <Typography
                  variant="h4"
                  color="text.title"
                  sx={{ position: "absolute" }}
                >
                  {reportData?.uniquePercent}%
                </Typography>
              </Box>
              <Typography variant="subtitle2" color="text.title">
                Human Score
              </Typography>
              <StyledTypography variant="body2" color="text.main">
                <CheckCircleOutlineSharpIcon />
                IntelliPlagiarismAI has detected the text as
                {reportData?.uniquePercent}% human.
              </StyledTypography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card styles={cardStyle}>
            <CardContent>
              <Box sx={boxStyle}>
                <CircularDeterminate
                  value={reportData?.plagPercent}
                  color={getColor(reportData?.plagPercent)}
                />
                <Typography
                  variant="h4"
                  color="text.title"
                  sx={{ position: "absolute" }}
                >
                  {reportData?.plagPercent}%
                </Typography>
              </Box>
              <Typography variant="subtitle2" color="text.title">
                Plagiarism
              </Typography>
              <StyledTypography variant="body2" color="text.main">
                <CheckCircleOutlineSharpIcon />
                IntelliPlagiarismAI has detected the text as{" "}
                {reportData?.plagPercent}% plagiarised.
              </StyledTypography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card styles={cardStyle}>
            <CardContent>
              <Box sx={boxStyle}>
                <CircularDeterminate
                  value={reportData?.readabilityScore}
                  color={getColor(reportData?.readabilityScore)}
                />
                <Typography
                  variant="h4"
                  color="text.title"
                  sx={{ position: "absolute" }}
                >
                  {reportData?.readabilityScore}
                </Typography>
              </Box>
              <Typography variant="subtitle2" color="text.title">
                Readability Score
              </Typography>
              <StyledTypography variant="body2" color="text.main">
                <CheckCircleOutlineSharpIcon />
                This text has a readability score of{" "}
                {reportData?.readabilityScore}/100.
              </StyledTypography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
