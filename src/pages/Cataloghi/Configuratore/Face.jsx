"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
  Autocomplete,
  Grid,
} from "@mui/material";
import { ReactComponent as Delete } from "../../../assets/deleterRow.svg";
import "./Face.scss";
const options = [
  { label: "Alta", value: "Alta" },
  { label: "Media", value: "Media" },
  { label: "Bassa", value: "Bassa" },
];

export default function Face({ id, onDelete }) {
  return (
    <Paper
      className="phase-form phaseAutoCpmplete"
      style={{ backgroundColor: "#f3f3f3" }}
      elevation={0}
    >
      <Box className="form-content">
        <Box className="top-row">
          <Grid container spacing={1}>
            <Grid item md={10} sm={12}>
              <TextField
                label="Nome della fase"
                className="phase-name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={2} sm={12}>
              <TextField
                label="Priorità"
                className="phase-name"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <IconButton className="delete-button" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </Box>

        <TextField
          placeholder="Descrizione"
          className="description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
      </Box>
    </Paper>
  );
}
