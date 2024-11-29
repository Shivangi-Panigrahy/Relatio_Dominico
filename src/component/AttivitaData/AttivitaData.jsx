import React from "react";
import { Box, Grid } from "@mui/material";
import "./attivitaStatitics.scss";
const ProfittiCard = ({
  quarter,
  day,
  revenue,
  cost,
  profit,
  totalOpen,
  totalClosed,
}) => {
  return (
    <div className="profittiCard">
      <h4 className="profittiCard__title">
        {quarter ||
          (totalOpen ? "Totale progetti Aperti" : "Totale progetti chiusi")}
      </h4>
      <h3 className="profittiCard__number">
        {day || totalOpen || totalClosed}
      </h3>
      <div className="profittiCard__details">
        <div className="profittiCard__row">
          <span
            className="profittiCard__value highlight"
            style={{ color: "#57C700" }}
          >
            {revenue.toFixed(2)}€
          </span>
          {""}
          <span className="profittiCard__label" style={{ color: "#666666" }}>
            {" "}
            Ricavo
          </span>
        </div>
        <div className="profittiCard__row">
          <span
            className="profittiCard__value highlight"
            style={{ color: "#DB0000" }}
          >
            {cost.toFixed(2)}€
          </span>
          {""}
          <span className="profittiCard__label" style={{ color: "#666666" }}>
            {" "}
            Costo
          </span>
        </div>
        <div className="profittiCard__row">
          <span
            className="profittiCard__value highlight"
            style={{ color: "#100919" }}
          >
            {profit.toFixed(2)}€
          </span>
          {""}
          <span className="profittiCard__label" style={{ color: "#666666" }}>
            {" "}
            Utile
          </span>
        </div>
      </div>
    </div>
  );
};
const AttivitaData = () => {
  const activityData = [
    {
      quarter: "I trimestre",
      day: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
    {
      quarter: "II trimestre",
      day: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
    {
      quarter: "III trimestre",
      day: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
    {
      quarter: "IV trimestre",
      day: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
    {
      totalOpen: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
    {
      totalClosed: 24,
      revenue: 325432.9,
      cost: 325432.9,
      profit: 325432.9,
    },
  ];
  return (
    <Box className="FactureSection mt-14 avittie_container">
      <Grid container className="FactureSection__inner" spacing={2}>
        {activityData.map((item, index) => (
          <Grid key={index} item xl={2} lg={3} md={4} xs={12}>
            <ProfittiCard
              quarter={item.quarter}
              day={item.day}
              revenue={item.revenue}
              cost={item.cost}
              profit={item.profit}
              totalOpen={item.totalOpen}
              totalClosed={item.totalClosed}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AttivitaData;
