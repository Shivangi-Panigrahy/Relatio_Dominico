import React from "react"; // Importing React
import { Stack, Chip } from "@mui/material"; // Material-UI components
import CloseIcon from "@mui/icons-material/Close"; // Close icon for chips
import { ReactComponent as DeleteForever } from "../../assets/dashboardIcons/DeleteForever.svg"; // DeleteForever icon
import "./Searchtable.scss"; // Custom styles
import { Box } from "@mui/material";

const FilterResults = ({
  activeFilters = {},
  onRemoveFilter,
  onClearAllFilters,
  setActiveFilters,
  setStartDate,
  setEndDate,
  applyFilters,
  setSearchFilters,
  setRemoveDate,
  removeDate,
}) => {
  const removeSpecificChip = (filterKey) => {
    const newFilters = { ...activeFilters };
    delete newFilters[filterKey];
    setActiveFilters(newFilters);
    setSearchFilters(newFilters);
  };

  return (
    <Stack
      className="filteringSection"
      direction="row"
      spacing={1}
      alignItems="center"
    >
      {/* Displaying filter results count*/}
      <div className="filteringSection__inner">
        <div className="filteringSection__inner">
          {Object.keys(activeFilters).length > 0 &&
            Object.keys(activeFilters).map((filter) => {
              const filterValue = activeFilters[filter];
              return filterValue ? (
                <div className="filteringSection__inner-box" key={filter}>
                  <p sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                    {filter}
                  </p>
                  <Chip
                    label={filterValue}
                    deleteIcon={
                      <CloseIcon className="closeBtn" fontSize="small" />
                    }
                    onDelete={() => removeSpecificChip(filter)}
                    size="small"
                  />
                </div>
              ) : null;
            })}

          <div className="filteringSection__inner-box errorMessage">
            {Object.keys(activeFilters).length > 0 && (
              <Box
                sx={{ display: "flex" }}
                onClick={() => {
                  setActiveFilters({});
                  setSearchFilters({});
                  setStartDate(null);
                  setEndDate(null);
                  applyFilters();
                  setRemoveDate(true);
                }}
              >
                <DeleteForever />
                <Chip
                  label="Azzera filtri"
                  deleteIcon={<CloseIcon fontSize="small" />}
                  size="small"
                  color="error"
                />
              </Box>
            )}
          </div>
        </div>
      </div>
    </Stack>
  );
};
{
  /* .filter((filter) => filter !== "creatoIl" && filter !== "data")  */
}

export default FilterResults;
