"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./Nomefase.scss";

export default function Nomefase({ id, onDelete }) {
  return (
    <Paper
      className="phase-form"
      style={{ backgroundColor: "#f3f3f3" }}
      elevation={0}
    >
      <Box className="form-content customFormContent">
        <Box className="top-row">
          <TextField
            id="outlined-basic"
            label="Nome della fase"
            variant="outlined"
            className="category-name-select"
            fullWidth
            style={{ marginRight: "16px" }}
          />
          <FormControl className="top-row">
            <Box className='category-name-select'>
            <InputLabel id="category-select-label">Priorità</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              label="Fase (es. Trasformazioni in mosto)"
              className="phase-select"
            >
              <MenuItem value="0">Priorità</MenuItem>
              <MenuItem value="1">Priorità</MenuItem>
              <MenuItem value="2">Priorità</MenuItem>
            </Select>
            </Box>
          </FormControl>

          <IconButton className="delete-button" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </Box>
      <Box className='className="top-row"'>
        <TextField
          placeholder="Descrizione"
          className="description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        </Box>
      </Box>
    </Paper>
  );
}
