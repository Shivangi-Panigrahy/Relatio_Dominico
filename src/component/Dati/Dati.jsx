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
  IconButton,
} from "@mui/material";
import styles from "./Dati.scss";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Dynamic Card Component with Add and Delete functionality for new fields
const DynamicCard = ({ title, initialFields }) => {
  const [fields, setFields] = useState(
    initialFields.map((field) => ({ ...field, isNew: false }))
  );

  const handleAddField = () => {
    // Add a new empty field with a default label and mark as new
    const newField = {
      label: `Campo Aggiuntivo ${fields.length + 1}`,
      isNew: true,
    };
    setFields([...fields, newField]);
  };

  const handleDeleteField = (index) => {
    // Remove the field at the specified index
    setFields(fields.filter((_, i) => i !== index));
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
              <Grid
                item
                xs={12}
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <TextField
                  className={styles["text-field"]}
                  fullWidth
                  label={field.label}
                  type={field.type || "text"}
                  variant="outlined"
                  InputProps={{
                    endAdornment: [
                      "Nome della banca di accredito",
                      "Nome della banca del cliente",
                      "Pagamento",
                      "Tipologia di pagamento",
                    ].includes(field.label) ? (
                      <InputAdornment position="end">
                        <ArrowDownwardIcon />
                      </InputAdornment>
                    ) : null,
                  }}
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

const Dati = () => {
  const cards = [
    {
      title: "Conto bancario",
      fields: [
        { label: "Nome della banca di accredito" },
        { label: "Nome conto" },
        { label: "IBAN" },
        { label: "SWIFT" },
      ],
    },
    {
      title: "Metodo",
      fields: [
        { label: "Modalita di pagamento" },
        { label: "Esenzione IVA" },
        { label: "Nome della banca del cliente" },
        { label: "IBAN" },
        { label: "Nome conto" },
        { label: "SWIFT" },
      ],
    },
    {
      title: "Condizioni",
      fields: [{ label: "Pagamento" }, { label: "Tipologia di pagamento" }],
    },
  ];

  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <DynamicCard title={card.title} initialFields={card.fields} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dati;