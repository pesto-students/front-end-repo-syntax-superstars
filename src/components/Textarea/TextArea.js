import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextArea = ({ name, control, label, error, required, ...rest }) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: required,
    }}
    render={({
      field: { onChange, value },
      fieldState: { error },
      formState,
    }) => (
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
            border: "none",
            borderRadius: "15px",
            height: "300px",
          },
          height: "300px",
        }}
        {...rest}
        multiline
        rows={10}
      />
    )}
  />
);

export default TextArea;
