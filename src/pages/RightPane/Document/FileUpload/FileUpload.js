import { Box, Grid, Typography } from "@mui/material";
import { TextBox } from "../../../../components/TextField/TextBox";
import TextArea from "../../../../components/Textarea/TextArea";
import { PrimaryButton } from "../../../../components/Button/Button";
import Table from "../../../../components/Table/Table";
import { StyledTypography } from "./FileUpload.styles";

const FileUpload = () => {
  const createData = (file, type, size, actions) => {
    return { file, type, size, actions };
  };

  const rows = [
    createData("Frozen yoghurt", "untitled", 6, "24%"),
    createData("Ice cream sandwich", "untitled", 9, "37%"),
  ];

  const columns = [
    {
      label: "FILE",
    },
    {
      label: "TYPE",
    },
    {
      label: "SIZE",
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
        <Grid item xs={12} sx={{ position: "relative" }}>
          <TextArea />
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              top: "40%",
              left: "30%",
            }}
          >
            <Typography
              variant="body1"
              color="secondary.dark"
              sx={{ lineHeight: "50px" }}
            >
              Drag your file here. Accepted file types: .doc, .docx, .txt
            </Typography>
            <PrimaryButton label="Select File" height="40px" />
          </Box>
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

export default FileUpload;
