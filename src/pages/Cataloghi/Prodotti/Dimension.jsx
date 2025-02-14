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
  Autocomplete,
} from "@mui/material";
import { CloudUpload, Add, Delete } from "@mui/icons-material";
import "./Dimension.scss";
import SubDimensions from "./SubDimensions";
const options = [
  { label: "Dimensioni 1", value: "Dimensioni1" },
  { label: "Dimensioni 2", value: "Dimensioni2" },
];

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

                <Autocomplete
                  disablePortal
                  options={options}
                  className="cmtDropDownField"
                  renderInput={(params) => (
                    <TextField {...params} label="Dimensioni" />
                  )}
                />

              </div>

              <div className="dimention_box_container">
                <TextField
                  label="Nome dell'opzione (Due ante)"
                  variant="outlined"
                  className="ctmTextFlield"
                 
                />
              </div>

              <div
                className="dimention_box_container"
                style={{ display: "flex", gap: "5px" }}
              >
                <Autocomplete
                  disablePortal
                  options={options}
                   className="cmtDropDownField"
                  renderInput={(params) => (
                    <TextField {...params} label="Fase" />
                  )}
                />

                <Autocomplete
                  disablePortal
                  options={options}
                   className="cmtDropDownField"
                  renderInput={(params) => (
                    <TextField {...params} label="Categoria" />
                  )}
                />
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
                  <Autocomplete
                    disablePortal
                     className="cmtDropDownField"
                     style={{width:"90px"}}
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="mm" />
                    )}
                  />

                  <TextField
                    label="Larghezza (1234)"
              
                    variant="outlined"
                    className="ctmTextFlield"
                  />
                  <Autocomplete
                    disablePortal
                    style={{width:"90px"}}
                     className="cmtDropDownField"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="Min" />
                    )}
                  />

                  <Autocomplete
                    disablePortal
                    options={options}
                     className="cmtDropDownField"
                     style={{width:"90px"}}
                    renderInput={(params) => (
                      <TextField {...params} label="Max" />
                    )}
                  />

                  {/* <FormControlLabel
                    control={<Checkbox />}
                    label="fissa"
                    className="fixed-checkbox"
                  /> */}
                  <div className="blankDiv"></div>
                </Box>
              </div>
              <div className="dimention_box_container" style={{ flex: "1" }}>
                {/* Width Section */}
                <Box style={{ display: "flex", gap: "5px" }}>
                  <Autocomplete
                    disablePortal
                     className="cmtDropDownField"
                     style={{width:"90px"}}
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="mm" />
                    )}
                  />

                  <TextField
                    label="Larghezza (1234)"
                  
                    variant="outlined"
                    className="ctmTextFlield"
                  
                  />

                  <Autocomplete
                    disablePortal
                     style={{width:"90px"}}
                     className="cmtDropDownField"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="Min" />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                     className="cmtDropDownField"
                     style={{width:"90px"}}
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="Max" />
                    )}
                  />

                  {/* <FormControlLabel
                    control={<Checkbox />}
                    label="fissa"
                    className="fixed-checkbox"
                  /> */}
                  <div className="blankDiv"></div>
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
