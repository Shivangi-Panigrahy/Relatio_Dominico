import IconButton from "@mui/material/IconButton";
import { MenuItem, Menu } from "@mui/material"; // Material-UI components
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icon for the menu button
import SaveAltIcon from "@mui/icons-material/SaveAlt"; // Icon for saving options
import PaymentsIcon from '@mui/icons-material/Payments';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import { useState } from "react";
const MenuWithPDF = ({ options }) => {
    const menuOptions = [
        { label: "Scarica in pdf", icon: <SaveAltIcon /> },
        { label: "Importa dati", icon: <SaveAltIcon /> }, // Added green color
        { label: "Duplica", icon: <ContentCopyIcon /> },
        { label: "Pagamenti", icon: <PaymentsIcon /> },
        { label: "Centri di costo", icon: <FlipCameraAndroidIcon style={{ color: "red" }} /> },
    ];
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
            >
                {menuOptions.map((option, index) => (
                    <MenuItem
                        key={index}
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
                        onClick={handleMenuClose}
                    >
                        {option.icon}
                        <span style={{ marginLeft: "10px" }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
export default MenuWithPDF;