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
} from "@mui/material";
import styles from "./Contatti.scss";
import AddIcon from "@mui/icons-material/Add";

// Dynamic Card Component with Add Button
const DynamicCard = ({ title, fields }) => (
  <Grid container spacing={2}>
    <Grid item xl={4} md={6} sm={12}>
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
                />
              </div>
            ))}
            <Button className="Aggiungi_btn" startIcon={<AddIcon />}>
              Aggiungi
            </Button>
          </CardContent>
        </Card>
        {/* <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}></Box> */}
      </div>
    </Grid>
  </Grid>
);

const HrContatti = () => {
  const fields = [
    { label: "Numero Fisso" },
    { label: "Numero Mobile" },
    { label: "Email", type: "email" },
    { label: "Sito" },
    { label: "Pagina LinkedIn" },
  ];
  return (
    <Box className="customTabBlock" maxWidth="xl">
      <Box className="customTabBlock__body">
        <DynamicCard fields={fields} />
      </Box>
    </Box>
  );
};

export default HrContatti;
