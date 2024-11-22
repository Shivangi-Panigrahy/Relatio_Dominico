import React from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Icon for dropdown

const CustomSelect = ({ control, name, label, error, options }) => (
  <Controller
    render={({ field }) => (
      <TextField
        className="CustomSelectBox"
        {...field}
        select
        label={label}
        fullWidth
        error={!!error}
        helperText={error ? error.message : ""}
        IconComponent={KeyboardArrowDownIcon}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    )}
    name={name}
    control={control}
    defaultValue=""
  />
);

export default CustomSelect;
