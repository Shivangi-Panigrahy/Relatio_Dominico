'use client'

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
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import './SubDimensions.scss'

export default function SubDimensions({ id, onDelete }) {
  return (
    <Paper className="section-form" elevation={0}>
      <Box className="form-content">
        {/* Section Name and Radio Group */}
        <Box className="top-row">
          <TextField
            placeholder="Nome della sezione es. Anta 1"
            className="section-name"
            variant="outlined"
            fullWidth
          />
          
          <RadioGroup
            row
            className="radio-group"
          >
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
        <Box className="measurements-row">
          {/* Width Section */}
          <Box className="measurement-section">
            <Select
              defaultValue="mm"
              className="unit-select"
            >
              <MenuItem value="mm">mm</MenuItem>
              <MenuItem value="cm">cm</MenuItem>
            </Select>

            <TextField
              placeholder="Larghezza (1234)"
              className="dimension-input"
              variant="outlined"
            />

            <Select
              defaultValue=""
              className="range-select"
              displayEmpty
            >
              <MenuItem value="">Min</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
            </Select>

            <Select
              defaultValue=""
              className="range-select"
              displayEmpty
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

          {/* Height Section */}
          <Box className="measurement-section">
            <Select
              defaultValue="mm"
              className="unit-select"
            >
              <MenuItem value="mm">mm</MenuItem>
              <MenuItem value="cm">cm</MenuItem>
            </Select>

            <TextField
              placeholder="Altezza (1234)"
              className="dimension-input"
              variant="outlined"
            />

            <Select
              defaultValue=""
              className="range-select"
              displayEmpty
            >
              <MenuItem value="">Min</MenuItem>
              <MenuItem value="100">100</MenuItem>
              <MenuItem value="200">200</MenuItem>
            </Select>

            <Select
              defaultValue=""
              className="range-select"
              displayEmpty
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
        </Box>
      </Box>

      <IconButton className="delete-button" onClick={() => onDelete(id)}>
        <Delete />
      </IconButton>
    </Paper>
  )
}

