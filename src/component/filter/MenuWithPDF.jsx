import IconButton from "@mui/material/IconButton";
import { MenuItem, Menu } from "@mui/material"; // Material-UI components
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Icon for the menu button
import {ReactComponent as FileIcon} from "../../assets/simIcon.svg"
import {ReactComponent as DownloadIcon} from "../../assets/downloadIcon.svg"
import {ReactComponent as DeleteIcon} from "../../assets/DeleteIcon.svg"
import {ReactComponent as CoppyIcon} from "../../assets/coppyIcon.svg"
import {ReactComponent as EuroIcon} from "../../assets/EuroIcon.svg"
import {ReactComponent as RedIcon} from "../../assets/redIcon.svg"
import {ReactComponent as GreenIcon} from "../../assets/greenIcon.svg"
import {ReactComponent as UploadIcon} from "../../assets/uploadIcon.svg"
import { useState } from "react";
import "./MenuWithPDF.scss"
const MenuWithPDF = ({ options }) => {
    const menuOptions = [
        { label: "Scarica in pdf", icon: <FileIcon /> },
        { label: "Importa dati", icon: <DownloadIcon/> }, // Added green color
        { label: "Esporta dati", icon: <UploadIcon /> },
        { label: "Elimina", icon: <DeleteIcon />  },
        { label: "Duplica", icon: <CoppyIcon /> },
        { label: "Pagamenti", icon: <EuroIcon/> },
        { label: "Centri di costo", icon: <RedIcon/> },
        { label: "Centri di costo", icon: <GreenIcon/> },
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
                className="pdfmenuoptional"
            >
                {menuOptions.map((option, index) => (
                    <MenuItem
                        key={index}
                        sx={{
                            // color: "#000",
                            // fontSize: "16px",
                            // fontWeight: "400",
                            // minWidth: "170px",
                            // margin: "0 10px",
                            // borderRadius: "6px",
                            "&:hover": {
                                svg: {
                                    color: "#57C700",
                                },
                            },
                        }}
                        onClick={handleMenuClose}
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