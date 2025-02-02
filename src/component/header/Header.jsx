import React from "react";
import {
  AppBar
} from "@mui/material";
import HeaderTop from "../header/HeaderTop";
import HeaderBelow from "../header/HeaderBelow";
const Header = () => {
  return (
    <AppBar
      className="dashboardHeader"
      position="static"
      color="transparent"
      elevation={0}
    >
     <HeaderTop />
     <HeaderBelow />
    </AppBar>
  );
};

export default Header;
