import {
    Box,
    TextField,
    Select,
    MenuItem,
    IconButton,
    Button,
    Paper,
    Typography,
    InputLabel,
    FormControl,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "./Catagoria.scss";
  import ConfigratorModal from "./ConfigatorModal";
import { useState } from "react";
import MenuTab from "../../component/tabs/MenuTab";

export default function Attività({ id, onDelete }) {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
    };
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
                            className="category-select"
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
                            <MenuItem value="1">Priorità</MenuItem>
                            <MenuItem value="2">Priorità</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <Select defaultValue="" className="priority-select" displayEmpty>
                        <MenuItem value="">Priorità</MenuItem>
                        <MenuItem value="1">Alta</MenuItem>
                        <MenuItem value="2">Media</MenuItem>
                        <MenuItem value="3">Bassa</MenuItem>
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
                        <MenuTab onTabChange={handleTabChange} Configura={true} />
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
            <ConfigratorModal open={open} close={handleClose}/>
        </Paper>
    );
}
