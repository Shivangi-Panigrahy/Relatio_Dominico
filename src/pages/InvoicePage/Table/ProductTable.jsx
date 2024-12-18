import React, { useState } from "react";
import { Table, TableContainer, Paper, styled, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiTable-root": {
    borderCollapse: "separate",
    borderSpacing: "0 8px",
  },
}));

const ProductTable = ({ dummyData, columns,menuOptions,handleDelete }) => {
  const [selected, setSelected] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc",
  });

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(dummyData.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleRowClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSort = (field) => {
    setSortConfig((prevConfig) => ({
      field,
      direction:
        prevConfig.field === field && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  return (
    <StyledTableContainer
      component={Paper}
      sx={{ maxWidth: "100%", boxShadow: "none" }}
      className="customtable mt-24"
    >
      <Table>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          handleSort={handleSort}
          numSelected={selected.length}
          rowCount={dummyData?.length}
          onSelectAllClick={handleSelectAllClick}
        />
        <TableContent
          data={dummyData}
          columns={columns}
          selected={selected}
          handleRowClick={handleRowClick}
          menuOptions={menuOptions}
          handleDelete={handleDelete}
        />
      </Table>
    </StyledTableContainer>
  );
};

export default ProductTable;
