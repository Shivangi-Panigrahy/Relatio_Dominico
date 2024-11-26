import React, {  useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  styled,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomCheckbox from "../../../../../component/table/Checkbox";
import { ReactComponent as DownwardIcon } from "../../../../../assets/DownwardIcon.svg";
import { ReactComponent as UpdwardIcon } from "../../../../../assets/UpdwardIcon.svg";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import "../InvoicePage.scss";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "none",
  },
  "& > td": {
    borderBottom: "none",
    padding: theme.spacing(1.5),
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
}));

const TableContent = ({ data, columns, selected, handleRowClick }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [tasks, setTasks] = useState(data || []);
  const [activeMoveRowIndexFirst, setActiveMoveRowIndexFirst] = useState(null);
  const [movingIndex, setMovingIndex] = React.useState(null);
  const [direction, setDirection] = React.useState(null);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleExpandClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const triggerMoveAnimation = (index, direction) => {
    setActiveMoveRowIndexFirst(index);
    setMovingIndex(index);
    setDirection(direction);

    setTimeout(() => {
      setDirection(null);
      setMovingIndex(null);
    }, 400);

    setTimeout(() => {
      setActiveMoveRowIndexFirst(null);
    }, 900);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      triggerMoveAnimation(index, "up");
      setActiveMoveRowIndexFirst(index); // Set the active row index to apply the class immediately

      setTimeout(() => {
        setTasks((prevTasks) => {
          const newTasks = [...prevTasks];
          [newTasks[index], newTasks[index - 1]] = [
            newTasks[index - 1],
            newTasks[index],
          ];
          return newTasks;
        });
      }, 400);
    }
  };

  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      triggerMoveAnimation(index, "down");
      setActiveMoveRowIndexFirst(index);
      setTimeout(() => {
        setTasks((prevTasks) => {
          const newTasks = [...prevTasks];
          [newTasks[index], newTasks[index + 1]] = [
            newTasks[index + 1],
            newTasks[index],
          ];
          return newTasks;
        });
      }, 400);
    }
  };


  return (
    <TableBody className="invoiceTableMain">
      {tasks?.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const isRowExpanded = expandedRow === row.id;

        return (
          <React.Fragment key={row.id}>
            <StyledTableRow
              hover
              selected={isItemSelected}
              className={activeMoveRowIndexFirst === index ? "moveRow" : ""}
              style={{
                transition:
                  movingIndex === index ? "transform 0.4s ease" : "none",
                transform:
                  movingIndex === index && direction === "up"
                    ? "translateY(-100%)"
                    : movingIndex === index && direction === "down"
                    ? "translateY(100%)"
                    : "none",
              }}
            >
              <StyledTableCell padding="checkbox" align="center">
                <CustomCheckbox
                  checked={isItemSelected}
                  onChange={(event) => handleRowClick(event, row.id)}
                />
              </StyledTableCell>
              {columns.map((column) => {
                if (column.field === "actions") {
                  return (
                    <StyledTableCell key={column.field} align={column.align}>
                      <div className="tableActionBtn">
                        <IconButton
                          size="small"
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                        >
                          <UpdwardIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleMoveDown(index)}
                          disabled={index === tasks.length - 1}
                        >
                          <DownwardIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleExpandClick(row.id)}
                        >
                          {isRowExpanded ? (
                            <KeyboardArrowUp />
                          ) : (
                            <KeyboardArrowDown />
                          )}
                        </IconButton>
                        <IconButton size="small">
                          <MoreVertIcon />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  );
                }
                return (
                  <StyledTableCell key={column.field} align={column.align}>
                    {column.field === "iva" ? (
                      <Box className="twoField">
                        <input
                          id="outlined-multiline-flexible"
                          value={row[column.field][0]}
                          multiline
                          maxRows={4}
                        />
                        <input
                          id="outlined-multiline-flexible"
                          value={row[column.field][1]}
                          multiline
                          maxRows={4}
                        />
                      </Box>
                    ) : column.field === "sconto" ? (
                      <Box className="twoField">
                        <input
                          id="outlined-multiline-flexible"
                          value={row[column.field][0]}
                          multiline
                          maxRows={4}
                        />
                        <input
                          id="outlined-multiline-flexible"
                          value={row[column.field][1]}
                          multiline
                          maxRows={4}
                        />
                      </Box>
                    ) : column.field === "totale" ? (
                      <div className="totaleContent">20.020.302,00</div>
                    ) : (
                      <input
                        id="outlined-multiline-flexible"
                        value={row[column.field]}
                        multiline
                        maxRows={4}
                      />
                    )}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>

            {/* Expanded Row */}
            {isRowExpanded && (
              <TableRow className="expandedRowContainer">
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>
                  <input
                    label="Descrizione"
                    variant="outlined"
                    className="textField"
                  />
                </StyledTableCell>
                <StyledTableCell colSpan={2}>
                  <Select displayEmpty variant="outlined" defaultValue="">
                    <MenuItem value="">Centro di costo/Ricavo</MenuItem>
                  </Select>
                </StyledTableCell>
                <StyledTableCell colSpan={2}>
                  <input
                    label="Progetto"
                    variant="outlined"
                    className="textField"
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Select displayEmpty variant="outlined" defaultValue="">
                    <MenuItem value="">Tipo di ricavo</MenuItem>
                  </Select>
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            )}
          </React.Fragment>
        );
      })}
    </TableBody>
  );
};

export default TableContent;
