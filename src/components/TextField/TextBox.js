import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TextBox = ({ onChange, label, value, error, rounded }) => (
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
      ".MuiOutlinedInput-notchedOutline": {
        boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
        ...(rounded && {
          borderRadius: "30px",
          border: "2px solid #F5F6F7",
        }),
      },
    }}
  />
);

const SearchTextBox = ({ onChange, label, value }) => (
  <TextField
    onChange={onChange}
    value={value}
    fullWidth
    hiddenLabel
    placeholder={label}
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    sx={{
      ".MuiOutlinedInput-notchedOutline": {
        borderRadius: "30px",
        boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
        border: "unset",
      },
    }}
  />
);

export { TextBox, SearchTextBox };
