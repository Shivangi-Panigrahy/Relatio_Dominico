'use client'

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
} from '@mui/material'
import { CloudUpload, Delete } from '@mui/icons-material'
import './Colori.scss'

export default function Colori({ id, onDelete }) {
  return (
    <Paper className="color-form" elevation={0}>
      {/* File Upload */}
      <Box className="upload-box">
        <input
          type="file"
          id="file-upload"
          className="file-input"
          hidden
        />
        <label htmlFor="file-upload" className="upload-label">
          <CloudUpload className="upload-icon" />
          <div className="upload-text">Upload file</div>
        </label>
      </Box>

      {/* Color Selection */}
      <Select
        defaultValue="l"
        className="color-select"
      >
        <MenuItem value="l">Colore</MenuItem>
        <MenuItem value="1">Color 1</MenuItem>
        <MenuItem value="2">Color 2</MenuItem>
      </Select>

      {/* Color Name */}
      <TextField
        placeholder="Rosso"
        className="color-name"
        variant="outlined"
      />

      {/* Price Markup */}
      <TextField
        placeholder="Magg. sul prezzo di listino"
        className="price-markup"
        variant="outlined"
      />

      {/* Phase Selection */}
      <Select
        defaultValue=""
        className="phase-select"
        displayEmpty
      >
        <MenuItem value="">Fase</MenuItem>
        <MenuItem value="1">Fase 1</MenuItem>
        <MenuItem value="2">Fase 2</MenuItem>
      </Select>

      {/* Category Selection */}
      <Select
        defaultValue=""
        className="category-select"
        displayEmpty
      >
        <MenuItem value="">Categoria</MenuItem>
        <MenuItem value="1">Categoria 1</MenuItem>
        <MenuItem value="2">Categoria 2</MenuItem>
      </Select>

      {/* Delete Button */}
      <IconButton className="delete-button" onClick={() => onDelete(id)} >
        <Delete />
      </IconButton>
    </Paper>
  )
}

