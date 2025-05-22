import React from "react";
import UpperNav from "../components/UpperNav";
import LowerNav from "../components/LowerNav";
import { Box } from "@mui/material";
const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <UpperNav />
      <LowerNav />
    </Box>
  );
};

export default Navbar;
