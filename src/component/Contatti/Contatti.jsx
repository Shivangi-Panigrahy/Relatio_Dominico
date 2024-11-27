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
} from "@mui/material";
import styles from "./Contatti.scss";
import AddIcon from "@mui/icons-material/Add";

// Dynamic Card Component with Add Button
const DynamicCard = ({ title, initialFields, onAddField }) => {
  const [fields, setFields] = useState(initialFields);

  const handleAddField = () => {
    // Add a new empty field with a default label
    const newField = { label: `Campo Aggiuntivo ${fields.length + 1}` };
    setFields([...fields, newField]);
    
    // Optional: Call the parent component's method if needed
    if (onAddField) {
      onAddField(newField);
    }
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
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
        <Button 
          className="Aggiungi_btn" 
          startIcon={<AddIcon />}
          onClick={handleAddField}
        >
          Aggiungi
        </Button>
      </Box>
    </div>
  );
};

const Contatti = () => {
  const cards = [
    {
      title: "Contatti azienda",
      fields: [
        { label: "Numero Fisso" },
        { label: "Numero Mobile" },
        { label: "Email", type: "email" },
        { label: "Sito" },
        { label: "Pagina LinkedIn" },
      ],
    },
    {
      title: "Contatti Referente 1",
      fields: [
        { label: "Nome e Cognome referente" },
        { label: "Tipo di referente" },
        { label: "Cellulare" },
        { label: "Numero Mobile" },
        { label: "Email", type: "email" },
        { label: "Contatto LinkedIn" },
      ],
    },
    {
      title: "Contatti Referente 2",
      fields: [
        { label: "Nome e Cognome referente" },
        { label: "Tipo di referente" },
        { label: "Cellulare" },
        { label: "Numero Mobile" },
        { label: "Email", type: "email" },
        { label: "Contatto LinkedIn" },
      ],
    },
  ];

  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <Grid container spacing={3}>
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

export default Contatti;