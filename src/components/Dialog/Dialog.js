import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Dialog as MuiDialog } from "@mui/material/";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Dialog({
  open,
  header,
  content,
  isEdit,
  isDelete,
  onDelete,
  onClose,
  onEdit,
  value,
}) {
  const [name, setName] = useState(value);

  return (
    <div>
      <MuiDialog open={open} onClose={onClose}>
        <DialogTitle>{header}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {isEdit && (
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="title"
              fullWidth
              variant="standard"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined" color="text">
            Cancel
          </Button>
          {isEdit && (
            <Button
              onClick={() => onEdit(name)}
              variant="contained"
              color="info"
            >
              Rename
            </Button>
          )}
          {isDelete && (
            <Button onClick={onDelete} variant="contained" color="error">
              Delete
            </Button>
          )}
        </DialogActions>
      </MuiDialog>
    </div>
  );
}

export default Dialog;
