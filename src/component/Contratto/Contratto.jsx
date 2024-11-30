import React, { useCallback, useState } from "react";
import DatePickerTime from "../filter/DatePicker";
import dayjs from "dayjs";
import { Card, CardHeader, Grid, TextField, Typography } from "@mui/material";
import "./Contratto.scss";
const Contratto = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minMaxData, setMinMaxDate] = useState(null);

  const handleMinMaxDate = useCallback((index, date) => {
    const formattedDate = dayjs(date, "DD/MM/YYYY");
    setMinMaxDate((prev) => ({
      ...prev,
      [index === 0 ? "minDate" : "maxDate"]: formattedDate,
    }));
  }, []);

  const cards = ["Maturate", "Utilizzate", "Disponibili"];
  const TextFields = ["Ferie", "Permessei", "Straordinari", "Malattia", "TFR"];

  return (
    <div className="Contratto">
      <div className="card">
        <h6 className="card__header" title="Contratto">
          Contratto
        </h6>
        <Grid container spacing={1}>
          <Grid item xl={4}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Tipo di contratto"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={4}>
            <Grid container spacing={1}>
              <Grid item xl={6}>
                <DatePickerTime
                  label="Del"
                  value={startDate}
                  minDate={null}
                  maxDate={minMaxData?.minDate}
                  onDateChange={(formattedDate) => {
                    handleMinMaxDate(0, formattedDate);
                    setStartDate(formattedDate);
                  }}
                />
              </Grid>
              <Grid item xl={6}>
                <DatePickerTime
                  label="Al"
                  value={endDate}
                  minDate={minMaxData?.minDate}
                  maxDate={null}
                  onDateChange={(formattedDate) => {
                    handleMinMaxDate(1, formattedDate);
                    setEndDate(formattedDate);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={2}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="RAL"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={2}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Costo aziendale"
              type="text"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
      <div className="card">
        <h6 className="card__header" title="Contratto">
          Costi orari
        </h6>
        <Grid container spacing={1}>
          <Grid item xl={1.8}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Ordinario"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={1.8}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Straordinario"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={1.8}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Reperibilità"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={1.8}>
            <TextField
              className="CustomInputBox"
              fullWidth
              label="Festibi"
              type="text"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>

      <div className="card">
        <Grid container spacing={5}>
          {cards.map((card, index) => (
            <Grid item xl={4}>
              <h6 className="card__header">{card}</h6>
              <Typography variant="h6"></Typography>
              {TextFields.map((field, index) => (
                <TextField
                  className="CustomInputBox"
                  key={index}
                  fullWidth
                  label={field}
                  type="text"
                  variant="outlined"
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Contratto;
