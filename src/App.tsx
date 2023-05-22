import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Setup with: https://levelup.gitconnected.com/lets-setup-a-react-typescript-project-with-material-ui-react-router-3d7ea8cb5596

function App() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
