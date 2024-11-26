import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../../../component/header/Header";
import MenuTab from "../../../../component/tabs/MenuTab";
import { AddButton } from "../../../../component/button/AddButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AnagraficaForm from "../../../../component/AnagraficaForm/AnagraficaForm";
// import SearchField from "../../component/filter/SearchField.jsx";
const SubLead = ({ Component }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <AnagraficaForm />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Box className="TemplateForm__right">
              <MenuTab onTabChange={handleTabChange} lead={true} />
            </Box>
            {Component && <Component acquisti_agenda={true} />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SubLead;
