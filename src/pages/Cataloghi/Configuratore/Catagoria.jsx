import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./Catagoria.scss";
import ConfigratorModal from "./ConfigatorModal";
import { useState } from "react";

export default function Face({ id, onDelete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper
      className="category-form"
      elevation={0}
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <Box className="form-content">
        <Box className="top-row">
          <Select defaultValue="" className="category-name-select" displayEmpty>
            <MenuItem value="">Nome della categoria</MenuItem>
            <MenuItem value="1">Categoria 1</MenuItem>
            <MenuItem value="2">Categoria 2</MenuItem>
          </Select>
          <Typography className="della-text">della</Typography>
          <Select defaultValue="" className="category-select" displayEmpty>
            <MenuItem value="">Categoria</MenuItem>
            <MenuItem value="1">Categoria 1</MenuItem>
            <MenuItem value="2">Categoria 2</MenuItem>
          </Select>
          <Select defaultValue="" className="phase-select" displayEmpty>
            <MenuItem value="">Fase</MenuItem>
            <MenuItem value="1">Fase 1</MenuItem>
            <MenuItem value="2">Fase 2</MenuItem>
          </Select>
          <Select defaultValue="" className="priority-select" displayEmpty>
            <MenuItem value="">Priorità</MenuItem>
            <MenuItem value="1">Alta</MenuItem>
            <MenuItem value="2">Media</MenuItem>
            <MenuItem value="3">Bassa</MenuItem>
          </Select>
          <Button
            variant="contained"
            className="configure-button"
            style={{
              backgroundColor: "#57C700",
              boxShadow: "none",
              lineHeight: "1",
              padding: "12px",
            }}
            onClick={handleOpen}
          >
            Configura
          </Button>
          <IconButton className="delete-button"  onClick={() => onDelete(id)}>
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
      <ConfigratorModal open={open} close={handleClose}/>
    </Paper>
  );
}
