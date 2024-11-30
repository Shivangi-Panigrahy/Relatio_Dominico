import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    IconButton,
    Menu,
    MenuItem,
    styled,

} from "@mui/material";
import "./ProductTable.scss";
import { MoreVert } from "@mui/icons-material";
import { ReactComponent as ProductIcon } from "../../assets/ProductIcon.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: "12px 16px",
    fontSize: "0.875rem",
    borderBottom: "1px solid #e0e0e0",
    color: theme.palette.text.secondary,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
        backgroundColor: "#fafafa",
    },
    cursor: "pointer",
}));

const ProductTable = () => {
    const sampleData = [
        {
            id: "1",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
        {
            id: "2",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
        {
            id: "3",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
        {
            id: "4",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
        {
            id: "5",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
        {
            id: "6",
            img: "",
            code: "MK/532-245-234-0",
            name: "Nome del prodotto",
            category: "Linea A",
            unit: "Pezzi",
            quantity: 4,
        },
    ];
    const [selectedServices, setSelectedServices] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuService, setMenuService] = useState(null);

    const toggleService = (serviceId) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const toggleAll = () => {
        setSelectedServices((prev) =>
            prev.length === sampleData.length
                ? []
                : sampleData.map((service) => service.id)
        );
    };

    const handleMenuOpen = (event, serviceId) => {
        setAnchorEl(event.currentTarget);
        setMenuService(serviceId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuService(null);
    };

    return (
        <TableContainer className="insearchTable" component={Paper}>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell padding="checkbox">
                            <Checkbox
                                checked={selectedServices.length === sampleData.length}
                                onChange={toggleAll}
                            />
                        </StyledTableCell>
                        <StyledTableCell>Img</StyledTableCell>
                        <StyledTableCell>Cod.</StyledTableCell>
                        <StyledTableCell>Nome del prodotto</StyledTableCell>
                        <StyledTableCell>Categoria</StyledTableCell>
                        <StyledTableCell>U/M</StyledTableCell>
                        <StyledTableCell>Q.tà</StyledTableCell>
                        <StyledTableCell>Azioni</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {sampleData.map((service) => (
                        <StyledTableRow key={service.id}>
                            <StyledTableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedServices.includes(service.id)}
                                    onChange={() => toggleService(service.id)}
                                />
                            </StyledTableCell>
                            <StyledTableCell>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <ProductIcon
                                        style={{
                                            width: "42px",
                                            height: "42px",
                                        }}
                                    />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell>{service.code}</StyledTableCell>
                            <StyledTableCell>{service.name}</StyledTableCell>
                            <StyledTableCell>{service.category}</StyledTableCell>
                            <StyledTableCell>{service.unit}</StyledTableCell>
                            <StyledTableCell>{service.quantity}</StyledTableCell>
                            <StyledTableCell>
                                <IconButton
                                    onClick={(event) => handleMenuOpen(event, service.id)}
                                >
                                    <MoreVert />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
            </Menu>
        </TableContainer>
    );
};

export default ProductTable;
