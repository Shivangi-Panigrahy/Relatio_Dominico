import IconButton from "@mui/material/IconButton";
import { MenuItem, Menu } from "@mui/material"; // Material-UI components
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icon for the menu button

import { useState } from "react";
import "./MenuWithPDF.scss";

const MenuWithPDF = ({ options, handleDelete,id }) => {
    console.log(options, "menu");

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenuIndex(null);
    };

    const handleMenuClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setOpenMenuIndex(index);
    };

    return (
        <div style={{ marginTop: "0" }}>
            <IconButton
                className="menuIconBtn"
                onClick={(e) => handleMenuClick(e, 0)} // Open menu
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && openMenuIndex === 0} // Open menu for the specific index
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                className="pdfmenuoptional"
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        sx={{
                            "&:hover": {
                                svg: {
                                    color: "#57C700",
                                },
                            },
                        }}
                        onClick={() => {
                            if (option.label === "Elimina") {
                                handleDelete(id); // Call handleDelete for "Elimina"
                            }
                            handleMenuClose(); // Close the menu after handling
                        }}
                    >
                        {option.icon}
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default MenuWithPDF;
