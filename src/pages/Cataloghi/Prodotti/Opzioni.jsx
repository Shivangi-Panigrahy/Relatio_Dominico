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
import "./Opzioni.scss";
import Dimension from "./Dimension";
import Colori from "./Colori";

export default function Opzioni() {
  const [openSections, setOpenSections] = useState([]);
  const [dimensions, setDimensions] = useState([]); // Array to track Dimension rows
  const [colors, setColors] = useState([]); // Array to track Colori rows
  const [components, setComponents] = useState([]); // Array to track Componenti rows

  const sections = [
    {
      id: "dimensions",
      title: "Dimensioni, volume e peso",
    },
    {
      id: "colors",
      title: "Colori e finiture",
    },
    {
      id: "components",
      title: "Componenti e accessori",
    },
  ];

  const handleSectionClick = (sectionId) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleAddDimension = () => {
    setDimensions((prev) => [...prev, { id: Date.now() }]); // Add a new dimension with a unique ID
  };

  const handleAddColori = () => {
    setColors((prev) => [...prev, { id: Date.now() }]); // Add a new colori with a unique ID
  };

  const handleAddComponenti = () => {
    setComponents((prev) => [...prev, { id: Date.now() }]); // Add a new componenti with a unique ID
  };

  const handleDeleteDimension = (id) => {
    setDimensions((prev) => prev.filter((item) => item.id !== id)); // Remove the Dimension with the given ID
  };

  const handleDeleteColori = (id) => {
    setColors((prev) => prev.filter((item) => item.id !== id)); // Remove the Colori with the given ID
  };

  const handleDeleteComponenti = (id) => {
    setComponents((prev) => prev.filter((item) => item.id !== id)); // Remove the Componenti with the given ID
  };

  return (
    <List className="expandable-list">
      {sections.map((section) => (
        <Box key={section.id} className="section-container">
          <ListItem disablePadding className="section-header">
            <ListItemButton onClick={() => handleSectionClick(section.id)}>
              {openSections.includes(section.id) ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>

          <Collapse in={openSections.includes(section.id)} timeout="auto">
            <List component="div" disablePadding className="section-content">
              {section.id === "dimensions" && (
                <>
                  {dimensions.map((dimension) => (
                    <Dimension
                      key={dimension.id}
                      id={dimension.id}
                      onDelete={handleDeleteDimension}
                    />
                  ))}
                  <Button
                    startIcon={<Add />}
                    className="add-row-button"
                    onClick={handleAddDimension}
                  >
                    Aggiungi riga
                  </Button>
                </>
              )}

              {section.id === "colors" && (
                <>
                  {colors.map((color) => (
                    <Colori
                      key={color.id}
                      id={color.id}
                      onDelete={handleDeleteColori}
                    />
                  ))}
                  <Button
                    startIcon={<Add />}
                    className="add-color-button"
                    variant="text"
                    onClick={handleAddColori}
                    style={{
                      color: "#160a2a",
                      fontWeight: 700,
                      textTransform: "unset",
                      backgroundColor: "transparent",
                    }}
                  >
                    Aggiungi colore
                  </Button>
                </>
              )}

              {section.id === "components" && (
                <>
                  {components.map((component) => (
                    <Colori
                      key={component.id}
                      id={component.id}
                      onDelete={handleDeleteComponenti}
                    />
                  ))}
                  <Button
                    startIcon={<Add />}
                    className="add-component-button"
                    variant="text"
                    onClick={handleAddComponenti}
                    style={{
                      color: "#160a2a",
                      fontWeight: 700,
                      textTransform: "unset",
                      backgroundColor: "transparent",
                    }}
                  >
                    Aggiungi componente
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
