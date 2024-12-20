import React, { useEffect, useMemo, useState } from "react";
import Gantt, {
  Tasks,
  Dependencies,
  Resources,
  ResourceAssignments,
  Column,
  Editing,
  Toolbar,
  Item,
} from "devextreme-react/gantt";
import { tasks as initialTasks, dependencies, resources, resourceAssignments } from "./data.js";
import TaskTemplate from "./TaskTemplate.js";
import { ReactComponent as CalendarAvatar } from "../../assets/CalendarAvatar.svg";
import { ReactComponent as ArrowUpNew } from "../../assets/ArrowUpNew.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as CalenderIcon } from "../../assets/Calender_Two.svg";
import { Button } from "@mui/material";
import { ReactComponent as ExpandLeft } from "../../assets/ExpandLeft.svg";
import { ReactComponent as ExpandRight } from "../../assets/ExpandRight.svg";

const Avatar = ({ progress, color }) => (
  <div
    className={`flex items-center   pr-[6px] rounded-2xl gap-1 avatar min-w-[75px]`}
    style={{ backgroundColor: color, border: `1px solid ${color}` }}
  >
    <CalendarAvatar className="h-8 w-8 rounded-full" />
    <p className="text-sm leading-4 font-bold text-white">{progress}%</p>
  </div>
);

const scaleOptions = [
  { value: "quarters", label: "Trimestre" },
  { value: "months", label: "Mese" },
  { value: "weeks", label: "Settimana" },
  { value: "days", label: "Giorno" },
];

const TimelineCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [scaleTypes, setScaleType] = useState("days");
  const [tasks, setTasks] = useState(initialTasks);

  const moveChildUp = (taskId) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((user) => user.id === taskId);
      if (index > 0) {
        return [
          ...prevTasks.slice(0, index - 1),
          prevTasks[index],
          prevTasks[index - 1],
          ...prevTasks.slice(index + 1),
        ];
      }
      return prevTasks;
    });
  };
  
  const moveChildDown = (taskId) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((user) => user.id === taskId);
      if (index < prevTasks.length - 1) {
        return [
          ...prevTasks.slice(0, index),
          prevTasks[index + 1],
          prevTasks[index],
          ...prevTasks.slice(index + 2),
        ];
      }
      return prevTasks;
    });
  };

  const moveParent = (taskId, direction) => {
    console.log('direction: ', direction);
    console.log('UptaskId: ', taskId);
    // const index = tasks.findIndex((section) => section.id === taskId);
    // console.log('index: ', index);

    // // Check if movement is valid
    // if (
    //   (direction === "up" && index === 0) || // Can't move up if already at the top
    //   (direction === "down" && index === tasks.length - 1) // Can't move down if already at the bottom
    // ) {
    //   return;
    // }

    // // Calculate new index based on direction
    // const newIndex = direction === "up" ? index - 1 : index + 1;

    // // Swap the items
    // const updatedSections = [...tasks];
    // [updatedSections[index], updatedSections[newIndex]] = [
    //   updatedSections[newIndex],
    //   updatedSections[index],
    // ];

    // Update state
    //console.log('updatedSections: ', updatedSections);
    //setTasks(updatedSections); // Toggle sorting order

  }

  // Navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  // Navigate to the next month
  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  const handleTaskMoving = (e) => {
    const movedTask = e.newValues;
    if (movedTask) {
      const parentId = e.values.parentId || e.values.id;
      const childTasks = tasks.filter(task => task.parentId === parentId);

      childTasks.forEach(child => {
        const offset = movedTask.start - e.values.start; // Calculate the time difference
        child.start = new Date(child.start.getTime() + offset / 100 );
        child.end = new Date(child.end.getTime() + offset / 100);
      });
    }
  };

  const currentMonth = currentDate.toLocaleString("it-IT", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Calculate the current month & previous month
  const startOfPrevMonth = new Date(currentYear, currentDate.getMonth() - 1, 1);
  const endOfPrevMonth = new Date(currentYear, currentDate.getMonth(), 0);

  // Calculate the start and end dates of the current month
  const startOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentYear, currentDate.getMonth() + 1, 0);

  // Filter tasks based on the current month
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const taskStartDate = new Date(task.start);
      const taskEndDate = new Date(task.end);
      //return taskStartDate >= startOfMonth && taskEndDate <= endOfMonth;
      return (
        (taskStartDate >= startOfPrevMonth && taskEndDate <= endOfPrevMonth) ||
        (taskStartDate >= startOfMonth && taskEndDate <= endOfMonth)
      );


    });
  }, [tasks, currentDate]);

  // Update scale when currentMonth changes
  useEffect(() => {
    const gantt = document.querySelector(".dx-gantt");
    if (gantt) {
      // Find the scale elements
      const scaleElements = gantt.querySelectorAll(".dx-gantt-scale-cell");
      scaleElements.forEach((scaleElement) => {
        const startDate = new Date(scaleElement.dataset.startDate);
        onScaleCellPrepared({ startDate, scaleElement, scaleType: "days" });
      });
    }
  }, [currentDate]); // Trigger onScaleCellPrepared whenever currentDate changes

  const onScaleCellPrepared = (e) => {
    const { startDate, scaleElement, scaleType } = e;
    if (scaleType === "days") {
      const day = startDate.getDate();
      scaleElement.innerHTML = `<div>${day}</div>`;
      scaleElement.style.color = "#000";
      scaleElement.style.fontWeight = "bold";
    }

    if (scaleType === "weeks") {
      // const month = startDate.toLocaleString("default", { month: "long" });
      // scaleElement.innerHTML = `<div>${""}</div>`;
      // scaleElement.style.color = "#000";
      // scaleElement.style.fontWeight = "bold";
      scaleElement.innerHTML = "";
      scaleElement.style.display = "none";
    }
  };
  const handleScaleChange = (scale) => {
    setScaleType(scale);
  };
  
  const startDay = new Date(startOfPrevMonth);
  startDay.setDate(startDay.getDate() - 1);
  const nextDay = new Date(endOfMonth);
  nextDay.setDate(nextDay.getDate() + 1);

  const yearStartDate = new Date(`${currentYear}-01-01`);
  const yearEndDate = new Date(`${currentYear + 1}-01-01`);

  return (
    <div id="form-demo" className="timesheet-main-box">
      <div className="widget-container">
        <Gantt
          taskListWidth={500}
          height={700}
          scaleType={scaleTypes}
          // scaleUnit="days"
          // startDateRange={startOfMonth}
          // endDateRange={nextDay}
          // onScaleCellPrepared={onScaleCellPrepared}
          startDateRange={scaleTypes === "quarters" ? yearStartDate : startDay}
          endDateRange={scaleTypes === "quarters" ? yearEndDate : nextDay}
          taskContentRender={TaskTemplate}
          onTaskMoving={handleTaskMoving}
        >
          <Toolbar>
            <Item
              render={() => (
                <div>
                  <div className="calenderGantt__header">
                    <button onClick={handlePrevMonth}>
                      <ExpandLeft className="h-6 w-6" />
                    </button>
                    <p className="px-4 text-lg leading-5 text-[#100919] font-bold">
                      {currentMonth} &nbsp;
                      {currentYear}
                      {/* {generateMonths(currentYear)} */}
                    </p>
                    <button onClick={handleNextMonth}>
                      <ExpandRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              )}
            />
          </Toolbar>
          <Tasks dataSource={filteredTasks} />
          {/* <Tasks dataSource={tasks} /> */}
          <Dependencies dataSource={dependencies} />
          <Resources dataSource={resources} />
          <ResourceAssignments dataSource={resourceAssignments} />
          <Column
            dataField=""
            caption=""
            width={500}
            headerCellRender={() => (
              <div style={{
                position:"relative",
                zIndex:"9"
              }}>
                {/* <Button
                  style={{
                    color: "#57c700",
                    textTransform: "capitalize",
                    fontWeight:"normal",
                    padding:"8px 12px",
                    marginBottom:"8px"
                  }}
                >
                  <CalenderIcon />
                  Mese
                </Button> */}

                <div className="flex items-center gap-2">
                  {scaleOptions.map(({ value, label }) => (
                    <Button
                      key={value}
                      onClick={() => handleScaleChange(value)}
                      style={{
                        color: scaleTypes === value ? "#57c700" : "black",
                        textTransform: "capitalize",
                        fontWeight:"normal",
                        padding:"8px 12px"
                      }}
                    >
                      <CalenderIcon />
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            cellRender={(cellData) => {
              const task = tasks.find((t) => t.id === cellData.data.id); // Find the task
              //const imgSrc = task?.image || avatart_img; // Use default avatar if no image is specified
              const imgSrc = task?.image; // Use default avatar if no image is specified

              return (
                <div
                  className={`flex w-full flex-none items-center gap-2 ${
                    cellData.data.heading ? "py-[5px]" : ""
                  } pl-4 pr-5 `}
                >
                  {imgSrc && (
                    <Avatar
                      progress={cellData.data.progress}
                      color={cellData.data.color}
                    />
                  )}
                  <div className="min-w-0 flex-1 flex items-center">
                    {cellData.data.heading && (
                      <div className="w-2/4 text-base leading-5  font-bold text-[#666666]">
                        {cellData.data.title}
                      </div>
                    )}
                    {!cellData.data.heading && (
                      <div className="w-2/4 text-base leading-5 text-[#666666]">
                        {cellData.data.title}
                      </div>
                    )}

                    <div className="w-2/4 text-base leading-5 font-normal text-[#666666]">
                      {cellData.data.role}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {
                      cellData.data.parentId !== 0 && (
                          <>
                            <button onClick={() => moveChildUp(cellData.data.id)}>
                              <ArrowUpNew className="h-6 w-6 ArrowUpNew-icon" />
                            </button>
                            <button onClick={() => moveChildDown(cellData.data.id)}>
                              <ArrowDown className="h-6 w-6 ArrowDown-icon" />
                            </button>
                          </>    
                      )
                    }
                    {
                      cellData.data.parentId === 0 && (
                          <>
                            <button onClick={() => moveParent(cellData.data.id, "up")}>
                              <ArrowUpNew className="h-6 w-6 ArrowUpNew-icon" />
                            </button>
                            <button onClick={() => moveParent(cellData.data.id, "down")}>
                              <ArrowDown className="h-6 w-6 ArrowDown-icon" />
                            </button>
                          </>    
                      )
                    }
                  </div>
                </div>
              );
            }}
          />
          <Editing enabled />
        </Gantt>
      </div>
    </div>
  );
};
export default TimelineCalendar;