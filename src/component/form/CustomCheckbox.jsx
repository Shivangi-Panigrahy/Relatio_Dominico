import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ control, name, label }) => (
  <Controller
    render={({ field }) => (
      <FormControlLabel className="checkboxItem"
        control={
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
            color="primary"
          />
        }
        label={label}
      />
    )}
    name={name}
    control={control}
    defaultValue={false}
  />
);
export default CustomCheckbox;
