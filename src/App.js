import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes";
import Dashboard from "./pages/RightPanel/Dashboard/Dashboard";
import LeftSidebar from "./pages/LeftSidebar/LeftSidebar";
import Project from "./pages/RightPanel/Projects/Project";
import Documents from "./pages/RightPanel/Documents/Documents";
import Usage from "./pages/RightPanel/Usage/Usage";
import Plans from "./pages/RightPanel/Plans/Plans";
import Login from "./pages/Login/Login";

const App = () => {
  const loggedIn = true;
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
          {loggedIn ? (
            <>
              <LeftSidebar />
              <Box
                sx={{
                  width: "100%",
                  padding: "30px 60px",
                  backgroundColor: "backgroundColor",
                }}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/usage" element={<Usage />} />
                  <Route path="/plans" element={<Plans />} />
                  {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
              </Box>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
