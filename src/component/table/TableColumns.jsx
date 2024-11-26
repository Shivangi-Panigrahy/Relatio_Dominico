import React from "react";
// import { TableHead, TableRow, Box } from '@mui/material';
import CustomCheckbox from "./Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { TableCell, TableHead, TableRow, Box, styled } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "12px 16px",
  fontSize: "0.875rem",
  borderBottom: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
}));
const TableColumns = ({
  columns,
  sortConfig,
  handleSelectAllClick,
  selectAll,
  handleSort,
  form,
  navData,
}) => (
  <TableHead>
    <TableRow>
      {navData === "personale" ? (
        ""
      ) : (
        <StyledTableCell padding="checkbox" align="center">
          <CustomCheckbox
            checked={selectAll}
            onChange={(event) => handleSelectAllClick(event)}
            inputProps={{ "aria-label": "select all rows" }}
          />
        </StyledTableCell>
      )}
      {columns?.map((column) => (
        <StyledTableCell
          key={column.field}
          style={{ width: column.width, cursor: "pointer" }}
          onClick={() => handleSort(column.field)}
        >
          <Box display="flex" alignItems="center">
            <h4>{column.headerName}</h4>
            {sortConfig.field === column.field ? (
              sortConfig.direction === "asc" ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowDownwardIcon style={{ transform: "rotate(180deg)" }} />
              )
            ) : (
              <ArrowDropDownIcon />
            )}
          </Box>
        </StyledTableCell>
      ))}
    </TableRow>
  </TableHead>
);
export default TableColumns;