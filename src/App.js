import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
