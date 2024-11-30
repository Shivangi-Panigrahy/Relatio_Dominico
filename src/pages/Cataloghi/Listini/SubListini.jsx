import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../../component/header/Header";
import MenuTab from "../../../component/tabs/MenuTab";
import ListiniForm from "./ListiniForm";
// import SearchField from "../../component/filter/SearchField.jsx";
const SubListini = ({ Component }) => {

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <ListiniForm />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Box className="TemplateForm__right">
              <MenuTab sublistini={true} />
            </Box>
            {Component && <Component acquisti_agenda={true} />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SubListini;
