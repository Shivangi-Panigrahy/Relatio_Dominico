import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../component/form/CustomInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomSelect from "../../../component/form/CustomSelect";
import { validationSchema3 } from "../../../validation/ValidationSchema";
import "./subImposteForm.scss";
import CustomCheckbox from "../../../component/table/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  {
    name: "Titolo del’imposta",
    label: "Titolo del’imposta",
  },
  { name: "Nome dell’anagrafica", label: "Nome dell’anagrafica" },
  { name: "Codice fiscale", label: "Codice fiscale" },
 
  { name: "Indirizzo", label: "Indirizzo" },
  { name: "34.321,99€", label: "34.321,99€" },
  
];

const  SubImposteForm  = () => {
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
        <h5 className="headerBlock__title">Imoposta</h5>
      </div>
      <Grid container spacing={'14px'}>
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
            name="Tipo di imposta"
            label="Tipo di imposta"
            error={errors.IT}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
        {inputFields.slice(0, 1).map((field) => (
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
      ))}
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
          <CustomSelect
            control={control}
            name="Anno di rifemento"
            label="Anno di rifemento"
            error={errors.IT}
            options={selectOptions}
            className="CustomInputBox"
          />
        </Grid>
        <Grid item xl={12} md={12} sm={12}>
          <CustomSelect
            control={control}
            name="Rateizzazione"
            label="Rateizzazione"
            error={errors.IT}
            options={selectOptions}
            className="CustomInputBox"
          />
        </Grid>
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
      <Button
      variant="contained" 
      startIcon={<AddIcon />}
      className="greenButton"
      sx={{background:"57C700", width:"100%"}}
    >
      Aggiungi
    </Button>
    </Grid>
      
       </Grid>
    </form>
  );
};

export default SubImposteForm;
