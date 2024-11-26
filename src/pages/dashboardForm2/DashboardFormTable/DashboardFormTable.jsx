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
  Badge,
  styled,
  Box,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
  ArrowDropDown,
} from "@mui/icons-material";
import { ReactComponent as Avatar1 } from "../../../assets/Avatar1.svg";
import { ReactComponent as DownwardIcon } from "../../../assets/DownwardIcon.svg";
import { ReactComponent as UpdwardIcon } from "../../../assets/UpdwardIcon.svg";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CustomCheckbox from "../../../component/table/Checkbox";

// Statuses and Colors
const statuses = [
  { key: "concluso", label: "Concluso", bgColor: "#E8F5E9", color: "#4CAF50" },
  { key: "incorso", label: "In corso", bgColor: "#FFF8E1", color: "#FFB300" },
  {
    key: "inritardo",
    label: "In ritardo",
    bgColor: "#FFEBEE",
    color: "#F44336",
  },
  { key: "sospeso", label: "Sospeso", bgColor: "#FFF8E1", color: "#FFB300" },
  {
    key: "rifiutato",
    label: "Rifiutato",
    bgColor: "#FFEBEE",
    color: "#F44336",
  },
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiTable-root": {
    borderCollapse: "separate",
    borderSpacing: "0 8px",
  },
}));

const getNextStatus = (currentStatus) => {
  const currentIndex = statuses.findIndex(
    (status) => status.key === currentStatus
  );
  const nextIndex = (currentIndex + 1) % statuses.length;
  return statuses[nextIndex];
};

// Custom styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px dotted rgba(0, 0, 0, 0.12)",
  padding: "16px 8px",
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px dotted rgba(0, 0, 0, 0.12)",
  padding: "16px 8px",
  "& .header-content": {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
}));

const StatusChip = styled(Box)(({ bgColor, color }) => ({
  padding: "2px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  lineHeight: "20px",
  display: "inline-block",
  fontWeight: "bold",
  backgroundColor: bgColor,
  color: color,
  cursor: "pointer",
}));

