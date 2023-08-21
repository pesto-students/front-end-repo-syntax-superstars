import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
    h3: {
      fontSize: "2.4rem",
      fontWeight: 900,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h6: {
      fontWeight: "bold",
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1.4rem",
    },
    subtitle2: {
      fontSize: "1.6rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.8rem",
      fontWeight: 900,
    },
    button: {
      textTransform: "capitalize",
    },
  },
});
