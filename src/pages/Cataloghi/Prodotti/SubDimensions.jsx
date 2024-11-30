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
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./SubDimensions.scss";

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
              placeholder="Nome della sezione es. Anta 1"
              className="bg_white custom_padding"
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
              <Select
                defaultValue="mm"
                className="unit-select custom_padding"
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="mm">mm</MenuItem>
                <MenuItem value="cm">cm</MenuItem>
              </Select>

              <TextField
                placeholder="Altezza (1234)"
                className="dimension-input custom_padding textfield_height"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />

              <Select
                defaultValue=""
                className="range-select custom_padding"
                displayEmpty
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="">Min</MenuItem>
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="200">200</MenuItem>
              </Select>

              <Select
                defaultValue=""
                className="range-select custom_padding"
                displayEmpty
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="">Max</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="2000">2000</MenuItem>
              </Select>

              <FormControlLabel
                control={<Checkbox />}
                label="fissa"
                className="fixed-checkbox custom_padding"
              />
            </Box>

            {/* Height Section */}
            <Box sx={{ display: "flex", gap: "5px", marginTop: "10px" }}>
              <Select
                defaultValue="mm"
                className="unit-select custom_padding"
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="mm">mm</MenuItem>
                <MenuItem value="cm">cm</MenuItem>
              </Select>

              <TextField
                placeholder="Altezza (1234)"
                className="dimension-input custom_padding textfield_height"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />

              <Select
                defaultValue=""
                className="range-select custom_padding"
                displayEmpty
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="">Min</MenuItem>
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="200">200</MenuItem>
              </Select>

              <Select
                defaultValue=""
                className="range-select custom_padding"
                displayEmpty
                style={{ width: "70px", backgroundColor: "#fff" }}
              >
                <MenuItem value="">Max</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="2000">2000</MenuItem>
              </Select>

              <FormControlLabel
                control={<Checkbox />}
                label="fissa"
                className="fixed-checkbox custom_padding"
              />
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
