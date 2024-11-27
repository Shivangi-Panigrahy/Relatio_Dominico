import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Qualificazione.scss";

// Dynamic Card Component with Add Button
const DynamicCard = ({ title, initialFields }) => {
  const [fields, setFields] = useState(initialFields);

  const handleAddField = () => {
    // Add a new empty field with a default label
    const newField = { 
      label: `Campo Aggiuntivo ${fields.length + 1}`,
      type: "text"
    };
    setFields([...fields, newField]);
  };

  return (
    <div className="ContattiCards">
      <Card className="card">
        <CardHeader
          className="card__header"
          title={title}
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardContent className="card__body">
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  className={styles["text-field"]}
                  fullWidth
                  label={field.label}
                  type={field.type || "text"}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
        <Button 
          startIcon={<AddIcon />} 
          className="Aggiungi_btn"
          onClick={handleAddField}
        >
          Aggiungi
        </Button>
      </Box>
    </div>
  );
};

const Qualificazione = () => {
  const cards = [
    {
      title: "Tipo di azienda AFweqrA",
      fields: [
        { label: "Settore" },
        { label: "Categoria categoria azienda" },
        { label: "Codice adeco" },
      ],
    },
    {
      title: "Attivita",
      fields: [
        { label: "Progettazione e edirezione lavori" },
        { label: "Prove geioteniche" },
        { label: "Rilievi topografici" },
        { label: "Pratiche catastali" },
      ],
    },
    {
      title: "Attivita",
      fields: [
        { label: "Progettazione e direzione lavori" },
        { label: "Progettazine ubanistica" },
        { label: "Progettazine strutturale" },
        { label: "Progettazine architettonica" },
      ],
    },
  ];

  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <Grid container spacing={2.5}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <DynamicCard 
                title={card.title} 
                initialFields={card.fields} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Qualificazione;