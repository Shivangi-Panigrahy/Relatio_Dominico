"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Autocomplete,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./SubDimensions.scss";
const options = [
  { label: "Dimensioni 1", value: "Dimensioni1" },
  { label: "Dimensioni 2", value: "Dimensioni2" },
];

export default function SubDimensions({ id, onDelete }) {
  return (
    <div className="dimension-form" style={{ padding: 0 }}>
      <Paper className="form-row" elevation={0}>
        <div></div>
        <Box
          className="form-content"
          sx={{ display: "flex", borderRadius: "0" }}
        >
          {/* Section Name and Radio Group */}
          <Box
            className="top-row dimention_box_container"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <TextField
              label="Nome della sezione es. Anta 1"
             className="ctmTextFlield"
              variant="outlined"
              fullWidth
            />

            <RadioGroup row className="radio-group">
              <FormControlLabel
                value="destra"
                control={<Radio />}
                label="Apertura destra"
              />
              <FormControlLabel
                value="sinistra"
                control={<Radio />}
                label="Apertura Sinistra"
              />
              <FormControlLabel
                value="fissa"
                control={<Radio />}
                label="Fissa"
              />
            </RadioGroup>
          </Box>

          {/* Measurements Row */}
          <Box
            className="dimention_box_container"
            sx={{ flex: 1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            {/* Width Section */}
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="mm" />}
                style={{width:"90px"}}
              />

              <TextField
                label="Altezza (1234)"
                className="ctmTextFlield"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />

              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="Min" />}
                style={{width:"90px"}}
              />

              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="Max" />}
                style={{width:"90px"}}
              />
              <div className="blankDiv"></div>
              {/* <FormControlLabel
                control={<Checkbox />}
                label="fissa"
                className="fixed-checkbox custom_padding"
              /> */}
            </Box>

            {/* Height Section */}
            <Box sx={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="mm" />}
                style={{width:"90px"}}
              />

              <TextField
                label="Altezza (1234)"
                className="ctmTextFlield"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />

              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="Min" />}
                style={{width:"90px"}}
              />

              <Autocomplete
                disablePortal
                options={options}
                className="cmtDropDownField"
                renderInput={(params) => <TextField {...params} label="Max" />}
                style={{width:"90px"}}
              />
              <div className="blankDiv"></div>
              {/* <FormControlLabel
                control={<Checkbox />}
                label="fissa"
                className="fixed-checkbox custom_padding"
              /> */}
            </Box>
          </Box>
        </Box>
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
      </Paper>
    </div>
  );
}
