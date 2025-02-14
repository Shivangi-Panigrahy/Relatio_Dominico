import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import "./Opzioni.scss";
import Dimension from "./Dimension";
import Colori from "./Colori";

export default function Opzioni() {
  const [openSections, setOpenSections] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [colors, setColors] = useState([]);
  const [components, setComponents] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const tabs = [
    { label: "Dimensioni, Volume e peso", id: "dimensions" },
    { label: "Colori e finiture", id: "colors" },
    { label: "Componenti e accessori", id: "components" },
  ];

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleSectionClick = (sectionId) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleAddRow = (setter) =>
    setter((prev) => [...prev, { id: Date.now() }]);

  const handleDeleteRow = (setter, id) =>
    setter((prev) => prev.filter((item) => item.id !== id));

  const renderRows = (rows, Component, handleDelete) =>
    rows.map((row) => (
      <Component key={row.id} id={row.id} onDelete={handleDelete} />
    ));

  const Section = ({ id, title, rows, Component, onAdd, onDelete }) => (
    <Box className="section-container">
      <ListItem disablePadding className="section-header">
        <ListItemButton onClick={() => handleSectionClick(id)}>
          {openSections.includes(id) ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>

      <Collapse in={openSections.includes(id)} timeout="auto">
        <List component="div" disablePadding className="section-content">
          {renderRows(rows, Component, onDelete)}
          <Button
            startIcon={<Add />}
            className="add-row-button"
            onClick={onAdd}
          >
            Aggiungi riga
          </Button>
        </List>
      </Collapse>
    </Box>
  );

  return (
    <Box className='opzioniTabBlock'>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="menu tabs"
        className="tabs"
        TabIndicatorProps={{ style: { display: "none" } }}
      
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.label}
            sx={{
              fontWeight: tabValue === index ? "bold" : "normal",
              color: tabValue === index ? "blue" : "black",
            }}
          />
        ))}
      </Tabs>

      {tabValue === 0 && (
        <List className="expandable-list">
          <Section
            id="dimensions"
            title="Dimensioni, volume e peso"
            rows={dimensions}
            Component={Dimension}
            onAdd={() => handleAddRow(setDimensions)}
            onDelete={(id) => handleDeleteRow(setDimensions, id)}
          />
        </List>
      )}

      {tabValue === 1 && (
        <List className="expandable-list">
          <Section
            id="colors"
            title="Colori e finiture"
            rows={colors}
            Component={Colori}
            onAdd={() => handleAddRow(setColors)}
            onDelete={(id) => handleDeleteRow(setColors, id)}
          />
        </List>
      )}

      {tabValue === 2 && (
        <List className="expandable-list">
          <Section
            id="components"
            title="Componenti e accessori"
            rows={components}
            Component={(props) => (
              <Colori {...props} title={"components"} />
            )}
            onAdd={() => handleAddRow(setComponents)}
            onDelete={(id) => handleDeleteRow(setComponents, id)}
          />
        </List>
      )}
    </Box>
  );
}
