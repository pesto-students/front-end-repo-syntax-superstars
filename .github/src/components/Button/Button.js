import React from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledButtonIcon } from "./Button.styles";

const PrimaryButton = ({ label, height, width }) => (
  <Button
    variant="contained"
    color="primary"
    sx={{ height: height, width: width }}
  >
    {label}
  </Button>
);

const SecondaryButton = ({ label }) => (
  <Button variant="outlined">{label}</Button>
);

const SmallButton = ({ label, height }) => (
  <Button
    variant="contained"
    color="primary"
    size="small"
    sx={{ height: height }}
  >
    {label}
  </Button>
);

const ButtonIcon = ({ label, ...rest }) => (
  <StyledButtonIcon
    variant="outlined"
    startIcon={<AccountCircleIcon />}
    {...rest}
  >
    {label}
  </StyledButtonIcon>
);

export { PrimaryButton, SecondaryButton, SmallButton, ButtonIcon };
