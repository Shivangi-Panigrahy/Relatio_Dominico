import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Contatti.scss";

const DynamicCard = ({ title, initialFields }) => {
  const [fields, setFields] = useState(
    initialFields.map((field) => ({ ...field, isNew: false }))
  );

  const handleAddField = () => {
    const newField = {
      label: `Campo Aggiuntivo ${fields.length + 1}`,
      isNew: true,
    };
    setFields([...fields, newField]);
  };

  const handleDeleteField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <Grid item xl={4} md={6} sm={12}>
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
                <Grid
                  item
                  xs={12}
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    className="CustomInputBox"
                    fullWidth
                    label={field.label}
                    type={field.type || "text"}
                    variant="outlined"
                  />
                  {field.isNew && (
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteField(index)}
                      style={{ marginLeft: "8px" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              ))}
            </Grid>
            <Button
              className="Aggiungi_btn"
              startIcon={<AddIcon />}
              onClick={handleAddField}
              style={{ marginTop: "16px" }}
            >
              Aggiungi
            </Button>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
};

const HrContatti = () => {
  const initialFields = [
    { label: "Numero Fisso" },
    { label: "Numero Mobile" },
    { label: "Email", type: "email" },
    { label: "Sito" },
    { label: "Pagina LinkedIn" },
  ];

  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <Grid container spacing={3}>
          <DynamicCard title="Contatti Azienda" initialFields={initialFields} />
        </Grid>
      </Box>
    </Box>
  );
};

export default HrContatti;
