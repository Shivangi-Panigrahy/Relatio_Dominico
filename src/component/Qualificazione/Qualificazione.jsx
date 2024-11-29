import React, { useEffect, useState } from "react";
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
const DynamicCard = ({ title, fields }) => (
  <div className="ContattiCards">
    <Card className="card">
      <CardHeader
        className="card__header"
        title={title}
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent className="card__body">
        {fields.map((field, index) => (
          <div item key={index}>
            <TextField
              // className={styles["text-field"]}
              className="CustomInputBox"
              fullWidth
              label={field.label}
              type={field.type || "text"}
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
            />
          </div>
        ))}
        <Button startIcon={<AddIcon />} className="Aggiungi_btn">
          Aggiungi
        </Button>
      </CardContent>
    </Card>
    {/* <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}></Box> */}
  </div>
);

const Qualificazione = () => {
  const path = window.location.pathname;
  const [cardData, setCardData] = useState([]);

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

  const hrCards = [
    {
      title: "Hard skill",
      fields: [
        { label: "Sviluppatore senior" },
        { label: "Linguaggi conosciuti" },
        { label: "Anni di esperienza" },
      ],
    },
    {
      title: "Soft skill",
      fields: [
        { label: "Front end" },
        { label: "Spiccate capacita relazionali" },
      ],
    },
    {
      title: "Note",
      fields: [{ label: "Note" }],
    },
  ];

  const hrCandidatoCards = [
    {
      title: "Skill",
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
        { label: "Prove ubanistica" },
        { label: "Progettazione strutturale" },
        { label: "Progettazione architettonica" },
      ],
    },
  ];

  useEffect(() => {
    if (path === "/hr/colaboratory/sub-colaboratory/Qualificazione") {
      setCardData(hrCards);
    } else if (path === "/hr/candidati/candidato/Qualificazione") {
      setCardData(hrCandidatoCards);
    } else {
      setCardData(cards);
    }
  }, [path]);

  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <DynamicCard title={card.title} fields={card.fields} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Qualificazione;
