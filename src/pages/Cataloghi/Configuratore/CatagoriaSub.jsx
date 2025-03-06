import {
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Button,
  Paper,
  Typography,
  Autocomplete,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import "./Catagoria.scss";
import ConfigratorModal from "./ConfigatorModal";
import { useState } from "react";
import { ReactComponent as Delete } from "../../../assets/deleterRow.svg";

const options = [
  { label: "Categoria 1", value: "Categoria 1" },
  { label: "Categoria 2", value: "Categoria 2" },
];
export default function CatagoriaSub({ id, onDelete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper
      className="category-form CatagoriaSubBlock"
      elevation={0}
      style={{ backgroundColor: "#f3f3f3", padding: "0" }}
    >
      <Box className="form-content CatagoriaSub">
        <Box className="top-row">
          <TextField
            label="Nome della sottocategoria"
            className="phase-name"
            variant="outlined"
            fullWidth
          />

          <Typography className="della-text">della</Typography>
          <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
          <TextField
            label="Priorità"
            className="phase-name"
            variant="outlined"
            fullWidth
          />
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
          <IconButton className="delete-button" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </Box>
        <Box className="uloadandtextarea">
          <Box className="upload-box">
            <input type="file" id="file-upload" className="file-input" hidden />
            <label htmlFor="file-upload" className="upload-label">
              <CloudUpload className="upload-icon" />
              <div className="upload-text">Upload file</div>
            </label>
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
      </Box>
      <ConfigratorModal open={open} close={handleClose} />
    </Paper>
  );
}
