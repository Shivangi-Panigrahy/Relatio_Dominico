import React, { useState, useRef, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Searchtable.scss";

const SearchableDropdown = ({
  label,
  items = [],
  onSelect,
  value,
  className = "customSearchField",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const handleSearch = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    String(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Focus on the search input field when the dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus(); // Focus the search field when the dropdown opens
    }
  }, [isOpen]);

  // Prevent keypress events from propagating and controlling the default Select item focus behavior
  const handleKeyDown = (event) => {
    event.stopPropagation();
  };

  return (
    <FormControl
      sx={{ minWidth: "259px" }}
      fullWidth
      size="small"
      className={className}
    >
      <InputLabel id={`dropdown-label-${label}`}>{label}</InputLabel>
      <Select
        open={isOpen}
        labelId={`dropdown-label-${label}`}
        value={value}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        onChange={handleChange}
        label={label}
        className="outlined-input"
        fullWidth
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          "& .MuiSelect-select": {
            padding: "15.5px",
          },
        }}
        // Prevent keyboard events from selecting items while typing
        onKeyDown={handleKeyDown}
      >
        <ListSubheader>
          <TextField
            size="small"
            inputRef={searchInputRef}
            onChange={handleSearch}
            value={searchTerm}
            fullWidth
            autoFocus
            sx={{
              maxWidth: "220px",
              "& .MuiOutlinedInput-root": {
                "& .MuiInputBase-input": {
                  padding: "5px 10px",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            // Prevent keyboard events from selecting items while typing
            onKeyDown={handleKeyDown}
          />
        </ListSubheader>
        {filteredItems.map((item, index) => (
          <MenuItem
            key={index}
            value={item}
            sx={{
              color: "#000",
              fontSize: "16px",
              fontWeight: "400",
              minWidth: "170px",
              margin: "0 10px",
              borderRadius: "6px",
              "&:hover": {
                svg: {
                  color: "#57C700",
                },
              },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SearchableDropdown;
