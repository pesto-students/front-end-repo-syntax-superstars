import React from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledButtonIcon } from "./Button.styles";
import { Typography } from "@mui/material";

const PrimaryButton = ({ label, height, width }) => (
  <Button
    variant="contained"
    color="primary"
    sx={{ height: height, width: width }}
  >
    <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
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
    color="secondary"
  >
    {label}
  </StyledButtonIcon>
);

export { PrimaryButton, SecondaryButton, SmallButton, ButtonIcon };
