import React from "react";
import Navbar from "./layouts/Navbar";
import { Box, Container } from "@mui/material";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <Home />
    </Box>
  );
};

export default App;
