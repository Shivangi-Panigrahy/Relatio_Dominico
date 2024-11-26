import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material"; // Material-UI components
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icon for menu button
import SaveAltIcon from "@mui/icons-material/SaveAlt"; // Icon for menu items

const MenuWithItems = ({
  anchorEl, // Element to anchor the menu
  openMenuIndex, // Index to track which menu is open
  handleMenuClick, // Function to handle menu opening
  handleMenuClose, // Function to handle menu closing
}) => {
  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon /> {/* Button to trigger the menu */}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && openMenuIndex === 0} // Determine if the menu is open
        onClose={handleMenuClose} // Close the menu
      >
        <MenuItem onClick={handleMenuClose}>
          <SaveAltIcon /> {/* Icon for first menu item */}
          Valore 1
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SaveAltIcon /> {/* Icon for second menu item */}
          Valore 2
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuWithItems;
