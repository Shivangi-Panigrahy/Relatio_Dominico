import React from "react"; // Importing React
import { Stack, Chip } from "@mui/material"; // Material-UI components
import CloseIcon from "@mui/icons-material/Close"; // Close icon for chips

const FilterSection = ({ activeFilters, handleRemoveFilter }) => {
  return (
    <Stack direction="row" spacing={1}>
      {Object.keys(activeFilters).map((filterKey) => (
        <Chip
          key={filterKey} // Unique key for each chip
          label={filterKey}
          onDelete={() => handleRemoveFilter(filterKey)} // Remove filter on delete
          deleteIcon={<CloseIcon />}
        />
      ))}
    </Stack>
  );
};

export default FilterSection;
