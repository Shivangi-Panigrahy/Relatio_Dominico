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
import GanttCard from "./GanttCard";
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

const GanttChart = () => {
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
  // const [projects, setProjects] = useState([
  //   {
  //     id: 0,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 8, color: "pink", month: 10 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Matteo gantt",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 8, color: "#E91E63", month: 10 },
  //       { startDate: 11, endDate: 12, color: "#E91E63", month: 10 },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 7, endDate: 8, color: "yellow", month: 10 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 6, endDate: 7, color: "green", month: 10 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     name: "Matteo Vellone",
  //     allocation: "40%",
  //     tasks: [
  //       { startDate: 4, endDate: 5, color: "red", month: 7 },
  //       { startDate: 8, endDate: 12, color: "#E91E63", month: 7 },
  //     ],
  //   },
  //   // More project data...
  // ]);

  // Filter tasks based on the selected month

  const [projects, setProjects] = useState([
    {
      id: 0,
      category: "Tema Tecnico",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "40%",
      tasks: [
        { startDate: 4, endDate: 8, color: "pink", month: 10 },
        { startDate: 11, endDate: 15, color: "pink", month: 10 },
      ],
    },
    {
      id: 1,
      category: "Tema Tecnico",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "70%",
      tasks: [
        { startDate: 4, endDate: 8, color: "yellow", month: 10 },
      ],
    },
    {
      id: 2,
      category: "Tema Tecnico",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "90%",
      tasks: [
        { startDate: 4, endDate: 8, color: "red", month: 10 },
      ],
    },
    {
      id: 3,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "40%",
      tasks: [
        { startDate: 4, endDate: 8, color: "green", month: 10 },
      ],
    },
    {
      id: 4,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "70%",
      tasks: [
        { startDate: 4, endDate: 8, color: "yellow", month: 10 },
      ],
    },
    // Add more projects as needed
  ]);


  const getTasksForSelectedMonth = (tasks) => {
    return tasks.filter((task) => {
      // Compare the task's month to the selected month
      return task.month === monthIndex; // task.month is a number (e.g., 7 for July)
    });
  };

  const handleArrowUp = (index) => {
    // Find the boundaries of the current category
    const currentCategory = projects[index].category;
    const startIndex = projects.findIndex((project) => project.category === currentCategory);
    const endIndex = projects.slice(startIndex).findIndex((project) => project.category !== currentCategory);
    const categoryEndIndex = endIndex === -1 ? projects.length - 1 : startIndex + endIndex - 1;

    if (index > startIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("up");

      // Update the order of the projects within the category
      const newProjects = [...projects];
      [newProjects[index - 1], newProjects[index]] = [newProjects[index], newProjects[index - 1]];

      setTimeout(() => {
        setProjects(newProjects); // Update the state after animation
        setActiveMoveRowIndexFirst(null);
        setMovingIndex(null);
        setDirection(null); // Reset direction
      }, 400); // Animation duration
    }
  };

  const handleArrowDown = (index) => {
    // Find the boundaries of the current category
    const currentCategory = projects[index].category;
    const startIndex = projects.findIndex((project) => project.category === currentCategory);
    const endIndex = projects.slice(startIndex).findIndex((project) => project.category !== currentCategory);
    const categoryEndIndex = endIndex === -1 ? projects.length - 1 : startIndex + endIndex - 1;

    if (index < categoryEndIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("down");

      // Update the order of the projects within the category
      const newProjects = [...projects];
      [newProjects[index + 1], newProjects[index]] = [newProjects[index], newProjects[index + 1]];

      setTimeout(() => {
        setProjects(newProjects); // Update the state after animation
        setActiveMoveRowIndexFirst(null);
        setMovingIndex(null);
        setDirection(null); // Reset direction
      }, 400); // Animation duration
    }
  };


  const getColor = (allocation) => {
    const percentage = parseInt(allocation, 10);
    if (percentage <= 40) return "#57C700"; // Green
    if (percentage <= 70) return "orange"; // Yellow
    return "red"; // Red
  };

  return (
    <>
      <Box variant="outlined">
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
          {/* <Table className="calenderGantt__userTable">
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
          </Table> */}
          <Table className="calenderGantt__userTable">
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className="heading">Collaboratori</div>
                </TableCell>
                <TableCell>
                  <div className="heading">Ruolo</div>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.reduce((acc, project, index) => {
                // Add category row if it's the first project or the category changes
                if (
                  index === 0 ||
                  projects[index - 1].category !== project.category
                ) {
                  acc.push(
                    <TableRow key={`category-${project.category}`} style={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell colSpan={3} style={{ fontWeight: "bold", padding: "8px" }}>
                        {project.category}
                      </TableCell>
                    </TableRow>
                  );
                }
                // Add individual project row
                acc.push(
                  <TableRow key={project.id}>
                    <TableCell style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      im
                      <Typography variant="body2">{project.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{project.role}</Typography>
                    </TableCell>
                    <TableCell>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <IconButton size="small" onClick={() => handleArrowUp(index)}>
                          <ArrowUpwardIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleArrowDown(index)}>
                          <ArrowDownwardIcon fontSize="inherit" />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                );
                return acc;
              }, [])}
            </TableBody>
          </Table>
          <Table className="calenderGantt__detailTable">
            <TableHead>
              <TableRow>
                <TableCell colSpan={selectedMonth.days} style={{ padding: 0 }}>
                  <div className="detailBox">
                    {dates.map((date) => {
                      const isToday =
                        date === currentDate &&
                        currentMonth === monthIndex &&
                        currentYear === 2024;
                      const currentDateObj = new Date(2024, monthIndex, date);
                      const isWeekend =
                        currentDateObj.getDay() === 0 ||
                        currentDateObj.getDay() === 6;
                      return (
                        <div
                          className={`${isToday ? "detailBox__inner borderedDashed" : "detailBox__inner"}`}
                          key={date}
                          style={{
                            color: isToday
                              ? "#FFFFFF"
                              : isWeekend
                                ? "#1009191A"
                                : "#100919",
                            backgroundColor: isToday ? "#abe380" : "transparent",
                          }}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => {
                const tasksForMonth = getTasksForSelectedMonth(project.tasks);
                return (
                  <TableRow key={project.id}>
                    <TableCell colSpan={selectedMonth.days} style={{ position: "relative", padding: 0 }}>
                      <div className="calenderBoxMain">
                        {dates.map((date, dayIndex) => {
                          const taskForDay = tasksForMonth.find(
                            (task) => date >= task.startDate && date <= task.endDate
                          );
                          const isTaskDay = !!taskForDay;
                          const taskColor = taskForDay ? taskForDay.color : "#f0f0f0"; // Default to gray if not a task day
                          const currentDateObj = new Date(2024, monthIndex, date);
                          const isWeekend =
                            currentDateObj.getDay() === 0 || currentDateObj.getDay() === 6;
                          const isToday =
                            date === currentDate &&
                            currentMonth === monthIndex &&
                            currentYear === 2024;

                          // Adjust the image and number rendering
                          const isStartDate = taskForDay && date === taskForDay.startDate;
                          const isEndDate = taskForDay && date === taskForDay.endDate;

                          return (
                            <div
                              className={`${isToday ? "borderedDashed calenderBox" : "calenderBox"} ${isTaskDay ? "calenderBox asas" : ""
                                }`}
                              key={dayIndex}
                              style={{
                                position: "absolute",
                                height: "100%",
                                backgroundColor: isToday
                                  ? "#ffffff" // White background for today
                                  : isTaskDay
                                    ? taskColor
                                    : isWeekend
                                      ? "" // Gray for weekends
                                      : "#f0f0f0", // Default gray for other days
                                left: `${(dayIndex / selectedMonth.days) * 100}%`,
                                width: `${100 / selectedMonth.days}%`,
                                top: "-1px",
                              }}
                            >
                              {/* Render image at the start date */}
                              {isStartDate && (
                                <img
                                  src="path-to-image.png" // Replace with the actual image path
                                  alt="Task Start"
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "10%",
                                    transform: "translateY(-50%)",
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                  }}
                                />
                              )}

                              {/* Render the number "8" at the end date */}
                              {isEndDate && (
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: "10%",
                                    right: "10%",
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    borderRadius: "50%",
                                    padding: "4px 8px",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  8
                                </div>
                              )}

                              {!isWeekend && (isToday || !isTaskDay) && (
                                <span>
                                  <PlushIcon />
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>


          {/* <Table className="calenderGantt__detailTable">
            <TableHead>
              <TableRow>
                <TableCell colSpan={selectedMonth.days} style={{ padding: 0 }}>
                  <div className="detailBox">
                    {dates.map((date) => {
                      const isToday =
                        date === currentDate &&
                        currentMonth === monthIndex &&
                        currentYear === 2024;
                      const currentDateObj = new Date(2024, monthIndex, date);
                      const isWeekend =
                        currentDateObj.getDay() === 0 ||
                        currentDateObj.getDay() === 6;
                      return (
                        <div
                          className={`${isToday
                            ? "detailBox__inner borderedDashed"
                            : "detailBox__inner"
                            }`}
                          key={date}
                          style={{
                            color: isToday
                              ? "#FFFFFF"
                              : isWeekend
                                ? "#1009191A"
                                : "#100919",
                            backgroundColor: isToday
                              ? "#abe380"
                              : "transparent",
                          }}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => {
                const tasksForMonth = getTasksForSelectedMonth(project.tasks);
                return (
                  <TableRow key={project.id}>
                    <TableCell
                      colSpan={selectedMonth.days}
                      style={{ position: "relative", padding: 0 }}
                    >
                      <div className="calenderBoxMain">
                        {dates.map((date, dayIndex) => {
                          const taskForDay = tasksForMonth.find(
                            (task) =>
                              date >= task.startDate && date <= task.endDate
                          );
                          const isTaskDay = !!taskForDay;
                          const taskColor = taskForDay
                            ? taskForDay.color
                            : "#f0f0f0"; // Default to gray if not a task day
                          const currentDateObj = new Date(
                            2024,
                            monthIndex,
                            date
                          );
                          const isWeekend =
                            currentDateObj.getDay() === 0 ||
                            currentDateObj.getDay() === 6;
                          const isToday =
                            date === currentDate &&
                            currentMonth === monthIndex &&
                            currentYear === 2024;
                          return (
                            <div
                              className={`${isToday
                                ? "borderedDashed calenderBox"
                                : "calenderBox"
                                } ${isTaskDay ? "calenderBox asas" : ""}`}
                              // className="borderedDashed"
                              key={dayIndex}
                              style={{
                                position: "absolute",
                                height: "100%",
                                backgroundColor: isToday
                                  ? "#ffffff" // White background for today
                                  : isTaskDay
                                    ? taskColor
                                    : isWeekend
                                      ? "" // Gray for weekends
                                      : "#f0f0f0", // Default gray for other days
                                //   borderRadius: "4px",
                                left: `${(dayIndex / selectedMonth.days) * 100
                                  }%`,
                                width: `${100 / selectedMonth.days}%`,
                                top: "-1px",
                              }}
                            >
                              {isTaskDay &&
                                Array.from({ length: 8 }, (_, index) => (
                                  <div
                                    key={index}
                                    className="asas"
                                    style={{
                                      top: `${(index / 8) * 100}%`, // Position each div from 0% to 87.5% from the top
                                    }}
                                  />
                                ))}

                              {!isWeekend && (isToday || !isTaskDay) && (
                                <span>
                                  <PlushIcon />
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table> */}
        </div>
      </Box>
    </>
  );
};

export default GanttChart;
