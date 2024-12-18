import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../../component/form/CustomInput";
import { Box, Button, Grid, Typography, TextField, Checkbox, FormControlLabel, InputAdornment } from "@mui/material";
import CustomSelect from "../../../../component/form/CustomSelect";
import { validationSchema4 } from "../../../../validation/ValidationSchema";
import { ReactComponent as Mese } from "../../../../assets/Mese.svg";
import "./Form.scss";

const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  {
    name: "Titolo",
    label: "Titolo",
  },
  { name: "Categorie", label: "Categorie" },
  { name: "Committente", label: "Committente" },
  { name: "Team Leader", label: "Team Leader" },
  { name: "Centro di ricavo", label: "Centro di ricavo" },
  { name: "Target economico", label: "Target economico" },
  { name: "Scadenza", label: "Scadenza" },
  { name: "Note", label: "Note" },
  { name: "Indirizzo", label: "Indirizzo" },
  { name: "Citta", label: "Citta" },
  { name: "CAP", label: "CAP" },
  { name: "PR", label: "PR" },
  { name: "Regione", label: "Regione" },
];

const ProgettoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema4),
  });

  const onSubmit = (data) => console.log(data);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <div className="headerBlock">
        <h5 className="headerBlock__title">Progetto</h5>
      </div>
      {inputFields.slice(0, 2).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]}
        />
      ))}

      <Grid style={{ marginBottom: "14px" }}>
        <CustomSelect
          control={control}
          name="Committente"
          label="Committente"
          error={errors.Committente?.message}
          options={selectOptions}
        />
      </Grid>

      <Grid style={{ marginBottom: "14px" }}>
        <CustomSelect
          control={control}
          name="Team Leader"
          label="Team Leader"
          error={errors.Committente?.message}
          options={selectOptions}
        />
      </Grid>

      <Grid style={{ marginBottom: "14px" }}>
        <CustomSelect
          control={control}
          name="Centro di ricavo"
          label="Centro di ricavo"
          error={errors.Committente?.message}
          options={selectOptions}
        />
      </Grid>
      <Grid container spacing={1}>
        <Grid item xl={6} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Target economico"
            label="Target economico"
            error={errors["Target economico"]?.message}
          />
        </Grid>
        {/* <Grid item xl={6} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Scadenza"
            label="Scadenza"
            error={errors["Scadenza"]?.message}
          />
        </Grid> */}
        <Grid item xl={6} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Scadenza"
            label="Scadenza"
            error={errors["Scadenza"]?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Mese />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controller
            name="Note"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Note"
                multiline
                rows={4}
                fullWidth
                error={!!errors.Note}
                helperText={errors.Note?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Controller
                name="Location"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Location"
          />
        </Grid>
      </Grid>

      {inputFields.slice(8, 10).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]?.message}
        />
      ))}


      <Grid container spacing={1}>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="CAP"
            label="CAP"
            error={errors["CAP"]?.message}
          />
        </Grid>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="PR"
            label="PR"
            error={errors["PR"]?.message}
          />
        </Grid>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Regione"
            label="Regione"
            error={errors["Regione"]?.message}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProgettoForm;
