import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../component/form/CustomInput";
import { Box, Grid } from "@mui/material";
import CustomCheckbox from "../../component/table/Checkbox";
import { validationSchema2 } from "../../validation/ValidationSchema";
import { ReactComponent as GreenDotsBtn } from "../../assets/GreenDotsBtn.svg";
import { ReactComponent as YellowDotsBtn } from "../../assets/YellowDotsBtn.svg";
import { ReactComponent as RedDotsBtn } from "../../assets/RedDotsBtn.svg";

const Form2 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema2),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <Box>
        <div className="sectionHeader">
          <h5 className="formCard__title">Qualificazione</h5>
          <div className="sectionHeader__dots">
            <RedDotsBtn />
            <YellowDotsBtn />
            <GreenDotsBtn />
          </div>
        </div>
        <Box className="checkBoxGroup">
          <CustomCheckbox
            control={control}
            name="valore1"
            label="Valore1"
            error={errors.valore1}
            inputProps={{ "aria-label": "select all rows" }}
          />
          <CustomCheckbox
            control={control}
            name="valore2"
            label="Valore2"
            error={errors.valore2}
            className="checkboxItem"
          />
          <CustomCheckbox
            control={control}
            name="valore3"
            label="Valore3"
            error={errors.valore3}
            className="checkboxItem"
          />
          <CustomCheckbox
            control={control}
            name="valore4"
            label="Valore4"
            error={errors.valore4}
            className="checkboxItem"
          />
        </Box>

        <CustomInput
          control={control}
          name="valore5"
          label="Valore5"
          error={errors.valore5}
          className="formInput"
        />
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <CustomInput
              control={control}
              name="valore6"
              label="Valore6"
              error={errors.valore6}
              className="formInput"
            />
          </Grid>
          <Grid item xs={3}>
            <CustomInput
              control={control}
              name="valore7"
              label="Valore7"
              error={errors.valore7}
              className="formInput"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              control={control}
              name="valore8"
              label="Valore8"
              error={errors.valore8}
              className="formInput"
            />
          </Grid>
        </Grid>
        <CustomInput
          control={control}
          name="valore9"
          label="Valore9"
          error={errors.valore9}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore10"
          label="Valore10"
          error={errors.valore10}
          className="formInput"
        />
        <h5 className="formCard__title">Contatti</h5>
        <CustomInput
          control={control}
          name="valore11"
          label="Valore11"
          error={errors.valore11}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore12"
          label="Valore12"
          error={errors.valore12}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore13"
          label="Valore13"
          error={errors.valore13}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore14"
          label="Valore14"
          error={errors.valore14}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore15"
          label="Valore15"
          error={errors.valore15}
          className="formInput"
        />

        <CustomInput
          control={control}
          name="valore16"
          label="Valore16"
          error={errors.valore15}
          className="formInput"
        />
      </Box>
    </form>
  );
};

export default Form2;
