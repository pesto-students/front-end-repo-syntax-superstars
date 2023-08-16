import React from "react";
import { Controller } from "react-hook-form";
import { InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TextBox = ({
  name,
  control,
  label,
  rounded,
  required,
  type,
  hidden,
  pattern,
}) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: required,
      pattern: pattern,
    }}
    render={({
      field: { onChange, value },
      fieldState: { error },
      formState,
    }) => (
      <TextField
        helperText={
          <Typography variant="body1">
            {error ? error.message : null}
          </Typography>
        }
        error={!!error}
        onChange={onChange}
        value={value}
        type={type}
        fullWidth
        hiddenLabel
        placeholder={label}
        variant="outlined"
        hidden={hidden}
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
            ...(rounded && {
              borderRadius: "30px",
              border: "2px solid #F5F6F7",
            }),
          },
          ".Mui-error": {
            marginLeft: "unset",
          },
        }}
      />
    )}
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
