import {
  Box,
  TextField,
  Paper,
  Typography,
  Button,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { Add, CloudUpload } from "@mui/icons-material";
import { ReactComponent as Delete } from "../../../assets/deleterRow.svg";
import CatagoriaSub from "./CatagoriaSub";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const options = [
  { label: "Categoria 1", value: "Categoria 1" },
  { label: "Categoria 2", value: "Categoria 2" },
];

export default function Face({
  id,
  onDelete,
  cloud,
  handleAddColori,
  handleDeleteColori,
  colors,
  setSubcategories, // Function to update subcategory order
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    setSubcategories((prev) => {
      const updatedColors = [...colors];
      const [movedItem] = updatedColors.splice(result.source.index, 1);
      updatedColors.splice(result.destination.index, 0, movedItem);

      return {
        ...prev,
        [id]: updatedColors, // Update order for the current category
      };
    });
  };

  return (
    <Paper
      className="category-form CatagoriaBlock"
      elevation={0}
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <Box className="form-content">
        <Box className="top-row">
          <TextField
            label="Nome della categoria"
            className="phase-name"
            variant="outlined"
            fullWidth
          />

          <Typography className="della-text">della</Typography>
          <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label="Fase" />}
          />
          {/* <Typography className="della-text"></Typography> */}
          {/* <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label="Face" />}
          /> */}
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

        {cloud && (
          <Box className="upload-box">
            <input type="file" id="file-upload" className="file-input" hidden />
            <label htmlFor="file-upload" className="upload-label">
              <CloudUpload className="upload-icon" />
              <div className="upload-text">Upload file</div>
            </label>
          </Box>
        )}

        <TextField
          placeholder="Descrizione"
          className="description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
      </Box>

      <Button
        startIcon={<Add />}
        className="add-section-button"
        variant="text"
        onClick={handleAddColori}
        // style={{
        //   color: "#160a2a",
        //   fontWeight: 700,
        //   textTransform: "unset",
        //   backgroundColor: "transparent",
        // }}
      >
        <span> Aggiungi sezione</span>
      </Button>

      {/* Drag and Drop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId={`subcategory-list-${id}`}
          type="subcategory"
          direction="vertical"
        >
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {colors.map((color, index) => (
                <Draggable
                  key={color.id}
                  draggableId={color.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        opacity: snapshot.isDragging ? 0.7 : 1,
                        transition: "opacity 0.2s",
                      }}
                    >
                      <CatagoriaSub
                        id={color.id}
                        onDelete={handleDeleteColori}
                        cloud={true}
                      />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Paper>
  );
}
