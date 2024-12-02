import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
  TextareaAutosize,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CustomSelect from "../form/CustomSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema3 } from "../../validation/ValidationSchema";
import styled from "@emotion/styled";
const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const EmptyTextarea = ({ placeholder }) => {
  const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 5px;
    color: #160A2A;
    background: ${"#fff"};
    border: 2px solid #e5e5e5;
  `
  );

  return (
    <Textarea
      aria-label="empty textarea"
      placeholder={placeholder}
      minRows={4}
    />
  );
};
const EventForm = () => {
  // const { control, handleSubmit } = useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema3),
  });
  const path = window.location.pathname;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formCard eventForm">
        <div className="headerBlock">
          <h5 className="headerBlock__title">
            {path.includes("busta")
              ? "Busta Page"
              : path.includes("evento")
              ? "Evento"
              : ""}
          </h5>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomSelect
              control={control}
              name="IT"
              label="IT"
              error={errors.IT}
              options={selectOptions}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSelect
              control={control}
              name="IT"
              label="IT"
              error={errors.IT}
              options={selectOptions}
            />
          </Grid>

          {path.includes("busta") && (
            <Grid item xs={12}>
              <Controller
                name="totalHours"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Numero"
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          )}

          {path.includes("busta") ? (
            <Grid item xs={12}>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      {...field}
                      label="Data"
                      inputFormat="YYYY-MM-DD"
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="outlined" />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Grid>
          ) : path.includes("evento") ? (
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  {/* <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                  )}
                /> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="customDatePicker"
                      sx={{ width: "100%", maxWidth: "100%" }}
                      // {...field}
                      label="Da"
                      inputFormat="YYYY-MM-DD"
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="outlined" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  {/* <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                  )}
                /> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="customDatePicker"
                      sx={{ width: "100%", maxWidth: "100%" }}
                      label="A"
                      inputFormat="YYYY-MM-DD"
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="outlined" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          {path.includes("evento") && (
            <>
              <Grid item xs={12}>
                <Controller
                  name="totalHours"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="CustomInputBox"
                      {...field}
                      label="Totale Ore"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="notes"
                  control={control}
                  render={({ field }) => (
                    // <Textarea aria-label="empty textarea" placeholder="Empty" />
                    <EmptyTextarea placeholder="Note" />
                    // <TextareaAutosize
                    //   maxRows={4}
                    //   aria-label="maximum height"
                    //   className="CustomInputBox CustomTextArea"
                    //   // {...field}
                    //   label="Note"
                    //   multiline
                    //   variant="outlined"
                    // />
                  )}
                />
              </Grid>
            </>
          )}

          {path.includes("busta") && (
            <Grid item xs={12}>
              <Controller
                name="totalHours"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Importo totale"
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              className="greenButton "
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                color: "#fff",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              + Aggiungi
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EventForm;
