import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const Economia = () => {
  const cardData = [
    { title: "Collaboratori", amount: "20.350.043.55€", detail1: "5 Collaboratori", detail2: "325 Ore" },
    { title: "Fornitori", amount: "20.350.043.55€", detail1: "2 Fornitori", detail2: "3 fatture" },
    { title: "Mezzi", amount: "20.350.043.55€", detail1: "5 Mezzi", detail2: "24 Ore" },
    { title: "Attrezzature", amount: "20.350.043.55€", detail1: "12 Attrezzature", detail2: "325 Ore" },
    { title: "Prodotti", amount: "20.350.043.55€", detail1: "325 Prodotti", detail2: "2 Tipologia" },
    {
      title: "Totale",
      amount: "20.350.043.55€",
      detail1: "Entrare 10.320.329,0",
      detail2: "Uscite 10.320.329,00",
      isTotal: true,
    },
  ];
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                backgroundColor: card.isTotal ? "#e8f5e9" : "white",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "#d81b60", fontWeight: "bold" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginTop: 1, marginBottom: 1 }}
                >
                  {card.amount}
                </Typography>
                <Typography variant="body2">{card.detail1}</Typography>
                <Typography variant="body2">{card.detail2}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Economia




