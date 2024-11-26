import React from "react";
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
import styles from "./Dati.scss";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Dynamic Card Component with Add Button
const DynamicCard = ({ title, fields }) => (
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
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
      <Button startIcon={<AddIcon />} className="Aggiungi_btn">
        Aggiungi
      </Button>
    </Box>
  </div>
);

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
              <DynamicCard title={card.title} fields={card.fields} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dati;
