import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Box,
  styled,
} from "@mui/material";
import CustomCheckbox from "../../../../../component/table/Checkbox";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  padding: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  fontWeight: 600,
  backgroundColor: "#fafafa",
}));

const TableHeader = ({
  columns,
  sortConfig,
  handleSort,
  numSelected,
  rowCount,
  onSelectAllClick,
}) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox" align="center">
          <CustomCheckbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </StyledTableCell>
        {columns?.map((column) => (
          <StyledTableCell
            key={column.field}
            align={column.align}
            style={{ width: column.width }}
            onClick={() =>
              column.sortable !== false && handleSort(column.field)
            }
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  column.align === "left" ? "flex-end" : "flex-start",
                cursor: column.sortable !== false ? "pointer" : "default",
              }}
            >
              {column.headerName === "PZ" ||
              column.headerName === "esenzione" ? (
                ""
              ) : (
                <h4>{column.headerName}</h4>
              )}
              {/* {column.sortable !== false &&
                !(
                  column.headerName === "PZ" ||
                  column.headerName === "esenzione"
                ) && ( */}
              <ArrowDropDownIcon
                sx={{
                  ml: 0.5,
                  transform:
                    sortConfig.field === column.field &&
                    sortConfig.direction === "desc"
                      ? "rotate(180deg)"
                      : "none",
                  transition: "transform 0.2s",
                }}
              />
              {/* // <>

                  // </>
                )} */}
            </Box>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
