import { Grid, Typography } from "@mui/material";
import { TextBox } from "../../../../components/TextField/TextBox";
import { PrimaryButton } from "../../../../components/Button/Button";
import TextArea from "../../../../components/Textarea/TextArea";
import Table from "../../../../components/Table/Table";
import { StyledTypography } from "./TextScan.styles";

const TextScan = () => {
  const createData = (
    title,
    author,
    words,
    plagiarism,
    human_score,
    language,
    actions
  ) => {
    return { title, author, words, plagiarism, human_score, language, actions };
  };

  const rows = [
    createData("Frozen yoghurt", "untitled", 6, "24%", "4%", "en"),
    createData("Ice cream sandwich", "untitled", 9, "37%", "4%", "en"),
    createData("Eclair", "untitled", 9, "37%", "4%", "en"),
  ];

  const columns = [
    {
      label: "TITLE",
    },
    {
      label: "AUTHOR",
    },
    {
      label: "WORDS",
    },
    {
      label: "PALGIARISM",
    },
    {
      label: "HUMAN_SCORE",
    },
    {
      label: "LANGUAGE",
    },
    {
      label: "ACTIONS",
    },
  ];
  return (
    <>
      <Grid container spacing={4} sx={{ marginTop: "0px" }}>
        <Grid item xs={6}>
          <StyledTypography variant="body1" color="secondary.dark">
            Document Title
          </StyledTypography>
          <TextBox rounded />
        </Grid>
        <Grid item xs={6}>
          <StyledTypography variant="body1" color="secondary.dark">
            Document Author
          </StyledTypography>
          <TextBox rounded />
        </Grid>
        <Grid item xs={12}>
          <TextArea />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <PrimaryButton label="Scan Text" height="40px" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="secondary">
            Documents
          </Typography>
          <Table rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </>
  );
};

export default TextScan;
