// LoginPage.js
import React from "react";
import { Box } from "@mui/material";
import Logo from "./logo";
import WelcomeSection from "./WelcomeSection";
import Background from "../../../assets/authBg/Background.svg";
import NewImage from "../../../assets/authBg/Animated.svg";
import "./Login.scss";

const AuthLayout = ({ Component }) => (
  <Box
    sx={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Logo />

    <Box
      className="loginTemplate"
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box className="templateWelcome">
        <WelcomeSection />
      </Box>

      <Box className="templateForm">
        {/* Render the passed component here */}
        {Component && <Component />}
      </Box>
    </Box>
  </Box>
);

export default AuthLayout;
