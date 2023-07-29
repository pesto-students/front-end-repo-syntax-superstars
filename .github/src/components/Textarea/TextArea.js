import React from "react";
import { TextField } from "@mui/material";

const TextArea = ({ onChange, label, value, error }) => (
  <TextField
    helperText={error ? error.message : null}
    error={!!error}
    onChange={onChange}
    value={value}
    fullWidth
    hiddenLabel
    placeholder={label}
    variant="outlined"
    sx={{
      '.MuiOutlinedInput-notchedOutline': {
        boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
        border: "none",
        borderRadius: "15px",
      }
    }}
    multiline
    rows={10}
  />
);


export default TextArea;