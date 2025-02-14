"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
  Autocomplete,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
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
          <TextField
            placeholder="Nome della fase"
            className="phase-name"
            variant="outlined"
            fullWidth
          />{" "}
          <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label="Priorità" />}
          />
          {/* <Select defaultValue="" className="priority-select" displayEmpty>
            <MenuItem value="">Priorità</MenuItem>
            <MenuItem value="1">Alta</MenuItem>
            <MenuItem value="2">Media</MenuItem>
            <MenuItem value="3">Bassa</MenuItem>
          </Select> */}
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
