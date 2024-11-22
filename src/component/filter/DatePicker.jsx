// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";

// export default function DatePickerTime({
//   selectedDate,
//   setSelectedDate,
//   index,
//   handleMinMaxDate,
//   handleFilterSelect,
//   label,
//   minDate,
//   maxDate,
// }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         minDate={minDate}
//         maxDate={maxDate}
//         label={label}
//         className="customDatePicker"
//         value={selectedDate ? dayjs(selectedDate, "DD/MM/YYYY") : null}
//         format="DD/MM/YYYY" // Ensure correct format in MUI DatePicker component
//         onChange={(newValue) => {
//           const field = index === 0 ? "StartDate" : "EndDate";
//           const formattedDate = newValue
//             ? dayjs(newValue).isValid()
//               ? dayjs(newValue).format("DD/MM/YYYY")
//               : null
//             : null;
//           handleMinMaxDate(index, formattedDate);
//           handleFilterSelect(field, formattedDate);
//           return setSelectedDate(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }

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
        // slotProps={{ field: { clearable: true } }}
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


