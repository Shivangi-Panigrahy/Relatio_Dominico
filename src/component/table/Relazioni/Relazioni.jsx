// EmployeeTable.jsx
import React, { useState, useEffect } from "react";
import {
    Table,
    TableContainer,
    Paper,
    Box,
    styled,
    Select,
    MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableColumns from "../TableColumns";
import TableRows from "./TableRows";

const FilterSelect = styled(Select)(({ theme }) => ({
    minWidth: 200,
    "& .MuiSelect-select": {
        padding: "8px 14px",
        fontSize: "14px",
        color: theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#e0e0e0",
    },
}));

// Define columns structure
const columns = [
    {
        field: "anagrafica",
        headerName: "Questa anagrafica",
        width: 320
    },
    {
        field: "relationType",
        headerName: "E' di",
        width: 320
    },
    {
        field: "anagraficaName",
        headerName: "Questa anagrafica",
        width: 320
    },
    {
        field: "fromDate",
        headerName: "Dal",
        width: 120
    },
    {
        field: "toDate",
        headerName: "Al",
        width: 120
    },
    {
        field: "actions",
        headerName: "Azioni",
        width: 95
    }
];

const option = ["Modifica", "Elimina", "Duplica"];

const Relazioni = () => {
    const [sortConfig, setSortConfig] = useState({
        field: null,
        direction: null,
    });
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [filters, setFilters] = useState({
        anagrafica: "",
        relationType: "",
        anagraficaName: "",
    });
    const [data, setData] = useState([
        {
            id: 1,
            anagrafica: "Nome dell'anagrafica",
            relationType: "Tipo di relazione (Contatto, dipendete, ecc.)",
            anagraficaName: "Nome dell'anagrafica",
            fromDate: "28/11/2024",
            toDate: "28/11/2024",
        },
        {
            id: 2,
            anagrafica: "Nome dell'anagrafica",
            relationType: "Tipo di relazione (Contatto, dipendete, ecc.)",
            anagraficaName: "Nome dell'anagrafica",
            fromDate: "28/11/2024",
            toDate: "28/11/2024",
        },
        {
            id: 3,
            anagrafica: "Nome dell'anagrafica",
            relationType: "Tipo di relazione (Contatto, dipendete, ecc.)",
            anagraficaName: "Nome dell'anagrafica",
            fromDate: "28/11/2024",
            toDate: "28/11/2024",
        },
        {
            id: 4,
            anagrafica: "Nome dell'anagrafica",
            relationType: "Tipo di relazione (Contatto, dipendete, ecc.)",
            anagraficaName: "Nome dell'anagrafica",
            fromDate: "28/11/2024",
            toDate: "28/11/2024",
        },
    ]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const allRowIds = data.map((row) => row.id);
            setSelectedRows(allRowIds);
            setSelectAll(true);
        } else {
            setSelectedRows([]);
            setSelectAll(false);
        }
    };

    const handleRowClick = (event, id) => {
        event.stopPropagation();
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selectedRows, id];
        } else {
            newSelected = selectedRows.filter((rowId) => rowId !== id);
        }

        setSelectedRows(newSelected);
        setSelectAll(newSelected.length === data.length);
    };

    const handleSort = (field) => {
        let direction = "asc";
        if (sortConfig.field === field && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ field, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig.field) return data;

        return [...data].sort((a, b) => {
            if (a[sortConfig.field] < b[sortConfig.field]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.field] > b[sortConfig.field]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [data, sortConfig]);

    const isSelected = (id) => selectedRows.includes(id);


    return (
        <Paper elevation={0}>
            <TableContainer>
                {sortedData.length === 0 ? (
                    <Box p={2} textAlign="center">
                        No data available
                    </Box>
                ) : (
                    <Table>
                        <TableColumns
                            columns={columns}
                            sortConfig={sortConfig}
                            handleSelectAllClick={handleSelectAllClick}
                            selectAll={selectAll}
                            handleSort={handleSort}
                        />
                        <TableRows
                            data={sortedData}
                            page={0}
                            rowsPerPage={10}
                            selectedRows={selectedRows}
                            handleRowClick={handleRowClick}
                            option={option}
                            hideStatus={true}
                        />

                    </Table>
                )}
            </TableContainer>
        </Paper>
    );
};

export default Relazioni;
