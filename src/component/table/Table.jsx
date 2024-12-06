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
    <Box display="flex" justifyContent="flex-end" alignItems="center" p={2} className="custom_pagination">
      <Typography variant="body2" color="text.secondary" mr={2}>
        Righe per pagina:
      </Typography>
      <Select
        className="customSelect"
        value={rowsPerPage}
        onChange={onRowsPerPageChange}
        size="small"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <Typography variant="body2" color="text.secondary">
        {`${page * rowsPerPage + 1}-${Math.min(
          (page + 1) * rowsPerPage,
          count
        )} di ${count}`}
      </Typography>
      <div className="iconBtn">
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
      </div>
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


  const chipsetData = ["Approvato", "In Attesa", "Completato", "Rifiutato"]
  const chipsetLeadData = ["Da contattare", "Contattati", "In trattativa"]

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
      result = result.filter((item) =>
        [item.titolo, item.clienti, item.fornitori, item.peso, item.categoria, item.ragioneSociale, item.stato, item.creatoIl, item.creatoil, item.numero, item.doc, item.Creato_il,
        item.cliente, item.Creato_il,
        item.Ragione_sociale,
        item.P_IVA,
        item.Tipo,
        item.Gruppo,
        item.Regione,
        item.Stato_name,  item.valore,
          item?.saldata,
          item?.dasaldare,
            item?.totale,
          item.anno,  item.scadenza,
          item.nomeImposta,
          item.tipologia,
          item.realizzata,
          item.autore,
          item.modDa,
          item.daSaldare,
          item.scadenza,  item.obiettivo,  item.asset,  item.importo,  item.dataPagamento,  item.rata,
          item?.cod,  item?.nomeServizio,  item?.um,  item?.pzVendita,  item?.costoServizio,  item?.ricavoUnitario,  item?.acquistato,  item?.venduto,  item?.ricavoTotale,
          item?.nomeListino,  item?.gruppiAssociati,  item?.nProdotti,  item?.a,  item?.priorita,  item?.nomeProdotto,
          item?.lotto,  item?.marcaSerie,  item?.stabilimento,  item?.qta,  item?.pzUnitario,
          item?.code,  item.name,  item?.nome_del_prodotto,  item?.mese,  item?.collaboratore,  item?.colaboratore,  item?.evento,  item?.trattamento,
          item?.ore,  item?.turno,  item?.totaleOreLavorate,  item?.nomeProgetto,  item?.al, item?.indirizzo, item?.operativoDa,item?.tipologiaAttrezzature,item?.posizione,
          item?.targhe,item?.tipologiaMezzo
           ]
          .map((field) => field?.toLowerCase() || "")
          .some((value) => value.includes(term))
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
    if (searchFilters.saldato) {
      result = result.filter(
        (item) => item.saldato === searchFilters.saldato
      );
    }
    if (searchFilters.totale) {
      result = result.filter((item) => item.totale === searchFilters.totale);
    }
    if (searchFilters.documento) {
      result = result.filter((item) => item.documento === searchFilters.documento);
    }
    if (searchFilters.clienti) {
      result = result.filter((item) => item.clienti === searchFilters.clienti);
    }
    if (searchFilters.entrata) {
      result = result.filter((item) => item.entrata === searchFilters.entrata);
    }
    if (searchFilters.uscita) {
      result = result.filter((item) => item.uscita === searchFilters.uscita);
    }
    if (searchFilters.utileContabile) {
      result = result.filter((item) => item.utileContabile === searchFilters.utileContabile);
    }
    if (searchFilters.tipo) {
      result = result.filter((item) => item.tipo === searchFilters.tipo);
    }
    if (searchFilters.modalita) {
      result = result.filter((item) => item.modalita === searchFilters.modalita);
    }

    if (searchFilters.tipoRisorsa) {
      result = result.filter((item) => item.tipoRisorsa === searchFilters.tipoRisorsa);
    }
    if (searchFilters.nomeRisorsa) {
      result = result.filter((item) => item.nomeRisorsa === searchFilters.nomeRisorsa);
    }
    if (searchFilters.scadenza) {
      result = result.filter((item) => item.scadenza === searchFilters.scadenza);
    }
    if (searchFilters.obiettivo) {
      result = result.filter((item) => item.obiettivo === searchFilters.obiettivo);
    }
    if (searchFilters.costoServizio) {
      result = result.filter((item) => item.costoServizio === searchFilters.costoServizio);
    }
    if (searchFilters.gruppiAssociati) {
      result = result.filter((item) => item.gruppiAssociati === searchFilters.gruppiAssociati);
    }
    if (searchFilters.nomeProdotto) {
      result = result.filter((item) => item.nomeProdotto === searchFilters.nomeProdotto);
    }
    if (searchFilters.candidato) {
      result = result.filter((item) => item.candidato === searchFilters.candidato);
    }
    if (searchFilters.ruolo) {
      result = result.filter((item) => item.ruolo === searchFilters.ruolo);
    }
    if (searchFilters.livello) {
      result = result.filter((item) => item.livello === searchFilters.livello);
    }
    if (searchFilters.mese) {
      result = result.filter((item) => item.mese === searchFilters.mese);
    }
    if (searchFilters.collaboratore) {
      result = result.filter((item) => item.collaboratore === searchFilters.collaboratore);
    }
    if (searchFilters.livello) {
      result = result.filter((item) => item.livello === searchFilters.livello);
    }
    if (searchFilters.trattamento) {
      result = result.filter((item) => item.trattamento === searchFilters.trattamento);
    }
    if (searchFilters.colaboratore) {
      result = result.filter((item) => item.colaboratore === searchFilters.colaboratore);
    }

    if (searchFilters.ore) {
      result = result.filter((item) => item.ore === searchFilters.ore);
    }
    if (searchFilters.turno) {
      result = result.filter((item) => item.turno === searchFilters.turno);
    }
    if (searchFilters.totaleOreLavorate) {
      result = result.filter((item) => item.totaleOreLavorate === searchFilters.totaleOreLavorate);
    }
    if (searchFilters.nomeProgetto) {
      result = result.filter((item) => item.nomeProgetto === searchFilters.nomeProgetto);
    }
    if (searchFilters.stabilimento) {
      result = result.filter((item) => item.stabilimento === searchFilters.stabilimento);
    }
    if (searchFilters.fornitori) {
      result = result.filter((item) => item.fornitori === searchFilters.fornitori);
    }
    if (searchFilters.prodotto) {
      result = result.filter((item) => item.prodotto === searchFilters.prodotto);
    }
    if (searchFilters.marcaSerie) {
      result = result.filter((item) => item.marcaSerie === searchFilters.marcaSerie);
    }
    if (searchFilters.tipologiaAttrezzature) {
      result = result.filter((item) => item.tipologiaAttrezzature === searchFilters.tipologiaAttrezzature);
    }
    if (searchFilters.posizione) {
      result = result.filter((item) => item.posizione === searchFilters.posizione);
    }
    if (searchFilters.targhe) {
      result = result.filter((item) => item.targhe === searchFilters.targhe);
    }
    if (searchFilters.tipologiaMezzo) {
      result = result.filter((item) => item.tipologiaMezzo === searchFilters.tipologiaMezzo);
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

  // const statuses = ["Approvato", "In Attesa", "Completato", "Rifiutato"];

  const [currentStatuses, setCurrentStatuses] = useState(
    sortedData?.map((item) => item.stato || chipsetLeadData[0])
  );

  // Function to handle status change on click
  const handleStatusClick = (index) => {
    const randomStatus = chipsetLeadData[Math.floor(Math.random() * chipsetLeadData.length)];

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
          !window.location.href.includes('/hr/sub-colaboratory/Documenti') &&
          !window.location.href.includes('/anagrafiche/sub-lead/Documenti') &&
          !window.location.href.includes('/angrafiche/clienti/Documenti') &&
          !window.location.href.includes('/angrafiche/fornitori/Documenti') &&
          !window.location.href.includes('/angrafiche/sub-colaboratory/Documenti') &&
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

        {sortedData?.length > 0 &&
          (!window.location.href.includes('/acquisti/fornitori/Documenti') &&
            !window.location.href.includes('/vendite/sub-lead/Documenti') &&
            !window.location.href.includes('/hr/sub-colaboratory/Documenti') &&
            !window.location.href.includes('/anagrafiche/sub-lead/Documenti') &&
            !window.location.href.includes('/angrafiche/clienti/Documenti') &&
            !window.location.href.includes('/angrafiche/fornitori/Documenti') &&
            !window.location.href.includes('/angrafiche/sub-colaboratory/Documenti')
            ? (
              <CustomPagination
                count={sortedData?.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            ) : null)}

        {/* {sortedData?.length > 0 && (
          <CustomPagination
            count={sortedData?.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )} */}
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
