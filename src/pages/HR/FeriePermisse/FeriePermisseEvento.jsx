import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../../component/header/Header";
import MenuTab from "../../../component/tabs/MenuTab";
import EventForm from "../../../component/EventForm/EventForm";

const FeriePermisseEvento = ({ Component }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <Header />
      <div className="pageTemplate evento">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <EventForm />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Box className="TemplateForm__right">
              <MenuTab onTabChange={handleTabChange} hrEvento={true} />
            </Box>
            {Component && <Component hrEvento={true} />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FeriePermisseEvento;
