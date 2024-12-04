import {
    Box,
    TextField,
    Select,
    MenuItem,
    IconButton,
    Button,
    Paper,
    Typography,
    FormControl,
    InputLabel,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./Catagoria.scss";
//   import ConfigratorModal from "./ConfigatorModal";
import { useState } from "react";

export default function Risultati({ id, onDelete }) {
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
                    {/* <Select defaultValue="" className="category-name-select" displayEmpty>
              <MenuItem value="">Nome della categoria</MenuItem>
              <MenuItem value="1">Categoria 1</MenuItem>
              <MenuItem value="2">Categoria 2</MenuItem>
            </Select> */}
                    <TextField id="outlined-basic" label="Nome dell’attività (Es. Pigiatura)" variant="outlined" className="category-name-select" fullWidth style={{ marginRight: "16px" }} />

                    <Typography className="della-text">è all’interno della</Typography>
                    <FormControl>
                        <InputLabel id="category-select-label">Fase (es. Trasformazioni in mosto)</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            label="Fase (es. Trasformazioni in mosto)"
                            className="phase-select"
                        >
                            <MenuItem value="0">Fase (es. Trasformazioni in mosto)</MenuItem>
                            <MenuItem value="1">Categoria 1</MenuItem>
                            <MenuItem value="2">Categoria 2</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="category-select-label">Priorità</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            label="Fase (es. Trasformazioni in mosto)"
                            className="phase-select"
                        >
                            <MenuItem value="0">Priorità</MenuItem>
                            <MenuItem value="1">Fase 1</MenuItem>
                            <MenuItem value="2">Fase 2</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <Select defaultValue="" className="phase-select" displayEmpty>
                        <MenuItem value="">Priorità</MenuItem>
                        <MenuItem value="1">Fase 1</MenuItem>
                        <MenuItem value="2">Fase 2</MenuItem>
                    </Select> */}
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
                {/* <TextField
                    placeholder="Descrizione"
                    className="description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                /> */}
            </Box>
            {/* <ConfigratorModal open={open} close={handleClose}/> */}
        </Paper>
    );
}
