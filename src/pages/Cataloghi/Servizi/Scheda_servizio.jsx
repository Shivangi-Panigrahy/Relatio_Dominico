import React from "react";
import ImageGallery from "../../../component/ImageGallery/ImageGallery";
import PreventivoTextEditor from "../../InvoicePage/PreventivoTextEditor";
import { Box, Grid } from "@mui/material";
import "./Servizi.scss";

const Scheda_servizio = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Text Editors */}
        <Grid item xs={12} md={8} className="main_texteditor_container">
          <Box sx={{ marginBottom: "6px" }}>
            <PreventivoTextEditor />
          </Box>
          <Box>
            <PreventivoTextEditor />
          </Box>
        </Grid>

        {/* Image Gallery */}
        <Grid item xs={12} md={4}>
          <ImageGallery />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scheda_servizio;
