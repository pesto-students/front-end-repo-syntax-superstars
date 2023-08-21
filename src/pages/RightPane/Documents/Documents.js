import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DELETE_DOCUMENT_URL,
  EDIT_DOCUMENT_URL,
  GET_DOCUMENTS_URL,
} from "../../../apis/apiRoutes";
import Card from "../../../components/Card/Card";
import Chip from "../../../components/Chip/Chip";
import Dialog from "../../../components/Dialog/Dialog";
import Dropdown from "../../../components/Dropdown/Dropdown";
import IconButton from "../../../components/IconButton/IconButton";
import Loader from "../../../components/Loader/Loader";
import { SearchTextBox } from "../../../components/TextField/TextBox";
import { AppContext } from "../../../context/AppContext";
import useFetch from "../../../hooks/useFetch";
import { MODAL, ROUTES } from "../../Constants";
import { StyledTypography } from "./Documents.styles";

const Documents = () => {
  const { loading, apiCall } = useFetch();
  const [documentsData, setDocumentsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState("");
  const { setDocument, setProject } = useContext(AppContext);
  const navigate = useNavigate();

  const getDocuments = async (name = "", sort = "") => {
    const response = await apiCall(
      `${GET_DOCUMENTS_URL}?name=${name}&sort=${sort}`,
      {
        method: "get",
      }
    );
    if (response && response?.status === 200) {
      if (response?.data?.length > 0) {
        setDocumentsData(response?.data);
      }
    }
  };

  const handleClickOnDelete = (document) => {
    setOpenModal(true);
    setData(document);
  };

  const handleDelete = async () => {
    const response = await apiCall(`${DELETE_DOCUMENT_URL}/${data._id}`, {
      method: "delete",
    });

    if (response?.status === 200) {
      setOpenModal(false);
      setDocumentsData([]);
      getDocuments();
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setIsEditModalOpen(false);
  };

  const handleClickOnEdit = (document) => {
    setIsEditModalOpen(true);
    setData(document);
  };

  const handleEdit = async (name) => {
    const response = await apiCall(`${EDIT_DOCUMENT_URL}/${data._id}`, {
      method: "put",
      data: {
        name,
      },
    });

    if (response?.status === 200) {
      setIsEditModalOpen(false);
      getDocuments();
    }
  };

  const handleDocumentClick = (document) => {
    setDocument(document);
    setProject(document.projectData);
    const route = ROUTES.DOCUMENT_ROUTE;
    const path = route.split(/:([a-zA-Z]*)/);
    navigate(path[0] + document.project + path[2] + document._id);
  };

  const handleChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length >= 3 || event.target.value.length === 0) {
      getDocuments(event.target.value);
    }
  };

  const handleClick = (value) => {
    getDocuments(name, value);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Grid
        container
        alignItems="center"
        sx={{
          marginBottom: "2.5rem",
        }}
      >
        <Grid item xs={12} sx={{ mb: "2rem" }}>
          <SearchTextBox label="Type a document name" onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Dropdown handleItemClick={handleClick} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {documentsData &&
          documentsData.map((document, index) => (
            <Grid item key={`document=${index}`} xs={12} sm={4} md={3}>
              <Card
                styles={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardActionArea onClick={() => handleDocumentClick(document)}>
                  <CardHeader
                    title={
                      <Typography variant="subtitle1" color="secondary">
                        {document.name}
                      </Typography>
                    }
                  />
                  <Divider />
                  <CardContent sx={{ minHeight: "16rem" }}>
                    <StyledTypography variant="body1" color="secondary">
                      {document.text}
                    </StyledTypography>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Chip content={document?.projectData?.name} color="primary" />
                  <div>
                    <IconButton onClick={() => handleClickOnDelete(document)}>
                      <DeleteIcon color="error" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => handleClickOnEdit(document)}>
                      <EditIcon color="info" fontSize="large" />
                    </IconButton>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
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
      {isEditModalOpen && (
        <Dialog
          header={MODAL.RENAME_PROJECT}
          content={MODAL.RENAME_PROJECT_MESSAGE}
          open={isEditModalOpen}
          onEdit={handleEdit}
          onClose={handleClose}
          isEdit={true}
          value={data?.name}
        />
      )}
    </>
  );
};

export default Documents;
