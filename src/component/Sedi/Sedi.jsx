import React from "react";
import { Box, TextField, Grid, MenuItem, Button } from "@mui/material";
import "./Sedi.scss";
import AddIcon from "@mui/icons-material/Add";

const Sedi = () => {
  return (
    <Box className="sediContent">
      <Grid item xs={5} md={4}>
        <label className="sediContent__title">Tipo di azienda</label>
        <TextField
          label="Nome della sede"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Indirizzo"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <TextField
              label="Cap"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              label="Prov."
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="Regione"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9}>
            <TextField
              label="Nazione"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="UE"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
          <Button className="aggiungi_btn" startIcon={<AddIcon />}>
            Aggiungi
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Sedi;
