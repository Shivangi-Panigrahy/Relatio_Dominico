"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
  Button,
  Autocomplete,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { ReactComponent as Delete } from "../../../assets/deleterRow.svg";
import "./Colori.scss";
const options = [
  { label: "Dimensioni 1", value: "Dimensioni1" },
  { label: "Dimensioni 2", value: "Dimensioni2" },
];


export default function Colori({ id, onDelete, title }) {
  console.log(title, "title");
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
          <label htmlFor="file-upload" className="upload-label">
            <CloudUpload
              className="upload-icon"
              style={{ marginBottom: "0" }}
            />
            <div className="upload-text">Upload file</div>
          </label>
        </Box>
      </div>
      <div className="color-formFliedRwo">
        {/* Color Selection */}
        <div className="dimention_box_container">
          <Autocomplete
            disablePortal
            className="cmtDropDownField"
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Accessori" />
            )}
          />
        </div>

        {/* Color Name */}

        <div className="dimention_box_container">
          {title === "components" ? (
            <Button
              variant="contained" // Setting the button variant to "contained" for a filled appearance
              // Adding an icon at the start of the button
              onClick={() => {}} // Trigger the passed onClick function
              className="greenButton"
              sx={{ background: "57C700", width: "100%" }}
            >
              Seleziona
            </Button>
          ) : (
            <TextField
              label="Rosso"
              className="ctmTextFlield"
              variant="outlined"
            />
          )}
        </div>

        {/* Price Markup */}
        <div className="dimention_box_container">
          <TextField
            label="Magg. sul prezzo di listino"
            className="ctmTextFlield"
            variant="outlined"
          />
        </div>

        {/* Phase Selection */}
        <div className="dimention_box_container" style={{ gap: "5px" }}>
          <Autocomplete
            disablePortal
            className="cmtDropDownField"
            options={options}
            renderInput={(params) => <TextField {...params} label="fase" />}
          />
          <Autocomplete
            disablePortal
            className="cmtDropDownField"
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
        </div>

        {/* Category Selection */}

        {/* Delete Button */}
        <div className="dimention_box_container">
          <IconButton className="delete-button" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}
