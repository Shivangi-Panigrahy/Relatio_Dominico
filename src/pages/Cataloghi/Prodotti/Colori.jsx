"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
} from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";
import "./Colori.scss";

export default function Colori({ id, onDelete }) {
  return (
    <Paper
      className="color-form"
      elevation={0}
      style={{ padding: "0", gap: "5px" }}
    >
      {/* File Upload */}
      <div className="dimention_box_container">
        <Box className="upload-box">
          <input type="file" id="file-upload" className="file-input" hidden />
          <label
            htmlFor="file-upload"
            className="upload-label"
            style={{ flexDirection: "row" }}
          >
            <CloudUpload
              className="upload-icon"
              style={{ marginBottom: "0" }}
            />
            <div className="upload-text">Upload file</div>
          </label>
        </Box>
      </div>

      {/* Color Selection */}
      <div className="dimention_box_container">
        <Select
          defaultValue="l"
          className="color-select custom_padding"
          style={{ width: "100%" }}
        >
          <MenuItem value="l">Colore</MenuItem>
          <MenuItem value="1">Color 1</MenuItem>
          <MenuItem value="2">Color 2</MenuItem>
        </Select>
      </div>

      {/* Color Name */}
      <div className="dimention_box_container">
        <TextField
          placeholder="Rosso"
          className="color-name custom_padding"
          variant="outlined"
        />
      </div>

      {/* Price Markup */}
      <div className="dimention_box_container">
        <TextField
          placeholder="Magg. sul prezzo di listino"
          className="price-markup custom_padding"
          variant="outlined"
        />
      </div>

      {/* Phase Selection */}
      <div className="dimention_box_container">
        <Select
          defaultValue=""
          className="phase-select custom_padding"
          displayEmpty
          style={{ width: "100%" }}
        >
          <MenuItem value="">Fase</MenuItem>
          <MenuItem value="1">Fase 1</MenuItem>
          <MenuItem value="2">Fase 2</MenuItem>
        </Select>
      </div>

      {/* Category Selection */}
      <div className="dimention_box_container">
        <Select
          defaultValue=""
          className="category-select custom_padding"
          displayEmpty
          style={{ width: "100%" }}
        >
          <MenuItem value="">Categoria</MenuItem>
          <MenuItem value="1">Categoria 1</MenuItem>
          <MenuItem value="2">Categoria 2</MenuItem>
        </Select>
      </div>

      {/* Delete Button */}
      <div className="dimention_box_container">
        <IconButton className="delete-button" onClick={() => onDelete(id)}>
          <Delete />
        </IconButton>
      </div>
    </Paper>
  );
}
