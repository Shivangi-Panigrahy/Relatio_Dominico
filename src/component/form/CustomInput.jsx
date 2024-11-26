import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import "./Custom.scss";
const CustomInput = ({ control, name, label, error }) => (
  <Controller
    render={({ field }) => (
      <TextField
        className="CustomInputBox"
        {...field}
        label={label}
        fullWidth
        error={!!error}
        helperText={error ? error.message : ""}
      />
    )}
    name={name}
    control={control}
    defaultValue=""
  />
);
export default CustomInput;
