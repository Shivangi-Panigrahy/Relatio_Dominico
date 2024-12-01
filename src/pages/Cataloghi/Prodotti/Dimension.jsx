"use client";

import React, { useState } from "react";
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
} from "@mui/material";
import { CloudUpload, Add, Delete } from "@mui/icons-material";
import "./Dimension.scss";
import SubDimensions from "./SubDimensions";

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
      <Paper
        className="dimension-form"
        style={{ padding: "0", marginBottom: "0" }}
        elevation={0}
      >
        <Box className="form-row">
          {/* File Upload */}
          <div className="dimention_box_container">
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
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: "5px",
              }}
            >
              <div className="dimention_box_container">
                {/* Form Controls */}
                <Select
                  defaultValue=""
                  className="form-select  custom_padding"
                  displayEmpty
                  style={{ width: "100%" }}
                >
                  <MenuItem value="">Dimensioni</MenuItem>
                  <MenuItem value="1">Dimensione 1</MenuItem>
                  <MenuItem value="2">Dimensione 2</MenuItem>
                </Select>
              </div>

              <div className="dimention_box_container">
                <TextField
                  placeholder="Nome dell'opzione (Due ante)"
                  variant="outlined"
                  style={{ width: "100%", backgroundColor: "#fff" }}
                  className="custom_padding"
                />
              </div>

              <div
                className="dimention_box_container"
                style={{ display: "flex", gap: "5px" }}
              >
                <Select
                  defaultValue=""
                  className="form-select custom_padding"
                  style={{ flex: "1" }}
                  displayEmpty
                >
                  <MenuItem value="">Fase</MenuItem>
                  <MenuItem value="1">Fase 1</MenuItem>
                  <MenuItem value="2">Fase 2</MenuItem>
                </Select>

                <Select
                  defaultValue=""
                  className="form-select custom_padding"
                  style={{ flex: "1" }}
                  displayEmpty
                >
                  <MenuItem value="">Categoria</MenuItem>
                  <MenuItem value="1">Categoria 1</MenuItem>
                  <MenuItem value="2">Categoria 2</MenuItem>
                </Select>
              </div>
            </div>
            {/* Measurements Row */}
            <Box
              className="measurements-row"
              style={{ display: "flex", gap: "5px" }}
            >
              <div className="dimention_box_container" style={{ flex: "1" }}>
                {/* Width Section */}
                <Box style={{ display: "flex", gap: "5px" }}>
                  <Select
                    defaultValue="mm"
                    className="unit-select custom_padding bg_white"
                    style={{ width: "70px" }}
                  >
                    <MenuItem value="mm">mm</MenuItem>
                    <MenuItem value="cm">cm</MenuItem>
                  </Select>

                  <TextField
                    placeholder="Larghezza (1234)"
                    className="dimension-input custom_padding bg_white textfield_height"
                    variant="outlined"
                  />

                  <Select
                    defaultValue=""
                    className="range-select custom_padding bg_white"
                    displayEmpty
                    style={{ width: "70px" }}
                  >
                    <MenuItem value="">Min</MenuItem>
                    <MenuItem value="100">100</MenuItem>
                    <MenuItem value="200">200</MenuItem>
                  </Select>

                  <Select
                    defaultValue=""
                    className="range-select custom_padding bg_white"
                    displayEmpty
                    style={{ width: "70px" }}
                  >
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
              </div>
              <div className="dimention_box_container" style={{ flex: "1" }}>
                {/* Width Section */}
                <Box style={{ display: "flex", gap: "5px" }}>
                  <Select
                    defaultValue="mm"
                    className="unit-select custom_padding bg_white"
                    style={{ width: "70px" }}
                  >
                    <MenuItem value="mm">mm</MenuItem>
                    <MenuItem value="cm">cm</MenuItem>
                  </Select>

                  <TextField
                    placeholder="Larghezza (1234)"
                    className="dimension-input custom_padding bg_white textfield_height"
                    variant="outlined"
                  />

                  <Select
                    defaultValue=""
                    className="range-select custom_padding bg_white"
                    displayEmpty
                    style={{ width: "70px" }}
                  >
                    <MenuItem value="">Min</MenuItem>
                    <MenuItem value="100">100</MenuItem>
                    <MenuItem value="200">200</MenuItem>
                  </Select>

                  <Select
                    defaultValue=""
                    className="range-select custom_padding bg_white"
                    displayEmpty
                    style={{ width: "70px" }}
                  >
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
              </div>
            </Box>
          </div>

          <div
            className="dimention_box_container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton className="delete-button" onClick={() => onDelete(id)}>
              <Delete />
            </IconButton>
          </div>
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
        style={{
          marginLeft: "155px",
          fontFamily: '"Public Sans", sans-serif',
          border: "0",
          padding: "0",
          color: "#666666",
        }}
      >
        Aggiungi sezione
      </Button>
    </div>
  );
}
