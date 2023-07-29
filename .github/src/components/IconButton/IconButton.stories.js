import React from "react";
import IconButton from "./IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default {
  title: "IconButton",
  component: IconButton,
};

export const DeleteIconButton = () => (
  <IconButton color="error">
    <DeleteIcon />
  </IconButton>
);

export const EditIconButton = () => (
  <IconButton color="info">
    <EditIcon />
  </IconButton>
);
export const AddIconButton = () => (
  <IconButton color="secondary">
    <AddCircleIcon />
  </IconButton>
);