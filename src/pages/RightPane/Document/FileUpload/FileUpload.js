import { Box, Grid, Input, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  CREATE_DOCUMENT_URL,
  DELETE_DOCUMENT_URL,
  GET_DOCUMENTS_URL,
} from "../../../../apis/apiRoutes";
import { PrimaryButton } from "../../../../components/Button/Button";
import Dialog from "../../../../components/Dialog/Dialog";
import Loader from "../../../../components/Loader/Loader";
import Table from "../../../../components/Table/Table";
import { TextBox } from "../../../../components/TextField/TextBox";
import { AppContext } from "../../../../context/AppContext";
import useFetch from "../../../../hooks/useFetch";
import { formatBytes, setUser } from "../../../../utils";
import { MODAL } from "../../../Constants";
import { StyledTypography } from "./FileUpload.styles";

const FileUpload = ({ handleScan }) => {
  const { control, handleSubmit } = useForm();
  const { loading, error, apiCall } = useFetch();
  const { setUserData } = useContext(AppContext);
  const [documentsData, setDocumentsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [documentId, setDocumentId] = useState("");
  const { id } = useParams();

  const getDocuments = async () => {
    const response = await apiCall(`${GET_DOCUMENTS_URL}?id=${id}&is_file=1`, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data?.length) setDocumentsData(response?.data);
    }
  };

  const rows = documentsData;

  const columns = [
    {
      label: "FILE",
      field: "name",
    },
    {
      label: "TYPE",
      field: "",
    },
    {
      label: "SIZE",
      field: "",
    },
    {
      label: "ACTIONS",
    },
  ];

  const handleOnSubmit = async (data) => {
    var reader = new FileReader();
    reader.readAsText(data.file);
    reader.onload = async (event) => {
      data.text = event.target.result;
      data.type = data.file.type;
      data.size = formatBytes(data.file.size);
      data.project = id;
      data.is_file = true;
      const response = await apiCall(`${CREATE_DOCUMENT_URL}`, {
        method: "post",
        data: data,
      });

      if (response?.status === 201) {
        setUserData(response?.data?.userData);
        setUser(response?.data?.userData);
        handleScan(response?.data?.document);
      }
    };
  };

  const handleOnDelete = (id) => {
    setDocumentId(id);
    setOpenModal(true);
  };

  const handleDelete = async () => {
    const response = await apiCall(`${DELETE_DOCUMENT_URL}/${documentId}`, {
      method: "delete",
    });

    if (response?.status === 200) {
      setOpenModal(false);
      getDocuments();
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(handleOnSubmit)} encType="multip">
        <Grid container spacing={4} sx={{ marginTop: "0px" }}>
          <Grid item xs={6}>
            <StyledTypography variant="body1" color="secondary.dark">
              Document Title
            </StyledTypography>
            <TextBox rounded control={control} name="name" />
          </Grid>
          <Grid item xs={6}>
            <StyledTypography variant="body1" color="secondary.dark">
              Document Author
            </StyledTypography>
            <TextBox rounded control={control} name="author" />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="file"
              render={({ field: { value, onChange, ...field } }) => {
                return (
                  <>
                    <Input
                      {...field}
                      value={value?.fileName}
                      onChange={(event) => {
                        onChange(event.target.files[0]);
                      }}
                      type="file"
                      id="file"
                      sx={{ display: "none" }}
                    />
                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "1.6rem",
                        height: "25rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="secondary.dark"
                        sx={{ lineHeight: "5rem" }}
                      >
                        Drag your file here. Accepted file types: .doc, .docx,
                        .txt
                      </Typography>

                      <PrimaryButton
                        label="Select File"
                        height="4rem"
                        onClick={() =>
                          document.querySelector('input[type="file"]').click()
                        }
                      />
                    </Box>
                  </>
                );
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "right" }}>
            <PrimaryButton type="submit" label="Scan Text" height="4rem" />
          </Grid>
        </Grid>
      </form>
      {documentsData?.length > 0 && (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="secondary">
              Documents
            </Typography>
            <Table rows={rows} columns={columns} onDelete={handleOnDelete} />
          </Grid>
        </Grid>
      )}
      {openModal && (
        <Dialog
          header={MODAL.DELETE_DOCUMENT}
          content={MODAL.DELETE_DOCUMENT_MESSAGE}
          open={openModal}
          onDelete={handleDelete}
          onClose={handleClose}
          isDelete={true}
        />
      )}
    </>
  );
};

export default FileUpload;
