import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "./App.css";
import AppContextProvider from "./context/AppContext";
import AppRoutes from "./routes/Routes";
import { lightTheme } from "./themes";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="336396923163-5el2j6uf6drm80q192dc1tcahf92kbq7.apps.googleusercontent.com">
      <ThemeProvider theme={lightTheme}>
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
