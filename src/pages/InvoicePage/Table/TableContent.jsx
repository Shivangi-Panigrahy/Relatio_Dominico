import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  styled,
  Box,
  Collapse,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomCheckbox from "../../../component/table/Checkbox";
import { ReactComponent as DownwardIcon } from "../../../assets/DownwardIcon.svg";
import { ReactComponent as UpdwardIcon } from "../../../assets/UpdwardIcon.svg";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import "../InvoicePage.scss";
import MenuWithOptions from "../../../component/filter/MenuWithOptions";
import MenuWithPDF from "../../../component/filter/MenuWithPDF";
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
const TableContent = ({
  data,
  columns,
  selected,
  handleRowClick,
  menuOptions,
  handleDelete,
}) => {
  console.log(menuOptions, "colums");

  const [expandedRow, setExpandedRow] = useState(null);
  const [tasks, setTasks] = useState(data || []);
  const [activeMoveRowIndexFirst, setActiveMoveRowIndexFirst] = useState(null);
  const [movingIndex, setMovingIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const handleExpandClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  const handleInputChange = (index, field, value, subIndex = null) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      if (subIndex !== null) {
        // Update nested fields (e.g., for "iva" or "sconto")
        updatedTasks[index][field][subIndex] = value;
      } else {
        updatedTasks[index][field] = value;
      }
      return updatedTasks;
    });
  };
  const handleMoveUp = (index) => {
    if (index > 0) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("up");
      setTimeout(() => {
        setActiveMoveRowIndexFirst(index - 1);
        setDirection(null); // Reset direction after animation
      }, 400);
      setTimeout(() => {
        setActiveMoveRowIndexFirst(null);
      }, 900);
      const newProjects = [...tasks];
      const temp = newProjects[index];
      newProjects[index] = newProjects[index - 1];
      newProjects[index - 1] = temp;
      setTimeout(() => {
        setTasks(newProjects);
        setMovingIndex(null); // Reset moving index after update
      }, 400);
    }
  };
  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("down");
      setTimeout(() => {
        setActiveMoveRowIndexFirst(index + 1);
        setDirection(null); // Reset direction after animation
      }, 400);
      setTimeout(() => {
        setActiveMoveRowIndexFirst(null);
      }, 900);
      const newProjects = [...tasks];
      const temp = newProjects[index];
      newProjects[index] = newProjects[index + 1];
      newProjects[index + 1] = temp;
      setTimeout(() => {
        setTasks(newProjects);
        setMovingIndex(null); // Reset moving index after update
      }, 400);
    }
  };
  useEffect(() => {
    setTasks(data || []);
  }, [data]);
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
              className={activeMoveRowIndexFirst === index && "moveRow"}
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
                        >
                          <UpdwardIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleMoveDown(index)}
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
                          <MenuWithPDF
                            options={menuOptions}
                            handleDelete={handleDelete}
                            id={row.id}
                          />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  );
                }
                return (
                  <StyledTableCell key={column.field} align={column.align}>
                    {column.field === "iva" || column.field === "sconto" ? (
                      <Box className="twoField">
                        <TextField
                          // value={row[column.field][0]}
                          placeholder={row[column?.field]}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              column.field,
                              e.target.value,
                              0
                            )
                          }
                          variant="outlined"
                          size="small"
                        />
                        <TextField
                          // value={row[column.field][1]}
                          placeholder={row[column?.field]}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              column.field,
                              e.target.value,
                              1
                            )
                          }
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                    ) : column.field === "totale" ? (
                      <div className="totaleContent">20.020.302,00</div>
                    ) : (
                      <TextField
                        // value={row[column.field]}
                        placeholder={row[column?.field]}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            column?.field,
                            e.target.value
                          )
                        }
                        variant="outlined"
                        size="small"
                      />
                    )}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
            {/* Expanded Row */}
            {isRowExpanded && (
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>
                  <TextField
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
                  <TextField
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
                <StyledTableCell />
              </TableRow>
            )}
          </React.Fragment>
        );
      })}
    </TableBody>
  );
};
export default TableContent;
