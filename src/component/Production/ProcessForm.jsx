import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../component/form/CustomInput";
import { Box, Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import CustomSelect from "../../component/form/CustomSelect";
import { validationSchema3 } from "../../validation/ValidationSchema";
import CustomCheckbox from "../../component/table/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import styled from "@emotion/styled";
// import "./Configurator.scss"

const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  {
    name: "Nome del processo",
    label: "Nome del processo",
  },
  {
    name: "Prodotto finale",
    label: "Prodotto finale",
  },
  {
    name: "Note",
    label: "Note",
  },
  { name: "Nome dell’anagrafica", label: "Nome dell’anagrafica" },
  { name: "Codice fiscale", label: "Codice fiscale" },

  { name: "Indirizzo", label: "Indirizzo" },
  { name: "34.321,99€", label: "34.321,99€" },
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

const ProcessForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema3),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard subImposteForm">
      <div className="headerBlock">
        <h5 className="headerBlock__title">Processo</h5>
      </div>
      <Grid container spacing={"14px"}>
        <Grid item xl={12} md={12} sm={12}>
          {inputFields.slice(0, 1).map((field) => (
            <CustomInput
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              error={errors[field.name]}
            />
          ))}
        </Grid>

        <Grid item xl={12} md={12} sm={12}>
          <CustomSelect
            control={control}
            name="Categoria"
            label="Categoria"
            // error={errors.IT}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
          {inputFields
            .filter((field) => field.name === "Prodotto finale")
            .map((field) => (
              <CustomInput
                key={field.name}
                control={control}
                name={field.name}
                label={field.label}
                error={errors[field.name]}
              />
            ))}

          {/* {inputFields.slice(0, 1).map((field) => (
        // <CustomInput
        //   key={field.name}
        //   control={control}
        //   name={field.name}
        //   label={field.label}
        //   error={errors[field.name]}
        // />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          clearable
          label="Scadenza"
        //   value={dayjs(value, "DD/MM/YYYY")}
        //   minDate={minDate}
        //   maxDate={maxDate}
          format="DD/MM/YYYY"
          className="customDatePicker ScadenzaCustomDatePicker"
        //   onChange={(newValue) => {
        //     const formattedDate = newValue
        //       ? dayjs(newValue).isValid()
        //         ? dayjs(newValue).format("DD/MM/YYYY")
        //         : null
        //       : null;
        //     onDateChange(formattedDate); // Pass the formatted date to parent
        //   }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      ))} */}
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
          <CustomSelect
            control={control}
            name="Centri di ricavo / costo"
            label="Centri di ricavo / costo"
            // error={errors.IT}
            options={selectOptions}
            className="CustomInputBox"
          />
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
          <CustomSelect
            control={control}
            name="Attivo"
            label="Attivo"
            // error={errors.IT}
            options={selectOptions}
            className="CustomInputBox"
          />
        </Grid>
        {/* <Grid item xl={12} md={12} sm={12}>
          {inputFields
            .filter((field) => field.name === "Note")
            .map((field) => (
              <CustomInput
                key={field.name}
                control={control}
                name={field.name}
                label={field.label}
                error={errors[field.name]}
              />
            ))}
        </Grid> */}
        <Grid item xl={12} md={12} sm={12}>
          <EmptyTextarea placeholder="Note" />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#57c700",
            "&:hover": {
              backgroundColor: "#4ba600", // Slightly darker shade for hover effect
            },
          }}
        >
          Aggiungi
        </Button>
      </Box>
    </form>
  );
};

export default ProcessForm;
