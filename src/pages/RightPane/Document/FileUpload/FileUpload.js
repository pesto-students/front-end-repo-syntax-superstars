import { Box, Grid, Input, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
import { MODAL, ROUTES } from "../../../Constants";
import { StyledTypography } from "./FileUpload.styles";

const FileUpload = ({ handleScan }) => {
  const { control, handleSubmit, setValue } = useForm();
  const { loading, error, apiCall } = useFetch();
  const { setUserData, setDocument, state } = useContext(AppContext);
  const [documentsData, setDocumentsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [documentId, setDocumentId] = useState("");
  const { id, docId } = useParams();
  const navigate = useNavigate();

  const getDocuments = async () => {
    const response = await apiCall(
      `${GET_DOCUMENTS_URL}?id=${id}&is_file=true`,
      {
        method: "get",
      }
    );
    if (response && response?.status === 200) {
      if (response?.data?.length) setDocumentsData(response?.data);
    }
  };

  const getDocumentsByDocId = async (id) => {
    const response = await apiCall(`${GET_DOCUMENTS_URL}/${id}`, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data) {
        setDocument(response?.data);
      }
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
      field: "file_type",
    },
    {
      label: "SIZE",
      field: "file_size",
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
        setUserData(response?.data?.user);
        setUser(response?.data?.user);
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

  const handleOnView = (documentId) => {
    const route = ROUTES.DOCUMENT_ROUTE;
    const path = route.split(/:([a-zA-Z]*)/);
    navigate(path[0] + id + path[2] + documentId);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (documentsData.length === 0) {
      getDocuments();
    }
    if (docId) {
      getDocumentsByDocId(docId);
    }
  }, [docId]);

  useEffect(() => {
    if (state?.document && state?.document?.is_file) {
      setValue("name", state?.document?.name);
      setValue("author", state?.document?.author);
    }
  }, [state?.document]);

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
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
            <Table
              rows={rows}
              columns={columns}
              onDelete={handleOnDelete}
              onView={handleOnView}
            />
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
