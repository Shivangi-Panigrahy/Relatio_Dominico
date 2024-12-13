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
import "./Configure.scss";
import Nomefase from "./Nomefase";
import Attività from "./Attività";
import Risultati from "./Risultati";

export default function ConfigureDetails() {
  const [openSections, setOpenSections] = useState([]);
  const [dimensions, setDimensions] = useState([]); // Array to track Dimension rows
  const [colors, setColors] = useState([]); // Array to track Colori rows
  const [results, setResults] = useState([]); // Array to track Risultati rows

  const sections = [
    {
      id: "Nomefase",
      title: "Nome della fase",
    },
    {
      id: "Attività",
      title: "Attività",
    },
    {
      id: "Risultati",
      title: "Risultati",
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

  const handleAddResults = () => {
    setResults((prev) => [...prev, { id: Date.now() }]); // Add a new result with a unique ID
  };

  const handleDeleteDimension = (id) => {
    setDimensions((prev) => prev.filter((item) => item.id !== id)); // Remove the Dimension with the given ID
  };

  const handleDeleteColori = (id) => {
    setColors((prev) => prev.filter((item) => item.id !== id)); // Remove the Colori with the given ID
  };

  const handleDeleteResults = (id) => {
    setResults((prev) => prev.filter((item) => item.id !== id)); // Remove the Result with the given ID
  };

  return (
    <List className="expandable-list configureAccordion">
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
              {section.id === "Nomefase" && (
                <>
                  {dimensions.map((dimension) => (
                    <Nomefase
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

              {section.id === "Attività" && (
                <>
                  {colors.map((color) => (
                    <Attività
                      key={color.id}
                      id={color.id}
                      onDelete={handleDeleteColori}
                    />
                  ))}
                  <Button
                    startIcon={<Add />}
                   className="add-row-button"
                    variant="text"
                    onClick={handleAddColori}
                   
                  >
                    Aggiungi riga
                  </Button>
                </>
              )}

              {section.id === "Risultati" && (
                <>
                  {results.map((result) => (
                    <Risultati
                      key={result.id}
                      id={result.id}
                      onDelete={handleDeleteResults}
                    />
                  ))}
                  <Button
                    startIcon={<Add />}
                    className="add-row-button"
                    onClick={handleAddResults}
                  >
                    Aggiungi riga
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
