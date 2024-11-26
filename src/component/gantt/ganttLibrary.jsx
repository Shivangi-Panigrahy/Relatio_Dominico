import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ReactComponent as NextBtn } from "../../assets/NextBtn.svg";
import { ReactComponent as PreviousBtn } from "../../assets/PreviousBtn.svg";
import { ReactComponent as PlushIcon } from "../../assets/plushIcon.svg";
import { ReactComponent as Avatar1 } from "../../assets/Avatar1.svg";
import "./GanttChart.scss";
import GanttChartLib from "./GanttChartLib";
// Function to generate an array of months with days for a given year
const generateMonths = (year) => {
  return Array.from({ length: 12 }, (_, i) => {
    const month = new Date(year, i, 1);
    const label = month.toLocaleString("it-IT", {
      // Specify Italian locale
      month: "long",
      year: "numeric",
    });
    const days = new Date(year, i + 1, 0).getDate(); // Last day of the month
    return { label, days };
  });
};

// Generate months for the chosen year (e.g., 2024)
const months = generateMonths(2024);

const GanttChartLibrary = ({selected}) => {
  const [monthIndex, setMonthIndex] = useState(10); // August 2024
  const [activeMoveRowIndexFirst, setActiveMoveRowIndexFirst] = useState(null);
  const [movingIndex, setMovingIndex] = React.useState(null);
  const [direction, setDirection] = React.useState(null);

  const handlePreviousMonth = () => {
    setMonthIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : months.length - 1
    );
  };

  const handleNextMonth = () => {
    setMonthIndex((prevIndex) =>
      prevIndex < months.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleMonthClick = (index) => {
    setMonthIndex(index);
  };

  const selectedMonth = months[monthIndex];
  const dates = Array.from({ length: selectedMonth.days }, (_, i) => i + 1);

  // Get today's date for comparison
  const today = new Date();
  const currentDate = today.getDate(); // Get current day of the month
  const currentMonth = today.getMonth(); // Get current month (0-based, so November is 10)
  const currentYear = today.getFullYear(); // Get current year

  const [projects, setProjects] = useState([
    {
      id: "Task 1",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-01",
      end: "2024-11-05",
      progress: 20,
      dependencies: "",
    },
    {
      id: "Task 2",
      name: "Matteo gantt",
      allocation: "40%",
      start: "2024-11-04",
      end: "2024-11-08",
      progress: 20,
      dependencies: "Task 1",
    },
    {
      id: "Task 3",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-07",
      end: "2024-11-10",
      progress: 20,
      dependencies: "Task 2",
    },
    {
      id: "Task 4",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-09",
      end: "2024-11-12",
      progress: 20,
      dependencies: "Task 3",
    },
    {
      id: "Task 5",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-11",
      end: "2024-11-14",
      progress: 20,
      dependencies: "Task 4",
    },
    {
      id: "Task 6",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-13",
      end: "2024-11-16",
      progress: 20,
      dependencies: "Task 5",
    },
    {
      id: "Task 7",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-1-14",
      end: "2024-1-19",
      progress: 20,
      dependencies: "Task 6",
    },
    {
      id: "Task 8",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-16",
      end: "2024-11-22",
      progress: 20,
      dependencies: "Task 7",
    },
    {
      id: "Task 9",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-20",
      end: "2024-11-24",
      progress: 20,
      dependencies: "Task 8",
    },
    {
      id: "Task 10",
      name: "Matteo Vellone",
      allocation: "40%",
      start: "2024-11-22",
      end: "2024-11-28",
      progress: 20,
      dependencies: "Task 9",
    },
    // More project data...
  ]);

  // Filter tasks based on the selected month
  const getTasksForSelectedMonth = (tasks) => {
    return tasks.filter((task) => {
      const taskStartMonth = new Date(task.start).getMonth();
      const taskEndMonth = new Date(task.end).getMonth();
      return taskStartMonth <= monthIndex && taskEndMonth >= monthIndex;
    });
  };

  const handleArrowUp = (index) => {
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

      const newProjects = [...projects];
      const temp = newProjects[index];
      newProjects[index] = newProjects[index - 1];
      newProjects[index - 1] = temp;

      setTimeout(() => {
        setProjects(newProjects);
        setMovingIndex(null); // Reset moving index after update
      }, 400);
    }
  };

  const handleArrowDown = (index) => {
    if (index < projects.length - 1) {
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

      const newProjects = [...projects];
      const temp = newProjects[index];
      newProjects[index] = newProjects[index + 1];
      newProjects[index + 1] = temp;

      setTimeout(() => {
        setProjects(newProjects);
        setMovingIndex(null); // Reset moving index after update
      }, 400);
    }
  };

  return (
    <Box className="calenderGantt" variant="outlined">
      {/* Month selection buttons */}

      <div className="calenderGantt__table">
        <div></div>
        <div className="calenderGantt__header">
          <IconButton onClick={handlePreviousMonth}>
            <PreviousBtn />
          </IconButton>
          <Typography variant="h6">{selectedMonth.label}</Typography>
          <IconButton onClick={handleNextMonth}>
            <NextBtn />
          </IconButton>
        </div>
        <Table className="calenderGantt__userTable">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="heading active">Collaboratori</div>
              </TableCell>
              <TableCell>
                <div className="heading">Progetti</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => {
              return (
                <TableRow
                  key={project.id}
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
                  <TableCell style={{ padding: "8px" }}>
                    <div className="profileBox">
                      <div className="profileBox__img">
                        <Avatar1 />
                        <span></span>
                      </div>
                      {/* <Avatar style={{ width: "32px", height: "32px" }}>
                        M
                      </Avatar> */}
                      <Typography variant="body2">{project.name}</Typography>
                    </div>
                  </TableCell>
                  <TableCell style={{ padding: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{ color: "#57C700", fontWeight: 500 }}
                      >
                        {project.allocation}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleArrowUp(index)}
                      >
                        <ArrowUpwardIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleArrowDown(index)}
                      >
                        <ArrowDownwardIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <GanttChartLib tasks={getTasksForSelectedMonth(projects)} selected={selected} />
      </div>
    </Box>
  );
};

export default GanttChartLibrary;
