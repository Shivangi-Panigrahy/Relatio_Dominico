import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../component/form/CustomInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomSelect from "../../component/form/CustomSelect";
import { validationSchema } from "../../validation/ValidationSchema";
import "./Form.scss";
const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  { name: "valore1", label: "Valore1" },
  { name: "valore2", label: "Valore2" },
  { name: "valore4", label: "Valore4" },
  { name: "valore5", label: "Valore5" },
  { name: "valore6", label: "Valore6" },
  { name: "valore7", label: "Valore7" },
  { name: "valore8", label: "Valore8" },
  { name: "valore9", label: "Valore9" },
  { name: "valore10", label: "Valore10" },
  { name: "valore11", label: "Valore11" },
  { name: "valore12", label: "Valore12" },
  { name: "valore14", label: "Valore14" },
];

const Form1 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <h5 className="formCard__title">Anagrafica</h5>
      {inputFields.slice(0, 2).map((field) => (
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
            name="valore3"
            label="Valore3"
            error={errors.valore3}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={8} md={6} sm={12}>
          <CustomInput
            control={control}
            name="valore4"
            label="Valore4"
            error={errors.valore4}
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
      <h5 className="formCard__title">Sedi</h5>
      <h6 className="formCard__subTitle">sedelegale </h6>
      {inputFields.slice(4, 5).map((field) => (
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
            name="valore7"
            label="Valore7"
            error={errors.valore7}
          />
        </Grid>
        <Grid item xl={3} md={6} sm={12}>
          <CustomInput
            control={control}
            name="valore8"
            label="Valore8"
            error={errors.valore8}
          />
        </Grid>
        <Grid item xl={6} sm={12}>
          <CustomInput
            control={control}
            name="valore9"
            label="Valore9"
            error={errors.valore9}
          />
        </Grid>
        {/* ))} */}
      </Grid>
      <h6 className="formCard__subTitle">Codice fatturazione </h6>
      <Grid container spacing={1}>
        <Grid item xl={8} md={6} sm={12}>
          <CustomInput
            control={control}
            name="valore10"
            label="Valore10"
            error={errors.valore10}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="valore11"
            label="Valore11"
            error={errors.valore11}
          />
        </Grid>
      </Grid>

      <h5 className="formCard__title">Dati bancari</h5>
      <h6 className="formCard__subTitle">Conto corrente </h6>
      <CustomInput
        control={control}
        name="valore12"
        label="Valore12"
        error={errors.valore12}
      />
      <Grid container spacing={1}>
        <Grid item xl={4} md={6} sm={12}>
          <CustomSelect
            control={control}
            name="valore13"
            label="Valore13"
            error={errors.valore13}
            options={selectOptions}
          />
        </Grid>
        <Grid item xl={8} md={6} sm={12}>
          <CustomInput
            control={control}
            name="valore14"
            label="Valore14"
            error={errors.valore14}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Form1;
