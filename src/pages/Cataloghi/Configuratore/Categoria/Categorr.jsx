import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
  Box,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Catagoria from "../Catagoria";
import "./categorr.scss";

export default function Categorr() {
  const [openSections, setOpenSections] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [subcategories, setSubcategories] = useState({});

  const sections = [{ id: "categoria", title: "Nome della Categoria" }];

  const handleSectionClick = (sectionId) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleAddDimension = () => {
    const newId = Date.now();
    setDimensions((prev) => [...prev, { id: newId }]);
    setSubcategories((prev) => ({ ...prev, [newId]: [] }));
  };

  const handleAddColori = (categoryId) => {
    setSubcategories((prev) => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), { id: Date.now() }],
    }));
  };

  const handleDeleteDimension = (id) => {
    setDimensions((prev) => prev.filter((item) => item.id !== id));
    setSubcategories((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleDeleteColori = (categoryId, subcategoryId) => {
    setSubcategories((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].filter((sub) => sub.id !== subcategoryId),
    }));
  };

  const handleDragEnd = (result, categoryId) => {
    if (!result.destination) return;

    const items = Array.from(subcategories[categoryId]);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSubcategories((prev) => ({
      ...prev,
      [categoryId]: items,
    }));
  };

  return (
    <List className="expandable-list categoriaAccordion">
      {sections.map((section) => (
        <Box key={section.id} className="section-container">
          <ListItem disablePadding className="section-header">
            <ListItemButton onClick={() => handleSectionClick(section.id)}>
              {openSections.includes(section.id) ? <ExpandLess /> : <ExpandMore />}
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>

          <Collapse in={openSections.includes(section.id)} timeout="auto">
            <List component="div" disablePadding className="section-content">
              {section.id === "categoria" && (
                <>
                  {dimensions.map((dimension) => (
                    <DragDropContext
                      key={dimension.id}
                      onDragEnd={(result) => handleDragEnd(result, dimension.id)}
                    >
                      <Droppable droppableId={dimension.id.toString()} direction="vertical">
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <Catagoria
                              id={dimension.id}
                              onDelete={handleDeleteDimension}
                              handleAddColori={() => handleAddColori(dimension.id)}
                              handleDeleteColori={(subId) =>
                                handleDeleteColori(dimension.id, subId)
                              }
                              colors={subcategories[dimension.id] || []}
                              setSubcategories={setSubcategories}
                            />
                            {provided.placeholder}
                          </Box>
                        )}
                      </Droppable>
                    </DragDropContext>
                  ))}
                  <Button
                    className="add-color-button"
                    variant="text"
                    onClick={handleAddDimension}
                  >
                  <span> <Add /> Aggiungi riga</span>
                  </Button>
                </>
              )}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
  );
}
