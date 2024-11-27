import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  IconButton,
  Typography,
  Box,
  styled,
  Select,
  MenuItem,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchTable from "../filter/Searchtable";
import "./table.scss";
import dayjs from "dayjs";
import TableColumns from "./TableColumns";
import TableRows from "./TableRows";
import { Padding } from "@mui/icons-material";

const Avatar = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: "6px",
  backgroundColor: theme.palette.grey[300],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  fontSize: "0.75rem",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "20px",
}));

const CustomPagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
      <Typography variant="body2" color="text.secondary" mr={2}>
        Righe per pagina:
      </Typography>
      <Select
        value={rowsPerPage}
        onChange={onRowsPerPageChange}
        size="small"
        sx={{ mr: 2, fontSize: "0.875rem" }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <Typography variant="body2" color="text.secondary" mr={2}>
        {`${page * rowsPerPage + 1}-${Math.min(
          (page + 1) * rowsPerPage,
          count
        )} di ${count}`}
      </Typography>
      <IconButton
        onClick={(e) => onPageChange(e, page - 1)}
        disabled={page === 0}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

const CustomTable = ({ data, form, columns, navData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: null,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [valoreFilter, setValoreFilter] = useState("");
  const [searchFilters, setSearchFilters] = useState({});
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows
  const [selectAll, setSelectAll] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const option = ["Option 1", "Option 2", "Option 3"];

  const handleTabChange = React.useCallback(() => {
    setPage(0);
    setRowsPerPage(5);
    setSortConfig({
      field: null,
      direction: null,
    });
  }, []);

  useEffect(() => {
    const handleReset = () => {
      handleTabChange();
    };

    window.addEventListener("tabChange", handleReset);
    return () => window.removeEventListener("tabChange", handleReset);
  }, [handleTabChange]);
  const applyFilters = () => {
    let result = data;
    // Text search filter

    if (searchFilters?.searchTerm) {
      const term = searchFilters.searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.titolo.toLowerCase().includes(term) ||
          item.clienti.toLowerCase().includes(term) ||
          item.fornitori.toLowerCase().includes(term)
      );
    }
    if (searchFilters.searchTerm == "") {
      result = data;
    }

    // Check if searchFilters.data exists before proceeding with filtering
    if (searchFilters.StartDate && searchFilters.EndDate) {
      // Parse the start and end dates using Day.js in the format "DD/MM/YYYY"
      const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY"); // Start date from search filters
      const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY"); // End date from search filters

      // Proceed only if both parsed dates are valid
      if (startDate.isValid() && endDate.isValid()) {
        // Filter the result set based on the item dates
        result = result?.filter((item) => {
          // Parse the date from the item using Day.js
          const itemDate = dayjs(item?.creatoIl, "DD/MM/YYYY"); // Date field in each item

          // Check if the parsed item date is valid
          return (
            itemDate.isValid() && // Ensure item date is a valid date
            itemDate.isBetween(startDate, endDate, null, "[]") // Check if the item date falls within the specified range (inclusive)
          );
        });
      }
    }

    // Value filters
    if (searchFilters.valore) {
      result = result.filter((item) => item.valore === searchFilters.valore);
    }
    if (searchFilters.numero) {
      result = result.filter((item) => item.numero === searchFilters.numero);
    }

    if (searchFilters.Tipo) {
      result = result.filter((item) => item.Tipo === searchFilters.Tipo);
    }
    if (searchFilters.Gruppo) {
      result = result.filter((item) => item.Gruppo === searchFilters.Gruppo);
    }
    // Status and client filters
    if (searchFilters.stato) {
      result = result.filter((item) => item.stato === searchFilters.stato);
    }
    if (searchFilters.clienti) {
      result = result.filter((item) => item.clienti === searchFilters.clienti);
    }
    if (searchFilters.ragioneSociale) {
      result = result.filter(
        (item) => item.ragioneSociale === searchFilters.ragioneSociale
      );
    }
    if (searchFilters.categoria) {
      result = result.filter(
        (item) => item.categoria === searchFilters.categoria
      );
    }
    if (searchFilters.tipologia) {
      result = result.filter(
        (item) => item.tipologia === searchFilters.tipologia
      );
    }
    if (searchFilters.peso) {
      result = result.filter((item) => item.peso === searchFilters.peso);
    }

    setFilteredData(result);
    setPage(0);
  };
  useEffect(() => {
    applyFilters();
  }, [data, searchFilters]);

  const handleSort = (field) => {
    let direction = "asc";
    if (sortConfig.field === field && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ field, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.field) return filteredData;

    const sortedArray = [...filteredData]?.sort((a, b) => {
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  }, [filteredData, sortConfig]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleValoreFilter = (selectedValore) => {
    setValoreFilter(selectedValore);
    setPage(0);
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  // Track the select all checkbox
  const isSelected = (id) => selectedRows.includes(id);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      // Select all rows
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(allRowIds);
      setSelectAll(true);
    } else {
      // Deselect all rows
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleRowClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // Add row to selected
      newSelected = [...selectedRows, id];
    } else {
      // Remove row from selected
      newSelected = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelected);
    setSelectAll(newSelected.length === data.length); // Check if all rows are selected
  };

  const statuses = ["Approvato", "In Attesa", "Completato", "Rifiutato"];

  const [currentStatuses, setCurrentStatuses] = useState(
    sortedData.map((item) => item.stato || statuses[0])
  );

  // Function to handle status change on click
  const handleStatusClick = (index) => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    // Update only the status for the clicked row
    setCurrentStatuses((prevStatuses) =>
      prevStatuses.map((status, i) => (i === index ? randomStatus : status))
    );
  };
  const effectiveColumns = (() => {
    if (form === "form2") {
      return columns.filter(
        (column) => column.field !== "titolo" && column.field !== "fornitori"
      );
    } else if (form === "form1") {
      return columns.filter(
        (column) =>
          column.field !== "titolo" &&
          column.field !== "fornitori" &&
          column.field !== "clienti"
      );
    } else {
      return columns; // Show all columns for other forms
    }
  })();

  return (
    <>
      <>
        {!window.location.href.includes('/acquisti/fornitori/Documenti') &&
          !window.location.href.includes('/vendite/sub-lead/Documenti') &&
          form !== "form2" ? (
          <SearchTable
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            tabData={data}
            onValoreFilter={handleValoreFilter}
            onSearch={handleSearch}
            applyFilters={applyFilters}
            setSearchFilters={setSearchFilters}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            searchFilters={searchFilters}
            form={form}
            navData={navData}
          />
        ) : null}
      </>

      <Paper elevation={0}>
        <TableContainer className="customtable">
          <Table sx={{ minWidth: 650 }} aria-label="custom table">
            <TableColumns
              columns={effectiveColumns}
              sortConfig={sortConfig}
              handleSelectAllClick={handleSelectAllClick}
              selectAll={selectAll}
              handleSort={handleSort}
              form={form}
              navData={navData}
            />
            <TableRows
              data={sortedData}
              page={page}
              rowsPerPage={rowsPerPage}
              isSelected={isSelected}
              handleRowClick={handleRowClick}
              handleStatusClick={handleStatusClick}
              currentStatuses={currentStatuses}
              searchFilters={searchFilters}
              option={option}
              form={form}
              navData={navData}
            />
          </Table>
        </TableContainer>

        {sortedData?.length > 0 && (
          <CustomPagination
            count={sortedData?.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </>
  );
};

export default CustomTable;

// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableContainer,
//   Paper,
//   IconButton,
//   Typography,
//   Box,
//   styled,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import SearchTable from "../filter/Searchtable";
// import "./table.scss";
// import dayjs from "dayjs";
// import TableColumns from "./TableColumns";
// import TableRows from "./TableRows";

// const Avatar = styled(Box)(({ theme }) => ({
//   width: 24,
//   height: 24,
//   borderRadius: "6px",
//   backgroundColor: theme.palette.grey[300],
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: theme.palette.common.white,
//   fontSize: "0.75rem",
//   fontWeight: "bold",
//   fontSize: '12px',
//   lineHeight: '20px',
// }));

// const columns = [
//   { field: "doc", headerName: "Doc", width: 70 },
//   { field: "numero", headerName: "Numero", width: 100 },
//   { field: "creatoIl", headerName: "Creato il", width: 100 },
//   { field: "titolo", headerName: "Titolo", width: 150 },
//   { field: "clienti", headerName: "Clienti", width: 180 },
//   { field: "fornitori", headerName: "Fornitori", width: 180 },
//   { field: "data", headerName: "Data", width: 100 },
//   { field: "modDa", headerName: "Mod. da", width: 80 },
//   { field: "valore", headerName: "Valore", width: 120 },
//   { field: "autore", headerName: "Autore", width: 80 },
//   { field: "stato", headerName: "Stato", width: 100 },
//   { field: "azioni", headerName: "Azioni", width: 100 },
// ];

// const CustomPagination = ({
//   count,
//   page,
//   rowsPerPage,
//   onPageChange,
//   onRowsPerPageChange,
// }) => {
//   return (
//     <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
//       <Typography variant="body2" color="text.secondary" mr={2}>
//         Righe per pagina:
//       </Typography>
//       <Select
//         value={rowsPerPage}
//         onChange={onRowsPerPageChange}
//         size="small"
//         sx={{ mr: 2, fontSize: "0.875rem" }}
//       >
//         <MenuItem value={5}>5</MenuItem>
//         <MenuItem value={10}>10</MenuItem>
//         <MenuItem value={25}>25</MenuItem>
//       </Select>
//       <Typography variant="body2" color="text.secondary" mr={2}>
//         {`${page * rowsPerPage + 1}-${Math.min(
//           (page + 1) * rowsPerPage,
//           count
//         )} di ${count}`}
//       </Typography>
//       <IconButton
//         onClick={(e) => onPageChange(e, page - 1)}
//         disabled={page === 0}
//       >
//         <KeyboardArrowLeftIcon />
//       </IconButton>
//       <IconButton
//         onClick={(e) => onPageChange(e, page + 1)}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//       >
//         <KeyboardArrowRightIcon />
//       </IconButton>
//     </Box>
//   );
// };

// const CustomTable = ({ data, form }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [sortConfig, setSortConfig] = useState({
//     field: null,
//     direction: null,
//   });
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [filteredData, setFilteredData] = useState(data);
//   const [valoreFilter, setValoreFilter] = useState("");
//   const [searchFilters, setSearchFilters] = useState({});
//   const [selectedRows, setSelectedRows] = useState([]); // Track selected rows
//   const [selectAll, setSelectAll] = useState(false);
//   const [activeFilters, setActiveFilters] = useState({});
//   const option = ["Option 1", "Option 2", "Option 3"];

//   const handleTabChange = React.useCallback(() => {
//     setPage(0);
//     setRowsPerPage(5);
//     setSortConfig({
//       field: null,
//       direction: null,
//     });
//   }, []);

//   useEffect(() => {
//     const handleReset = () => {
//       handleTabChange();
//     };

//     window.addEventListener("tabChange", handleReset);
//     return () => window.removeEventListener("tabChange", handleReset);
//   }, [handleTabChange]);
//   const applyFilters = () => {
//     let result = data;
//     // Text search filter

//     if (searchFilters?.searchTerm) {
//       const term = searchFilters.searchTerm.toLowerCase();
//       result = result.filter(
//         (item) =>
//           item.titolo.toLowerCase().includes(term) ||
//           item.clienti.toLowerCase().includes(term) ||
//           item.fornitori.toLowerCase().includes(term)
//       );
//     }
//     if (searchFilters.searchTerm == "") {
//       result = data;
//     }

//     // Check if searchFilters.data exists before proceeding with filtering
//     if (searchFilters.StartDate && searchFilters.EndDate) {
//       // Parse the start and end dates using Day.js in the format "DD/MM/YYYY"
//       const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY"); // Start date from search filters
//       const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY"); // End date from search filters

//       // Proceed only if both parsed dates are valid
//       if (startDate.isValid() && endDate.isValid()) {
//         // Filter the result set based on the item dates
//         result = result?.filter((item) => {
//           // Parse the date from the item using Day.js
//           const itemDate = dayjs(item?.data, "DD/MM/YYYY"); // Date field in each item

//           // Check if the parsed item date is valid
//           return (
//             itemDate.isValid() && // Ensure item date is a valid date
//             itemDate.isBetween(startDate, endDate, null, "[]") // Check if the item date falls within the specified range (inclusive)
//           );
//         });
//       }
//     }

//     // Value filters
//     if (searchFilters.valore) {
//       result = result.filter((item) => item.valore === searchFilters.valore);
//     }
//     if (searchFilters.numero) {
//       result = result.filter(
//         (item) => item.numero === parseInt(searchFilters.numero)
//       );
//     }

//     // Status and client filters
//     if (searchFilters.stato) {
//       result = result.filter((item) => item.stato === searchFilters.stato);
//     }
//     if (searchFilters.clienti) {
//       result = result.filter((item) => item.clienti === searchFilters.clienti);
//     }

//     setFilteredData(result);
//     setPage(0);
//   };
//   useEffect(() => {
//     applyFilters();
//   }, [data, searchFilters]);

//   const handleSort = (field) => {
//     let direction = "asc";
//     if (sortConfig.field === field && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ field, direction });
//   };

//   const sortedData = React.useMemo(() => {
//     if (!sortConfig.field) return filteredData;

//     const sortedArray = [...filteredData]?.sort((a, b) => {
//       if (a[sortConfig.field] < b[sortConfig.field]) {
//         return sortConfig.direction === "asc" ? -1 : 1;
//       }
//       if (a[sortConfig.field] > b[sortConfig.field]) {
//         return sortConfig.direction === "asc" ? 1 : -1;
//       }
//       return 0;
//     });
//     return sortedArray;
//   }, [filteredData, sortConfig]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleValoreFilter = (selectedValore) => {
//     setValoreFilter(selectedValore);
//     setPage(0);
//   };

//   const handleSearch = (filters) => {
//     setSearchFilters(filters);
//   };

//   // Track the select all checkbox
//   const isSelected = (id) => selectedRows.includes(id);

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       // Select all rows
//       const allRowIds = data.map((row) => row.id);
//       setSelectedRows(allRowIds);
//       setSelectAll(true);
//     } else {
//       // Deselect all rows
//       setSelectedRows([]);
//       setSelectAll(false);
//     }
//   };

//   const handleRowClick = (event, id) => {
//     const selectedIndex = selectedRows.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       // Add row to selected
//       newSelected = [...selectedRows, id];
//     } else {
//       // Remove row from selected
//       newSelected = selectedRows.filter((rowId) => rowId !== id);
//     }

//     setSelectedRows(newSelected);
//     setSelectAll(newSelected.length === data.length); // Check if all rows are selected
//   };

//   const statuses = ["Approvato", "In Attesa", "Completato", "Rifiutato"];

//   const [currentStatuses, setCurrentStatuses] = useState(
//     sortedData.map((item) => item.stato || statuses[0])
//   );

//   // Function to handle status change on click
//   const handleStatusClick = (index) => {
//     const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

//     // Update only the status for the clicked row
//     setCurrentStatuses((prevStatuses) =>
//       prevStatuses.map((status, i) => (i === index ? randomStatus : status))
//     );
//   };
//   const effectiveColumns = (() => {
//     if (form === "form2") {
//       return columns.filter(
//         (column) => column.field !== "titolo" && column.field !== "fornitori"
//       );
//     } else if (form === "form1") {
//       return columns.filter(
//         (column) =>
//           column.field !== "titolo" &&
//           column.field !== "fornitori" &&
//           column.field !== "clienti"
//       );
//     } else {
//       return columns; // Show all columns for other forms
//     }
//   })();

//   return (
//     <>
//       {form === "form2" ? (
//         ""
//       ) : (
//         <SearchTable
//           startDate={startDate}
//           setStartDate={setStartDate}
//           endDate={endDate}
//           setEndDate={setEndDate}
//           tabData={data}
//           onValoreFilter={handleValoreFilter}
//           onSearch={handleSearch}
//           applyFilters={applyFilters}
//           setSearchFilters={setSearchFilters}
//           activeFilters={activeFilters}
//           setActiveFilters={setActiveFilters}
//           searchFilters={searchFilters}
//           form={form}
//         />
//       )}

//       <Paper elevation={0}>
//         <TableContainer className="customtable">
//           <Table sx={{ minWidth: 650 }} aria-label="custom table">
//             <TableColumns
//               columns={effectiveColumns}
//               sortConfig={sortConfig}
//               handleSelectAllClick={handleSelectAllClick}
//               selectAll={selectAll}
//               handleSort={handleSort}
//               form={form}
//             />
//             <TableRows
//               data={sortedData}
//               page={0}
//               rowsPerPage={10}
//               isSelected={isSelected}
//               handleRowClick={handleRowClick}
//               handleStatusClick={handleStatusClick}
//               currentStatuses={currentStatuses}
//               searchFilters={searchFilters}
//               option={option}
//               form={form}
//             />
//           </Table>
//         </TableContainer>

//         {sortedData?.length > 0 && (
//           <CustomPagination
//             count={sortedData?.length}
//             page={page}
//             rowsPerPage={rowsPerPage}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         )}
//       </Paper>
//     </>
//   );
// };

// export default CustomTable;