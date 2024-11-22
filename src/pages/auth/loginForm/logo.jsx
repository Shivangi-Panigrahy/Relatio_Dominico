import React from "react";
import { Box } from "@mui/material";
import relatioLogo from "../../../assets/Logo/Logo.svg";

const Logo = () => (
  <Box sx={{ position: "absolute", top: "66px", left: "40px", zIndex: "9" }}>
    <img src={relatioLogo} alt="Relatio Logo" style={{ height: "40px" }} />
  </Box>
);

export default Logo;
