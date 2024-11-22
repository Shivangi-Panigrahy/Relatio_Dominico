import React, { useState, useEffect, useCallback, useMemo } from "react"; // React and hooks
import { Autocomplete, Box, Grid, Stack, TextField } from "@mui/material"; // Material-UI components
import DatePickerTime from "./DatePicker"; // Date picker component
import SearchField from "./SearchField"; // Search input field
import SearchableDropdown from "./SearchableDropdown"; // Dropdown with search capability
import FilterResults from "./FilterResults"; // Component for displaying active filters
import SimpleDropdown from "./SimpleDropdown"; // Simple dropdown component
import "./Searchtable.scss"; // Custom styles
import dayjs from "dayjs";
import MenuWithOptions from "./MenuWithOptions";
const SearchTable = ({
  tabData,
  onValoreFilter,
  onSearch,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  applyFilters,
  setSearchFilters,
  activeFilters,
  setActiveFilters,
  searchFilter,
  form,
  invoice = false,
}) => {
  // State hooks for managing component state
  // Second date selection
  const [searchTerm, setSearchTerm] = useState(""); // Current search term
  // const [activeFilters, setActiveFilters] = useState({}); // Active filters
  const [minMaxData, setMinMaxDate] = useState(null);
  const [removeDate, setRemoveDate] = useState(false);
  const options = ["Valore 1", "Valore 2"];
  // Reset all filters and call onSearch
  const resetFilters = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm("");
    setActiveFilters({});
    onSearch({});
  }, [onSearch, setActiveFilters]);
  // Make reset function available globally
  useEffect(() => {
    if (window.searchTableReset) {
      window.searchTableReset.current = resetFilters;
    } else {
      window.searchTableReset = { current: resetFilters };
    }
  }, [resetFilters]);
  useEffect(() => {
    if (removeDate) {
      setStartDate(null);
      setEndDate(null);
      setRemoveDate(false);
    }
  }, [removeDate, setStartDate, setEndDate]);
  // Extract unique values from the specified field
  const extractUniqueValues = useMemo(
    () => (field) => {
      if (!tabData) return [];
      const allValues = Array.isArray(tabData)
        ? tabData.map((item) => item[field])
        : Object.values(tabData)
            .flat()
            .map((item) => item[field]);
      return [...new Set(allValues.filter(Boolean))];
    },
    [tabData]
  );
  // Handle selection of filters
  const handleFilterSelect = useCallback(
    (field, value) => {
      const newFilters = { ...activeFilters, [field]: value };
      if (!value) delete newFilters[field];
      setActiveFilters(newFilters);
      onSearch({ ...newFilters, searchTerm });
    },
    [activeFilters, onSearch, searchTerm]
  );
  // Handle changes in the search input
  const handleSearchChange = useCallback(
    (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearch({ ...activeFilters, searchTerm: term });
    },
    [activeFilters, onSearch]
  );
  // Clear all filters and search term
  const handleClearAllFilters = useCallback(() => {
    setActiveFilters({});
    setSearchTerm("");
    setStartDate(null);
    setEndDate(null);
    onSearch({});
  }, [onSearch, setActiveFilters]);
  //get min and max date
  const handleMinMaxDate = useCallback((index, date) => {
    const formattedDate = dayjs(date, "DD/MM/YYYY");
    setMinMaxDate((prev) => ({
      ...prev,
      [index === 0 ? "minDate" : "maxDate"]: formattedDate,
    }));
  }, []);
  const renderFilters = () => (
    <>
      <DatePickerTime
        label="Data"
        value={startDate}
        minDate={null}
        maxDate={minMaxData?.minDate}
        onDateChange={(formattedDate) => {
          handleMinMaxDate(0, formattedDate);
          handleFilterSelect("StartDate", formattedDate);
          setStartDate(formattedDate);
        }}
      />
      <DatePickerTime
        label="Data"
        value={endDate}
        minDate={minMaxData?.minDate}
        maxDate={null}
        onDateChange={(formattedDate) => {
          handleMinMaxDate(1, formattedDate);
          handleFilterSelect("EndDate", formattedDate);
          setEndDate(formattedDate);
        }}
      />

      <Autocomplete
        disablePortal
        options={extractUniqueValues("valore")} // Provide your unique values here
        value={activeFilters["valore"] || ""} // Set the selected value
        onChange={(event, newValue) => handleFilterSelect("valore", newValue)} // Update the selected value
        renderInput={(params) => <TextField {...params} label="Input" />} // Customize the label
        // sx={{ width: 300 }} // Optional styling
      />
      <Autocomplete
        disablePortal
        options={extractUniqueValues("numero")} // Provide your unique values here
        value={activeFilters["numero"] || ""} // Set the selected value
        onChange={(event, newValue) => handleFilterSelect("numero", newValue)} // Update the selected value
        renderInput={(params) => <TextField {...params} label="Input" />} // Customize the label
        // sx={{ width: 300 }} // Optional styling
      />
      <Autocomplete
        disablePortal
        options={extractUniqueValues("stato")} // Provide your unique values here
        value={activeFilters["stato"] || ""} // Set the selected value
        onChange={(event, newValue) => handleFilterSelect("stato", newValue)} // Update the selected value
        renderInput={(params) => <TextField {...params} label="Input" />} // Customize the label
        // sx={{ width: 300 }} // Optional styling
      />
      {/* <SearchableDropdown
        label={"Input"}
        items={extractUniqueValues("valore")}
        value={activeFilters["valore"] || ""}
        onSelect={(value) => handleFilterSelect("valore", value)}
      /> */}
      {/* <SearchableDropdown
        label={"Input"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
      <SimpleDropdown
        label={"Input"}
        items={extractUniqueValues("stato")}
        value={activeFilters["stato"] || ""}
        onSelect={(value) => handleFilterSelect("stato", value)}
      /> */}

      {/* <SearchField
        value={searchTerm}
        onChange={handleSearchChange} // Handle search input changes
      /> */}
      <div style={{ marginTop: "5px" }}>
        {form !== "form1" && <MenuWithOptions options={options} />}
      </div>
    </>
  );
  const renderInvoiceFilters = () => (
    <>
      <DatePickerTime
        label="Data"
        value={startDate}
        minDate={null}
        maxDate={minMaxData?.minDate}
        onDateChange={(formattedDate) => {
          handleMinMaxDate(0, formattedDate);
          handleFilterSelect("StartDate", formattedDate);
          setStartDate(formattedDate);
        }}
      />
      <SearchableDropdown
        label={"Numerazione"}
        items={extractUniqueValues("valore")}
        value={activeFilters["valore"] || ""}
        onSelect={(value) => handleFilterSelect("valore", value)}
      />
      <SearchableDropdown
        label={"Centri di ricavo"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
      <SearchableDropdown
        label={"Progetto"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
      <SearchableDropdown
        label={"Input"}
        items={extractUniqueValues("valore")}
        value={activeFilters["valore"] || ""}
        onSelect={(value) => handleFilterSelect("valore", value)}
      />
      <SearchableDropdown
        label={"Cliente"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
    </>
  );
  return (
    <Box className={invoice ? `invoiceFilter fattura` : `invoiceFilter`}>
      <Stack spacing={2}>
        {form === "form1" ? (
          <>{renderFilters()}</>
        ) : (
          <>{invoice ? renderInvoiceFilters() : renderFilters()}</>
        )}
        {/* <Stack
          className="filteringSection"
          direction="row"
          spacing={1}
          alignItems="center"
        > */}
        {/* <p sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
            <span>{Object.keys(activeFilters).length} </span> Risultati trovati
          </p> */}
        {/* <FilterResults
            activeFilters={activeFilters}
            onClearAllFilters={handleClearAllFilters}
            setActiveFilters={setActiveFilters}
            applyFilters={applyFilters}
            setSearchFilters={setSearchFilters}
            removeDate={removeDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setRemoveDate={setRemoveDate}
          /> */}
        {/* </Stack> */}
      </Stack>
    </Box>
  );
};
export default SearchTable;
