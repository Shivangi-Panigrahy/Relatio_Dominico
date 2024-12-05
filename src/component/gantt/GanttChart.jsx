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
import Slider from '@mui/joy/Slider';


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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

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
  const weekends = dates.filter(day => {
    const date = new Date(2024, 10, day); // 10 = November
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
    return dayOfWeek === 0 || dayOfWeek === 6;
  });

  console.log("Weekend dates:", weekends, selectedMonth.year, selectedMonth.month);

  // Get today's date for comparison
  const today = new Date();
  const currentDate = today.getDate(); // Get current day of the month
  const currentMonth = today.getMonth(); // Get current month (0-based, so November is 10)
  const currentYear = today.getFullYear(); // Get current year


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
          color: "#4CC9F0",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 11,
          endDate: 15,
          color: "#4CC9F0",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate:18,
          endDate: 22,
          color: "#4CC9F0",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 25,
          endDate: 29,
          color: "#4CC9F0",
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
          color: "#4CC9F0",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 11,
          endDate: 15,
          color: "#4CC9F0",
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
          startDate: 18,
          endDate: 22,
          color: "#4CC9F0",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 25,
          endDate: 29,
          color: "#4CC9F0",
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
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 11,
          endDate: 15,
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 18,
          endDate: 22,
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 25,
          endDate: 29,
          color: "#4361EE",
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
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
        {
          startDate: 11,
          endDate: 15,
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 5,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "70%",
      pillColor: "#DB0000",
      tasks: [
        {
          startDate: 4,
          endDate: 8,
          color: "#4361EE",
          month: 10,
          avatar: <Avatar1 />,
        },
      ],
    },
    {
      id: 6,
      category: "Tema Design",
      name: "Matteo Vellone",
      role: "Designer",
      allocation: "70%",
      pillColor: "#DB0000",
      tasks: [
        {
          startDate: 11,
          endDate: 15,
          color: "#4361EE",
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

  const handleArrowUp = (index) => {

    const currentCategory = filteredGroupProjects[expandedItems][index];
    console.log(currentCategory, "currentCategory");
    const startIndex = filteredGroupProjects[expandedItems].findIndex(
      (project) => project.category === currentCategory
    );

    if (index > startIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("up");

      // Sort tasks within the category by startDate
      const newProjects = [...projects];

      // Find the correct category range
      const categoryProjects = newProjects.filter(
        (project) => project.category === currentCategory
      );

      categoryProjects.sort((a, b) => a.startDate - b.startDate);

      // Swap the projects within the same category
      [newProjects[index - 1], newProjects[index]] = [
        newProjects[index],
        newProjects[index - 1],
      ];

      setTimeout(() => {
        setProjects(newProjects);
        setActiveMoveRowIndexFirst(null);
        setMovingIndex(null);
        setDirection(null);
      }, 400);
    }
  };

  const handleArrowDown = (index) => {
    console.log(index, "index");

    const currentCategory = filteredGroupProjects[expandedItems][index];
    const startIndex = filteredGroupProjects[expandedItems].findIndex(
      (project) => project.category === currentCategory
    );
    const endIndex = filteredGroupProjects[expandedItems]
      .slice(startIndex)
      .findIndex((project) => project.category !== currentCategory);
    const categoryEndIndex =
      endIndex === -1 ? filteredGroupProjects[expandedItems].length - 1 : startIndex + endIndex - 1;

    if (index < categoryEndIndex) {
      setActiveMoveRowIndexFirst(index);
      setMovingIndex(index);
      setDirection("down");

      // Sort tasks within the category by startDate
      const newProjects = [...filteredGroupProjects[expandedItems]];

      // Find the correct category range
      const categoryProjects = newProjects.filter(
        (project) => project.category === currentCategory
      );

      categoryProjects.sort((a, b) => a.startDate - b.startDate);

      // Swap the projects within the same category
      [newProjects[index + 1], newProjects[index]] = [
        newProjects[index],
        newProjects[index + 1],
      ];

      setTimeout(() => {
        setProjects(newProjects);
        setActiveMoveRowIndexFirst(null);
        setMovingIndex(null);
        setDirection(null);
      }, 400);
    }
  };

  const handleTaskDateChange = (projectId, taskIndex, newEndDate) => {

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
            ...project,
            tasks: project.tasks.map((task, index) =>
              index === taskIndex
                ? { ...task, endDate: newEndDate } // Update the endDate without restriction
                : task
            ),
          }
          : project
      )
    );
  };


  const handleMouseDown = (e) => {

    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {

    // console.log("getting here");
    // if (!isDragging) return;

    const diff = e.clientX - startX; // Difference between the initial and current mouse positions


    setCurrentX(diff);
    // setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(true);
    setStartX(0);
  };
  const handleEndChange = (id, taskIndex, data) => {
    console.log(weekends, data, "test")
    if (weekends.includes(data + 1)) {

      return; // Stop execution if the date is restricted and in the future
    }
    console.log("testfubncr", data)
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? {
            ...project,
            tasks: project.tasks.map((task, index) =>
              index === taskIndex
                ? { ...task, endDate: data + 1 } // Update the endDate without restriction
                : task
            ),
          }
          : project
      )
    );

  }
  console.log(projects, "projects")

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
                      // {console.log(project.id,"project")}
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
              {Object.keys(filteredGroupProjects)?.map((category) => {
                const tasksForMonth = getTasksForSelectedMonth(
                  filteredGroupProjects[category][0].tasks
                );

                let total = 0;

                filteredGroupProjects[category].forEach((item) => {
                  // Calculate task durations
                  console.log(item.tasks.length,"item")
                  let taskDurationSum = 0;

                  // Iterate through tasks and validate endDate < next task's startDate
                  for (let i = 0; i < item.tasks.length; i++) {
                    const currentTask = item.tasks[i];
                    const nextTask = item.tasks[i + 1];
                    console.log(currentTask,nextTask,"taskk")

                    // Ensure currentTask endDate is valid and less than nextTask startDate
                    if (
                      currentTask.startDate <= currentTask.endDate  // Less than next task's startDate
                    ) {
                      taskDurationSum +=
                        currentTask.endDate - currentTask.startDate + 1;
                    }
                  
                  }
                 console.log(taskDurationSum,"taskDurationSum")
                  // Add task durations to the total
                  total= taskDurationSum
                  // total += taskDurationSum;
                });

                // Add the number of items in the array

                return (
                  <>
                    <TableRow key={category}>
                      <TableCell
                        colSpan={selectedMonth.days}
                        sx={{
                          borderBottom: "none",
                          paddingTop: 0,
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

                            return (
                              // <div className={isWeekend ? 'calenderBoxMain__inner isWeekend' : isFriday ? 'calenderBoxMain__inner isFriday' : isMonday ? 'calenderBoxMain__inner isMonday' : ' calenderBoxMain__inner'}>
                              <div
                                className={`
                                      ${isToday
                                    ? "borderedDashed calenderBox"
                                    : "calenderBox"
                                  } 
                                      ${isTaskDay ? "calenderBox" : ""}${isMonday ? "monday" : ""
                                  }
                                        ${isEndDate ? "isEndDate" : ""}
                                         ${isWeekend ? "isWeekend" : ""}`}
                                key={dayIndex}
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  // backgroundColor: isToday
                                  //   ? "#ffffff" // White background for today
                                  //   : isTaskDay
                                  //     ? taskColor
                                  //     : isWeekend
                                  //       ? "" // Gray for weekends
                                  //       : "#f0f0f0", // Default gray for other days
                                  left: `${(dayIndex / selectedMonth.days) * 100
                                    }%`,
                                  width: `${100 / selectedMonth.days}%`,
                                  top: "50%",
                                  transform: "translate(0,-50%)",
                                }}
                              >
                                <div className="detailBoxcalender"
                                  style={{
                                    backgroundColor: isToday
                                      ? "#ffffff"
                                      : isTaskDay
                                        ? taskColor
                                        : isWeekend
                                          ? ""
                                          : "#f0f0f0",

                                  }}>
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
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%)",
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
                              </div>
                              // </div>
                            );
                          })}
                        </div>
                      </TableCell>
                    </TableRow>
                    {expandedItems.includes(category) && (
                      <>
                        {filteredGroupProjects[category].map((project) => {
                          const tasksForMonth = getTasksForSelectedMonth(project.tasks);
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
                                <div className="calenderBoxMain smallBox" style={{ position: "relative" }}>

                                  {tasksForMonth.map((task, taskIndex) => {
                                    const startPercent =
                                      ((task.startDate - 1) / selectedMonth.days) * 100;
                                    const endPercent =
                                      (task.endDate / selectedMonth.days) * 100;

                                    return (
                                      <div

                                        key={taskIndex}
                                        style={{
                                          position: "absolute",
                                          top: "6px", // Center the slider vertically
                                          left: `${startPercent}%`,
                                          width: `${endPercent - startPercent}%`,
                                          // transform: "translateY(-50%)",
                                          height: "38px", // Set height to align with the row
                                        }}

                                      >
                                        <div className="smallBox__Tag" onClick={() => handleEndChange(project.id, taskIndex, task.endDate)} >

                                          {task.endDate - task.startDate + 1}
                                        </div>
                                        <div className="smallBox__Images">
                                          {task.avatar}
                                        </div>
                                        <Slider
                                          valueLabelDisplay="auto"
                                          min={task.startDate}
                                          max={task.endDate}
                                          value={[task.startDate, task.endDate]}
                                          onMouseDown={handleMouseDown}
                                          onMouseMove={handleMouseMove}
                                          onMouseUp={handleMouseUp}
                                          style={{
                                            backgroundColor: task.color,

                                          }}
                                          onChange={(e, newValue) => {

                                            const [newStartDate, newEndDate] = newValue;
                                            console.log("newValue", newValue);

                                            handleTaskDateChange(project.id, taskIndex, newEndDate);
                                          }}

                                          sx={{
                                            "--Slider-thumbWidth": "0px",
                                            "--Slider-thumbHeight": "0px",
                                            "--Slider-trackSize": "50px",
                                            "--Slider-trackRadius": "8px",
                                            "--Slider-trackColor": "red",
                                            "--Slider-railColor": "#e0e0e0",

                                          }}
                                        />
                                        {/* {!isWeekend && (isToday || !isTaskDay) && (
                                          <span>
                                            <PlushIcon />
                                          </span>
                                        )} */}
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
