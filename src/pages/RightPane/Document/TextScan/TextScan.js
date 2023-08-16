import { Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import TextArea from "../../../../components/Textarea/TextArea";
import { AppContext } from "../../../../context/AppContext";
import useFetch from "../../../../hooks/useFetch";
import { setUser } from "../../../../utils";
import { MODAL } from "../../../Constants";
import { StyledTypography } from "./TextScan.styles";

const TextScan = ({ handleScan }) => {
  const { control, handleSubmit } = useForm();
  const { loading, error, apiCall } = useFetch();
  const { setUserData } = useContext(AppContext);
  const [documentsData, setDocumentsData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [documentId, setDocumentId] = useState("");
  const { id } = useParams();

  const getDocuments = async () => {
    const response = await apiCall(`${GET_DOCUMENTS_URL}?id=${id}&is_file=0`, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data?.length) setDocumentsData(response?.data);
    }
  };

  const rows = documentsData;

  const columns = [
    {
      label: "TITLE",
      field: "name",
    },
    {
      label: "AUTHOR",
      field: "author",
    },
    {
      label: "WORDS",
      field: "words_count",
    },
    {
      label: "PALGIARISM",
      field: "",
    },
    {
      label: "HUMAN_SCORE",
      field: "",
    },
    {
      label: "LANGUAGE",
      field: "language",
    },
    {
      label: "ACTIONS",
      field: "",
    },
  ];

  useEffect(() => {
    if (!documentsData) {
      getDocuments();
    }
  }, [documentsData]);

  const handleOnSubmit = async (values) => {
    values.project = id;
    const response = await apiCall(`${CREATE_DOCUMENT_URL}`, {
      method: "post",
      data: values,
    });

    if (response?.status === 201) {
      setUserData(response?.data?.userData);
      setUser(response?.data?.userData);
      handleScan(response?.data?.document);
    }
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
            <TextArea control={control} name="text" />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "right" }}>
            <PrimaryButton label="Scan Text" type="submit" height="4rem" />
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

export default TextScan;
