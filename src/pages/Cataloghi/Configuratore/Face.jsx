'use client'

import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Paper,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import './Face.scss'

export default function Face() {
  return (
    <Paper className="phase-form" elevation={0}>
      <Box className="form-content">
        <Box className="top-row">
          <TextField
            placeholder="Nome della fase"
            className="phase-name"
            variant="outlined"
            fullWidth
          />
          
          <Select
            defaultValue=""
            className="priority-select"
            displayEmpty
          >
            <MenuItem value="">Priorità</MenuItem>
            <MenuItem value="1">Alta</MenuItem>
            <MenuItem value="2">Media</MenuItem>
            <MenuItem value="3">Bassa</MenuItem>
          </Select>

          <IconButton className="delete-button">
            <Delete />
          </IconButton>
        </Box>

        <TextField
          placeholder="Descrizione"
          className="description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
      </Box>
    </Paper>
  )
}

