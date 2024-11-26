import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material"; // Import Material-UI components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Icon for dropdown
import "./Searchtable.scss"; // Custom styles

const SimpleDropdown = ({
  label, // Label for the dropdown
  items = [], // Array of items to display in the dropdown
  onSelect, // Callback function to handle item selection
  value, // Currently selected value
  className = "customSearchField outlined-input", // Custom class for styling
}) => {
  return (
    <FormControl fullWidth size="small" className={className}>
      <InputLabel id={`dropdown-label-${label}`}>{label}</InputLabel>
      <Select
        labelId={`dropdown-label-${label}`} // Unique ID for accessibility
        value={value} // Set the selected value
        onChange={(e) => onSelect(e.target.value)} // Handle selection change
        label={label} // Associate label with the select element
        IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
        sx={{
          "& .MuiSelect-select": {
            paddingY: "15.5px", // Vertical padding for the select
          },
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SimpleDropdown;
