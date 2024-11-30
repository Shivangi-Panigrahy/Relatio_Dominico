import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../../component/form/CustomInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomSelect from "../../../../component/form/CustomSelect";
import { validationSchema4 } from "../../../../validation/ValidationSchema";
import "./Form.scss";

const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const inputFields = [
  { name: "Nome del prodotto", label: "Nome del prodotto" },
  {
    name: "Categoria",
    label: "Categoria",
  },
  { name: "Codice Prodotto", label: "Codice Prodotto" },
  { name: "Codice EAN", label: "Codice EAN" },
  { name: "Centri di ricavo/costo", label: "Centri di ricavo/costo" },
  { name: "Prz.m.vendita", label: "Prz.m.vendita" },
  { name: "Prz.m.acquisto", label: "Prz.m.acquisto" },
  { name: "Utile medio", label: "Utile medio" },
  { name: "IVA", label: "IVA" },
  { name: "Attivo", label: "Attivo" },
  { name: "Note", label: "Note" },
];

const CataloghiForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema4),
  });

  const onSubmit = (data) => console.log(data);

  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index when a list item is clicked
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <div className="headerBlock">
        {/* Add condition for each page like page header */}
        <h5 className="headerBlock__title">Prodotto</h5>
      </div>
      {inputFields.slice(0, 1).map((field) => (
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
          name="Categoria"
          label="Categoria"
          error={errors.Categoria?.message}
          options={selectOptions}
        />
      </Grid>

      {inputFields.slice(2, 4).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]?.message}
        />
      ))}
      <Grid container spacing={1}>
        {/* {inputFields.slice(8, 10).map((field) => ( */}
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Prz.m.vendita"
            label="Prz.m.vendita"
            error={errors["Prz.m.vendita"]?.message}
          />
        </Grid>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Prz.m.acquisto"
            label="Prz.m.acquisto"
            error={errors["Prz.m.acquisto"]?.message}
          />
        </Grid>
        <Grid item xl={4} md={6} sm={12}>
          <CustomInput
            control={control}
            name="Utile medio"
            label="Utile medio"
            error={errors["Utile medio"]?.message}
          />
        </Grid>
        {/* ))} */}
      </Grid>
      {/* <h6 className="formCard__subTitle">Codice fatturazione </h6> */}
      {inputFields.slice(8, 11).map((field) => (
        <CustomInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          error={errors[field.name]?.message}
        />
      ))}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        style={{ backgroundColor: "#57c700" }}
      >
        + Aggiungi
      </Button>
    </form>
  );
};

export default CataloghiForm;
