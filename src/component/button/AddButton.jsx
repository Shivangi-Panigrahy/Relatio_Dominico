import React from "react"; // Importing the React library
import { Button } from "@mui/material"; // Importing the Button component from Material-UI
import AddIcon from "@mui/icons-material/Add"; // Importing the Add icon from Material-UI icons

// Defining the AddButton functional component
export const AddButton = ({title,onClick}) => {
  return (
    <Button
      variant="contained" // Setting the button variant to "contained" for a filled appearance
      startIcon={<AddIcon />} // Adding an icon at the start of the button
      onClick={onClick} // Trigger the passed onClick function
      className="greenButton"
      sx={{background:"57C700"}}
    >
      {title} 
    </Button>
  );
};
