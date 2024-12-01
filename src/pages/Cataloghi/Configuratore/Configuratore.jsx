import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../../component/header/Header";
import MenuTab from "../../../component/tabs/MenuTab";
import ConfigureForm from "./ConfigureForm";
// import SearchField from "../../component/filter/SearchField.jsx";
const Configuratore = ({ Component }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab); 
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <ConfigureForm />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Box className="TemplateForm__right">
              <MenuTab onTabChange={handleTabChange} configuratore={true} />
            </Box>
            {Component && <Component  />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Configuratore;