const DashboardFormTable = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [movingIndex, setMovingIndex] = React.useState(null);
  const [direction, setDirection] = React.useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Descrizione del task",
      status: "concluso",
      hasNotification: false,
    },
    {
      id: 2,
      description: "Descrizione del task",
      status: "incorso",
      hasNotification: true,
    },
    {
      id: 3,
      description: "Descrizione del task",
      status: "inritardo",
      hasNotification: false,
    },
    {
      id: 4,
      description: "Descrizione del task",
      status: "rifiutato",
      hasNotification: true,
    },
    {
      id: 5,
      description: "Descrizione del task",
      status: "sospeso",
      hasNotification: false,
    },
    {
      id: 6,
      description: "Descrizione del task",
      status: "concluso",
      hasNotification: false,
    },
    {
      id: 7,
      description: "Descrizione del task",
      status: "rifiutato",
      hasNotification: false,
    },
  ]);
  const [activeMoveRowIndexFirst, setActiveMoveRowIndexFirst] = useState(null);

  const toggleRowExpansion = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };

  const getNextStatus = (currentStatus) => {
    const currentIndex = statuses.findIndex(
      (status) => status.key === currentStatus
    );
    const nextIndex = (currentIndex + 1) % statuses.length;
    return statuses[nextIndex];
  };

  const handleStatusClick = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: getNextStatus(task.status).key }
          : task
      )
    );
  };

  const getStatusLabel = (status) => statuses.find((st) => st.key === status);

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
    <StyledTableContainer
      component={Paper}
      sx={{ maxWidth: "100%", boxShadow: "none" }}
      className="customtable mt-14"
    >
      <Table sx={{ minWidth: 650 }} aria-label="task table">
        <TableHead>
          <TableRow>
            <HeaderCell padding="checkbox" align="center">
              {/* <Checkbox /> */}
              <CustomCheckbox
                // checked={selectAll}
                // onChange={(event) => handleSelectAllClick(event)}
                inputProps={{ "aria-label": "select all rows" }}
              />
            </HeaderCell>
            <HeaderCell>
              <Box>
                <h4>Descrizione</h4>
                <ArrowDropDown />
              </Box>
            </HeaderCell>
            <HeaderCell align="right" className="w-120">
              <Box>
                <h4>Asse. a</h4>
                <ArrowDropDown />
              </Box>
            </HeaderCell>
            <HeaderCell align="right" className="w-120">
              <Box>
                <h4>Autore</h4>
                <ArrowDropDown />
              </Box>
            </HeaderCell>
            <HeaderCell align="right" className="w-120">
              <Box>
                <h4>Stato</h4>
                <ArrowDropDown />
              </Box>
            </HeaderCell>
            <HeaderCell align="right" className="w-120">
              <Box>
                <h4>Azioni</h4>
                <ArrowDropDown />
              </Box>
            </HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => {
            const statusDetails = getStatusLabel(task.status);
            return (
              <React.Fragment key={task.id}>
                <TableRow
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
                      // checked={selectAll}
                      // onChange={(event) => handleSelectAllClick(event)}
                      inputProps={{ "aria-label": "select all rows" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{task.description}</StyledTableCell>
                  <StyledTableCell className="w-120">
                    <Avatar1 />
                  </StyledTableCell>
                  <StyledTableCell className="w-120">
                    <Avatar1 />
                  </StyledTableCell>
                  <StyledTableCell className="w-120" align="center">
                    <StatusChip
                      onClick={() => handleStatusClick(task.id)}
                      bgColor={statusDetails.bgColor}
                      color={statusDetails.color}
                    >
                      {statusDetails.label}
                    </StatusChip>
                  </StyledTableCell>
                  <StyledTableCell align="right" className="w-120">
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
                      <Badge
                        badgeContent={task.hasNotification ? 1 : 0}
                        color="error"
                      >
                        <IconButton
                          size="small"
                          onClick={() =>
                            task.hasNotification && toggleRowExpansion(task.id)
                          }
                        >
                          {expandedRows[task.id] ? (
                            <KeyboardArrowUp />
                          ) : (
                            <KeyboardArrowDown />
                          )}
                        </IconButton>
                      </Badge>
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </TableRow>

                {expandedRows[task.id] && (
                  <>
                    <TableRow>
                      <StyledTableCell padding="checkbox" align="center">
                        <InsertLinkIcon />
                      </StyledTableCell>
                      <StyledTableCell>
                        <div className="checkBoxData">
                          <CustomCheckbox
                            // checked={selectAll}
                            // onChange={(event) => handleSelectAllClick(event)}
                            inputProps={{ "aria-label": "select all rows" }}
                          />
                          InvoiceFooter
                        </div>
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120" align="center">
                        <StatusChip bgColor="#E3F2FD" color="#2196F3">
                          Approvato
                        </StatusChip>
                      </StyledTableCell>
                      <StyledTableCell align="right" className="w-120">
                        <div className="tableActionBtn">
                          <IconButton size="small">
                            <UpdwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <DownwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <MoreVert />
                          </IconButton>
                        </div>
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell padding="checkbox" align="center">
                        <InsertLinkIcon />
                      </StyledTableCell>
                      <StyledTableCell>
                        <div className="checkBoxData">
                          <CustomCheckbox
                            // checked={selectAll}
                            // onChange={(event) => handleSelectAllClick(event)}
                            inputProps={{ "aria-label": "select all rows" }}
                          />
                          Descrizione del task
                        </div>
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120" align="center">
                        <StatusChip bgColor="#E3F2FD" color="#2196F3">
                          Approvato
                        </StatusChip>
                      </StyledTableCell>
                      <StyledTableCell align="right" className="w-120">
                        <div className="tableActionBtn">
                          <IconButton size="small">
                            <UpdwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <DownwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <MoreVert />
                          </IconButton>
                        </div>
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell
                        padding="checkbox"
                        align="center"
                      ></StyledTableCell>
                      <StyledTableCell>
                        <div className="checkBoxData">
                          <CustomCheckbox
                            // checked={selectAll}
                            // onChange={(event) => handleSelectAllClick(event)}
                            inputProps={{ "aria-label": "select all rows" }}
                          />
                          Descrizione del task
                        </div>
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120">
                        <Avatar1 />
                      </StyledTableCell>
                      <StyledTableCell className="w-120" align="center">
                        <StatusChip bgColor="#E3F2FD" color="#2196F3">
                          Approvato
                        </StatusChip>
                      </StyledTableCell>
                      <StyledTableCell align="right" className="w-120">
                        <div className="tableActionBtn">
                          <IconButton size="small">
                            <UpdwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <DownwardIcon />
                          </IconButton>
                          <IconButton size="small">
                            <MoreVert />
                          </IconButton>
                        </div>
                      </StyledTableCell>
                    </TableRow>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default DashboardFormTable;
