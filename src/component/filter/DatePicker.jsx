import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

export default function DatePickerTime({
  label,
  value,
  minDate,
  maxDate,
  onDateChange,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        clearable
        label={label}
        value={value ? dayjs(value, "DD/MM/YYYY") : null}
        minDate={minDate}
        maxDate={maxDate}
        format="DD/MM/YYYY"
        className="customDatePicker"
        onChange={(newValue) => {
          const formattedDate = newValue
            ? dayjs(newValue).isValid()
              ? dayjs(newValue).format("DD/MM/YYYY")
              : null
            : null;
          onDateChange(formattedDate); // Pass the formatted date to parent
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
