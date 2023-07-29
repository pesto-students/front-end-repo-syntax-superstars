import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3361FA",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7C8AA6",
      dark: "#99A6BF",
      light: "#C3CAD9",
    },
    error: {
      main: "#CC1414",
    },
    info: {
      main: "#008CCC",
      dark: "#369FFF",
      light: "#EBF5FF",
    },
    sucess: {
      main: "#00B211",
    },
    warning: {
      main: "#FFCB33",
      light: "#FFD559",
    },
    text: {
      main: "#7D8FB3",
      title: "#4D5E80",
    },
    progress: {
      main: "#29CC39",
    },
    white: "#FFFFFF",
    black: "#000000",
    borderColor: "#EDEFF2",
    backgroundColor: "#FAFBFC",
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: "bold",
      fontSize: "1rem",
    },
    body2: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "14px",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 700,
      textDecorationLine: "underline",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 900,
    },
    button: {
      textTransform: "capitalize",
    },
  },
});
