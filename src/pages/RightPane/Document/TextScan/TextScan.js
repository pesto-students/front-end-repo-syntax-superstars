import { Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import TextArea from "../../../../components/Textarea/TextArea";
import { AppContext } from "../../../../context/AppContext";
import useFetch from "../../../../hooks/useFetch";
import { setUser } from "../../../../utils";
import { MODAL, ROUTES } from "../../../Constants";
import { StyledTypography } from "./TextScan.styles";

const TextScan = ({ handleScan }) => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const { loading, error, apiCall } = useFetch();
  const { setUserData, setDocument, state } = useContext(AppContext);
  const [documentsData, setDocumentsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [documentId, setDocumentId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { id, docId } = useParams();
  const navigate = useNavigate();

  const getDocuments = async () => {
    const response = await apiCall(
      `${GET_DOCUMENTS_URL}?id=${id}&is_file=false`,
      {
        method: "get",
      }
    );
    if (response && response?.status === 200) {
      if (response?.data?.length) setDocumentsData(response?.data);
    }
  };

  const getDocumentsByDocId = async () => {
    const response = await apiCall(`${GET_DOCUMENTS_URL}/${docId}`, {
      method: "get",
    });
    if (response && response?.status === 200) {
      if (response?.data) {
        setDocument(response?.data);
      }
    }
  };

  const getData = (documents) => {
    return documents.map((document) => ({
      ...document,
      plagPercent: document.reportData[0].plagPercent,
      humanPercent: document.reportData[0].uniquePercent,
    }));
  };

  const rows = getData(documentsData);

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
      field: "plagPercent",
    },
    {
      label: "HUMAN_SCORE",
      field: "humanPercent",
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
    if (documentsData.length === 0) {
      getDocuments();
    }
    if (docId) {
      getDocumentsByDocId();
    }
  }, [docId]);

  useEffect(() => {
    if (state?.document && state?.document?.is_file === false) {
      setValue("name", state?.document?.name);
      setValue("author", state?.document?.author);
      setValue("text", state?.document?.text);
    }

    return () => {
      setDocument("");
    };
  }, [state?.document]);

  useEffect(() => {
    const text = watch("text");
    if (text) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [watch("text")]);

  const handleOnSubmit = async (values) => {
    values.project = id;
    const response = await apiCall(`${CREATE_DOCUMENT_URL}`, {
      method: "post",
      data: values,
    });

    if (response?.status === 201) {
      setUserData(response?.data?.user);
      setUser(response?.data?.user);
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

  const handleOnView = (documentId) => {
    const route = ROUTES.DOCUMENT_ROUTE;
    const path = route.split(/:([a-zA-Z]*)/);
    navigate(path[0] + id + path[2] + documentId);
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
            <PrimaryButton
              disabled={disabled}
              label="Scan Text"
              type="submit"
              height="4rem"
            />
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

export default TextScan;
