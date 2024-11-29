import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../component/form/CustomInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomSelect from "../../component/form/CustomSelect";
import { validationSchema3 } from "../../validation/ValidationSchema";
import "./Form.scss";
import CustomCheckbox from "../../component/table/Checkbox";
import { Margin } from "@mui/icons-material";
const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  {
    name: "Tipo di anagrafica (Persona giuridica/fisica)",
    label: "Tipo di anagrafica (Persona giuridica/fisica)",
  },
  { name: "Nome dell’anagrafica", label: "Nome dell’anagrafica" },
  { name: "Codice fiscale", label: "Codice fiscale" },
  { name: "TAG", label: "TAG" },
  { name: "Indirizzo", label: "Indirizzo" },
  { name: "Città", label: "Città" },
  { name: "SDI", label: "SDI" },
  { name: "PEC", label: "PEC" },
];

const AnagraficaForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema3),
  });

  const path = window.location.pathname;

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <div className="headerBlock">
        <h5 className="headerBlock__title">
          {path.includes("colaboratory") ? "Colaboratory" : "Anagrafica"}
        </h5>
        <div className="headerBlock__CutomColorPicker">
          <ul>
            <li className="activeColor">
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <Box className="checkBoxGroup">
        <CustomCheckbox
          control={control}
          name="Lead"
          label="Lead"
          error={errors.Lead}
          inputProps={{ "aria-label": "select all rows" }}
        />
        <CustomCheckbox
          control={control}
          name="Cliente"
          label="Cliente"
          error={errors.Cliente}
          className="checkboxItem"
        />
        <CustomCheckbox
          control={control}
          name="Fornitore"
          label="Fornitore"
          error={errors.Fornitore}
          className="checkboxItem"
        />
        <CustomCheckbox
          control={control}
          name="Collaboratore"
          label="Collaboratore"
          error={errors.Collaboratore}
          className="checkboxItem"
        />
      </Box>
      {inputFields.slice(0, 3).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]}
        />
      ))}
      <Grid container spacing={1}>
        <Grid item xl={4} md={6} sm={12}>
          <CustomSelect
            control={control}
            name="IT"
            label="IT"
            error={errors.IT}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={8} md={6} sm={12}>
          <CustomInput
            control={control}
            name="P.IVA"
            label="P.IVA"
            error={errors.PIVA}
          />
        </Grid>
      </Grid>

      {inputFields.slice(3, 4).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]}
        />
      ))}
      {/* <h6 className="formCard__subTitle">sedelegale </h6> */}
      {inputFields.slice(4, 6).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]}
        />
      ))}
      <Grid container spacing={1}>
        {/* {inputFields.slice(8, 10).map((field) => ( */}
        <Grid item xl={3} md={6} sm={12}>
          <CustomInput
            control={control}
            name="CAP"
            label="CAP"
            error={errors.CAP}
          />
        </Grid>
        <Grid item xl={3} md={6} sm={12}>
          <CustomInput
            control={control}
            name="PR"
            label="PR"
            error={errors.PR}
          />
        </Grid>
        <Grid item xl={6} sm={12}>
          <CustomInput
            control={control}
            name="Regione"
            label="Regione"
            error={errors.Regione}
          />
        </Grid>
        {/* ))} */}
      </Grid>
      {path.includes("colaboratory") === false && (
        <h6 className="formCard__subTitle">Codice fatturazione </h6>
      )}
      {inputFields.slice(6, 9).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]}
        />
      ))}
    </form>
  );
};

export default AnagraficaForm;
