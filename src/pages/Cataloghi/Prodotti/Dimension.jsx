'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { CloudUpload, Add, Delete } from '@mui/icons-material';
import './Dimension.scss';
import SubDimensions from './SubDimensions';

export default function Dimension({ id, onDelete }) {
  const [subDimensions, setSubDimensions] = useState([]); // Array to track SubDimensions

  const handleAddSubDimension = () => {
    setSubDimensions((prev) => [...prev, { id: Date.now() }]); // Add a new SubDimension with a unique ID
  };

  const handleDeleteSubDimension = (subId) => {
    setSubDimensions((prev) => prev.filter((item) => item.id !== subId)); // Remove the SubDimension with the given ID
  };

  return (
    <div className="dimension-form-wrapper">
      <Paper className="dimension-form" elevation={0}>
        <Box className="form-row">
          {/* File Upload */}
          <Box className="upload-box">
            <input type="file" id="file-upload" className="file-input" hidden />
            <label htmlFor="file-upload" className="upload-label">
              <CloudUpload className="upload-icon" />
              <div className="upload-text">Upload file</div>
            </label>
          </Box>

          {/* Form Controls */}
          <Select defaultValue="" className="form-select" displayEmpty>
            <MenuItem value="">Dimensioni</MenuItem>
            <MenuItem value="1">Dimensione 1</MenuItem>
            <MenuItem value="2">Dimensione 2</MenuItem>
          </Select>

          <TextField
            placeholder="Nome dell'opzione (Due ante)"
            className="option-name"
            variant="outlined"
            fullWidth
          />

          <Select defaultValue="" className="form-select" displayEmpty>
            <MenuItem value="">Fase</MenuItem>
            <MenuItem value="1">Fase 1</MenuItem>
            <MenuItem value="2">Fase 2</MenuItem>
          </Select>

          <Select defaultValue="" className="form-select" displayEmpty>
            <MenuItem value="">Categoria</MenuItem>
            <MenuItem value="1">Categoria 1</MenuItem>
            <MenuItem value="2">Categoria 2</MenuItem>
          </Select>

          <IconButton className="delete-button" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </Box>

        {/* Measurements Row */}
        <Box className="measurements-row">
          {/* Width Section */}
          <Box className="measurement-section">
            <Select defaultValue="mm" className="unit-select">
              <MenuItem value="mm">mm</MenuItem>
              <MenuItem value="cm">cm</MenuItem>
            </Select>

            <TextField
              placeholder="Larghezza (1234)"
              className="dimension-input"
              variant="outlined"
            />

            <Select defaultValue="" className="range-select" displayEmpty>
              <MenuItem value="">Min</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
            </Select>

            <Select defaultValue="" className="range-select" displayEmpty>
              <MenuItem value="">Max</MenuItem>
              <MenuItem value="1000">1000</MenuItem>
              <MenuItem value="2000">2000</MenuItem>
            </Select>

            <FormControlLabel
              control={<Checkbox />}
              label="fissa"
              className="fixed-checkbox"
            />
          </Box>

          {/* Height Section */}
          <Box className="measurement-section">
            <Select defaultValue="mm" className="unit-select">
              <MenuItem value="mm">mm</MenuItem>
              <MenuItem value="cm">cm</MenuItem>
            </Select>

            <TextField
              placeholder="Altezza (1234)"
              className="dimension-input"
              variant="outlined"
            />

            <Select defaultValue="" className="range-select" displayEmpty>
              <MenuItem value="">Min</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
            </Select>

            <Select defaultValue="" className="range-select" displayEmpty>
              <MenuItem value="">Max</MenuItem>
              <MenuItem value="1000">1000</MenuItem>
              <MenuItem value="2000">2000</MenuItem>
            </Select>

            <FormControlLabel
              control={<Checkbox />}
              label="fissa"
              className="fixed-checkbox"
            />
          </Box>
        </Box>
      </Paper>

      {/* Dynamically Rendered SubDimensions */}
      {subDimensions.map((sub) => (
        <SubDimensions
          key={sub.id}
          id={sub.id}
          onDelete={handleDeleteSubDimension}
        />
      ))}

      {/* Add SubDimension Button */}
      <Button
        startIcon={<Add />}
        className="add-section-button"
        variant="outlined"
        onClick={handleAddSubDimension}
      >
        Aggiungi sezione
      </Button>
    </div>
  );
}
