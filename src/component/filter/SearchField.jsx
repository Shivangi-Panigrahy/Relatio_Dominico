import React from "react";
import { Paper, TextField, InputAdornment } from "@mui/material"; // Import Material-UI components
import SearchIcon from "@mui/icons-material/Search"; // Icon for the search field
import "./Searchtable.scss"; // Custom styles

const SearchField = ({
  value, // Current value of the search field
  onChange, // Function to handle input changes
  placeholder = "Ricerca libera", // Placeholder text
  className = "searchBoxInner", // Custom class for styling
}) => {
  return (
    <Paper
      className={className} // Apply custom class
      elevation={0} // No shadow effect
      sx={{
        display: "flex", // Flexbox for layout
        alignItems: "center", // Center items vertically
        backgroundColor: "white", // Background color
        borderRadius: "4px", // Rounded corners
        flexGrow: 1, // Allow to grow and fill space
        maxWidth: "240px", // Maximum width of the search box
        width: "100%", // Full width
      }}
    >
      <InputAdornment position="start" sx={{ pl: 1 }}>
        <SearchIcon fontSize="small" /> {/* Search icon on the left */}
      </InputAdornment>
      <TextField
        variant="standard" // Standard text field variant
        size="small" // Small size for compact design
        placeholder={placeholder} // Set placeholder text
        value={value} // Bind input value
        onChange={onChange} // Handle input changes
        fullWidth // Full width of the container
        InputProps={{
          disableUnderline: true, // Remove underline from input
          style: { paddingTop: "2px", paddingBottom: "2px" }, // Padding for input text
        }}
      />
    </Paper>
  );
};

export default SearchField;
