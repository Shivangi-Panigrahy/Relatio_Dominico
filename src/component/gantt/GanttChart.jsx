import React, { useEffect, useState } from "react";
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
import { ReactComponent as CalenderIcon } from "../../assets/CalendarAvatar.svg";
import { ReactComponent as Calender_Two } from "../../assets/Calender_Two.svg";
import { ReactComponent as Calender_Three } from "../../assets/Calender_Three.svg";
import { ReactComponent as ChevronUp } from "../../assets/ChevronUp.svg";
// import { ExpandLessIcon, ExpandMoreIcon } from '@material-ui/icons';

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
      pillColor: "#57C700",
      allocation: "40%",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "pink",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 11,
          endDate: 15,
          color: "pink",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 1,
      category: "Tema Tecnico",
      name: "Matteo Vellone",
      role: "Designer",
      pillColor: "#FFA903",
      allocation: "70%",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "yellow",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 2,
      category: "Tema Tecnico",
      name: "Matteo Vellone",
      role: "Designer",
      pillColor: "#DB0000",
      allocation: "90%",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "red",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 3,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "40%",
      pillColor: "#DB0000",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "green",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 4,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "70%",
      pillColor: "#DB0000",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "yellow",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
  ]);

  const [filteredGroupProjects, setFilteredGroupProjects] = useState({});
  useEffect(() => {
    // Filter tasks based on the selected month
    const filterObjects = projects.reduce((acc, item) => {
      // Initialize the array for the category if it doesn't exist
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      // Add the item to the appropriate category array
      acc[item.category].push(item);
      return acc;
    }, {});
    setFilteredGroupProjects(filterObjects);
  }, [projects]);

  const getTasksForSelectedMonth = (tasks) => {
    return tasks?.filter((task) => {
      // Compare the task's month to the selected month
      return task.month === monthIndex; // task.month is a number (e.g., 7 for July)
    });
  };

  const handleArrowUp = (index) => {
    // Find the boundaries of the current category
    const currentCategory = projects[index].category;
    const startIndex = projects.findIndex(
      (project) => project.category === currentCategory
    );

    if (index > startIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("up");

      // Update the order of the projects within the category
      const newProjects = [...projects];
      [newProjects[index - 1], newProjects[index]] = [
        newProjects[index],
        newProjects[index - 1],
      ];

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
    const startIndex = projects.findIndex(
      (project) => project.category === currentCategory
    );
    const endIndex = projects
      .slice(startIndex)
      .findIndex((project) => project.category !== currentCategory);
    const categoryEndIndex =
      endIndex === -1 ? projects.length - 1 : startIndex + endIndex - 1;

    if (index < categoryEndIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("down");

      // Update the order of the projects within the category
      const newProjects = [...projects];
      [newProjects[index + 1], newProjects[index]] = [
        newProjects[index],
        newProjects[index + 1],
      ];

      setTimeout(() => {
        setProjects(newProjects); // Update the state after animation
        setActiveMoveRowIndexFirst(null);
        setMovingIndex(null);
        setDirection(null); // Reset direction
      }, 400); // Animation duration
    }
  };

  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggleExpand = (id) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(id)) {
        return prevExpandedItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevExpandedItems, id];
      }
    });
  };

  const filteredProjects = projects.filter((project, i) =>
    expandedItems.includes(project.category)
  );

  if (filteredProjects.length > 0) {
    const temp1 = { ...filteredProjects[0] };
    const temp2 = { ...filteredProjects[0] };

    // Set unique IDs for the new items
    temp1.id = filteredProjects.length;
    temp2.id = filteredProjects.length + 1;

    // Optionally modify other fields to distinguish the new items
    temp1.name = `${temp1.name} - Copy 1`;
    temp2.name = `${temp2.name} - Copy 2`;

    // Push the new items into the array
    filteredProjects.push(temp1, temp2);

    // Sort the array based on IDs or other criteria
    filteredProjects.sort((a, b) => a.id - b.id);
  } else {
    const temp1 = { ...projects[0] };
    const temp2 = { ...projects[0] };

    // Set unique IDs for the new items
    temp1.id = filteredProjects.length;
    temp2.id = filteredProjects.length + 1;

    // Optionally modify other fields to distinguish the new items
    temp1.name = `${temp1.name} - Copy 1`;
    temp2.name = `${temp2.name} - Copy 2`;

    // Push the new items into the array
    filteredProjects.push(temp1, temp2);

    // Sort the array based on IDs or other criteria
    filteredProjects.sort((a, b) => a.id - b.id);
  }
  return (
    <>
      <Box variant="outlined">
        {/* Month selection buttons */}

        <div className="calenderGantt__table">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#57C700",
            }}
          >
            <CalenderIcon />
            <p>Mese</p>
          </div>
          <div
            className="calenderGantt__header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
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
                  <div className="calenderGantt__table">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#160A2A",
                      }}
                    >
                      <CalenderIcon />
                      <p>Trimestre</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="calenderGantt__table">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#160A2A",
                      }}
                    >
                      <CalenderIcon />
                      <p>Mese</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="calenderGantt__table">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#160A2A",
                      }}
                    >
                      <Calender_Two />
                      <p>Settimana </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="calenderGantt__table">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#160A2A",
                      }}
                    >
                      <Calender_Three />
                      <p>Giorno</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(filteredGroupProjects).map((category, index) => {
                return (
                  <>
                    <TableRow
                      key={`${category}`}
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <TableCell
                        colSpan={3}
                        style={{
                          fontWeight: "bold",
                          padding: "8px",
                          textAlign: "left",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleToggleExpand(category)}
                        >
                          <ChevronUp />
                        </IconButton>
                        <span
                          style={{
                            fontFamily: '"Barlow", sans-serif',
                            verticalAlign: "middle",
                            fontSize: "16px",
                            color: "#666666",
                          }}
                        >
                          {" "}
                          {category}{" "}
                        </span>
                      </TableCell>

                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "flex-end",
                          }}
                        >
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

                    {filteredGroupProjects[category].map((project, index) => {
                      return (
                        <TableRow
                          style={{
                            display: expandedItems.includes(
                              `${project.category}`
                            )
                              ? "table-row"
                              : "none",
                          }}
                        >
                          <TableCell colSpan={2}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                              }}
                            >
                              <p
                                style={{
                                  backgroundColor: `${project.pillColor}`,
                                  width: "fit-content",
                                  display: "flex",
                                  alignItems: "center",
                                  margin: "0",
                                  gap: "3px",
                                  borderRadius: "17px",
                                  paddingRight: "6px",
                                  padding: "1px",
                                }}
                              >
                                <span style={{ lineHeight: "0" }}>
                                  {" "}
                                  <Avatar1 />{" "}
                                </span>
                                <span
                                  style={{
                                    display: "block",
                                    fontFamily: '"Barlow", sans-serif',
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    lineHeight: "16.8px",
                                    paddingRight: "6px",
                                    color: "#fff",
                                  }}
                                >
                                  {project.allocation}
                                </span>
                              </p>
                              <Typography
                                variant="body2"
                                style={{
                                  paddingBottom: "0",
                                  fontFamily: '"Barlow", sans-serif',
                                  fontSize: "14px",
                                  fontWeight: "400",
                                  lineHeight: "19.2px",
                                }}
                              >
                                {project.name}
                              </Typography>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="body2"
                              style={{
                                paddingBottom: "0",
                                fontFamily: '"Barlow", sans-serif',
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "19.2px",
                              }}
                            >
                              {project.role}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <div
                              style={{
                                display: "flex",
                                gap: "8px",
                                justifyContent: "flex-end",
                              }}
                            >
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
                  </>
                );
              })}
            </TableBody>
          </Table>
          <Table className="calenderGantt__detailTable">
            <TableHead>
              <TableRow style={{ padding: "0" }}>
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
                          className={`${
                            isToday
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
              {Object.keys(filteredGroupProjects)?.map((category) => {
                const tasksForMonth = getTasksForSelectedMonth(
                  filteredGroupProjects[category][0].tasks
                );

                let total = 0;

                filteredGroupProjects[category].forEach((item) => {
                  // Calculate task durations
                  let taskDurationSum = 0;

                  // Iterate through tasks and validate endDate < next task's startDate
                  for (let i = 0; i < item.tasks.length; i++) {
                    const currentTask = item.tasks[i];
                    const nextTask = item.tasks[i + 1];

                    // Ensure currentTask endDate is valid and less than nextTask startDate
                    if (
                      currentTask.startDate <= currentTask.endDate && // Valid start and end date
                      (!nextTask || currentTask.endDate < nextTask.startDate) // Less than next task's startDate
                    ) {
                      taskDurationSum +=
                        currentTask.endDate - currentTask.startDate + 1;
                    }
                  }

                  // Add task durations to the total
                  total += taskDurationSum;
                });

                // Add the number of items in the array

                return (
                  <>
                    <TableRow key={category}>
                      <TableCell
                        colSpan={selectedMonth.days}
                        sx={{
                          borderBottom: "none",
                          paddingTop: 0.8,
                          paddingBottom: 0,
                        }}
                      >
                        <div className="calenderBoxMain">
                          {dates.map((date, dayIndex) => {
                            const taskForDay = tasksForMonth?.find(
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

                            // Adjust the image and number rendering
                            const isStartDate =
                              taskForDay && date === taskForDay.startDate;
                            const isEndDate =
                              taskForDay && date === taskForDay.endDate;
                            const isMonday = currentDateObj.getDay() === 1;
                            const isFriday = currentDateObj.getDay() === 5;
                            console.log("taskForDay", taskForDay);
                            return (
                              <div
                                className={`
                                      ${
                                        isToday
                                          ? "borderedDashed calenderBoxq"
                                          : "calenderBox"
                                      } 
                                      ${isTaskDay ? "calenderBox" : ""}${
                                  isMonday ? "monday" : ""
                                }
                                        ${isFriday ? "isFriday" : ""}`}
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
                                  left: `${
                                    (dayIndex / selectedMonth.days) * 100
                                  }%`,
                                  width: `${100 / selectedMonth.days}%`,
                                  top: "-1px",
                                }}
                              >
                                {isMonday &&
                                  <div className="multiImages">
                                  {taskForDay &&
                                  filteredGroupProjects[category].map(
                                    (item) => {
                                      return item.tasks.map(
                                        (task) => task.avatar
                                      );
                                    }
                                  )}
                                  </div>}

                                {isEndDate && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      bottom: "6%",
                                      right: "10%",
                                      color: "#ffffff",
                                      borderRadius: "50%",
                                      padding: "4px 8px",
                                      fontSize: "16px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {total}
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
                    {expandedItems.includes(category) && (
                      <>
                        {filteredGroupProjects[category].map((project) => {
                          const tasksForMonth = getTasksForSelectedMonth(
                            project.tasks
                          );
                          return (
                            <TableRow key={project.id}>
                              <TableCell
                                colSpan={selectedMonth.days}
                                sx={{
                                  borderBottom: "none",
                                  paddingTop: 0.8,
                                  paddingBottom: 0,
                                }}
                              >
                                <div className="calenderBoxMain">
                                  {dates.map((date, dayIndex) => {
                                    const taskForDay = tasksForMonth?.find(
                                      (task) =>
                                        date >= task.startDate &&
                                        date <= task.endDate
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

                                    // Adjust the image and number rendering
                                    const isStartDate =
                                      taskForDay &&
                                      date === taskForDay.startDate;
                                    const isEndDate =
                                      taskForDay && date === taskForDay.endDate;
                                    const isMonday =
                                      currentDateObj.getDay() === 1;
                                    const isFriday =
                                      currentDateObj.getDay() === 5;

                                    return (
                                      <div
                                        className={`
                                ${
                                  isToday
                                    ? "borderedDashed calenderBox"
                                    : "calenderBox"
                                } 
                                ${isTaskDay ? "calenderBox" : ""}${
                                          isMonday ? "monday" : ""
                                        }
                                  ${isFriday ? "isFriday" : ""}`}
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
                                          left: `${
                                            (dayIndex / selectedMonth.days) *
                                            100
                                          }%`,
                                          width: `${100 / selectedMonth.days}%`,
                                          top: "-1px",
                                        }}
                                      >
                                        <div className="sigleImages">
                                        {isMonday && taskForDay?.avatar}
                                        </div>

                                        {isEndDate && (
                                          <div
                                            style={{
                                              position: "absolute",
                                              bottom: "10%",
                                              right: "10%",
                                              color: "#ffffff",
                                              borderRadius: "50%",
                                              padding: "4px 8px",
                                              fontSize: "16px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {taskForDay.endDate -
                                              taskForDay.startDate +
                                              1}
                                          </div>
                                        )}

                                        {!isWeekend &&
                                          (isToday || !isTaskDay) && (
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
                      </>
                    )}
                  </>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Box>
    </>
  );
};

export default GanttChart;
