import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { StyledButtonIcon } from "./Button.styles";

const PrimaryButton = ({ label, height, width, ...rest }) => (
  <Button
    variant="contained"
    color="primary"
    sx={{ height: height, width: width }}
    {...rest}
  >
    <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
  </Button>
);

const SecondaryButton = ({ label, ...rest }) => (
  <Button
    variant="outlined"
    color="secondary"
    size="large"
    sx={{ fontWeight: 700, marginTop: "1rem" }}
    {...rest}
  >
    {label}
  </Button>
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

const ButtonIcon = ({ label, icon, ...rest }) => (
  <StyledButtonIcon
    variant="outlined"
    startIcon={icon}
    {...rest}
    color="secondary"
  >
    <Typography variant="subtitle2">{label}</Typography>
  </StyledButtonIcon>
);

export { ButtonIcon, PrimaryButton, SecondaryButton, SmallButton };
