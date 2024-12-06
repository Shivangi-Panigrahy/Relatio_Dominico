import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactComponent as CalendarAvatar } from "../../assets/CalendarAvatar.svg";

import { ReactComponent as ExpandLeft } from "../../assets/ExpandLeft.svg";
import { ReactComponent as ExpandRight } from "../../assets/ExpandRight.svg";
import { ReactComponent as CalenderIcon } from "../../assets/Calender_Two.svg";
import { ReactComponent as ArrowUpNew } from "../../assets/ArrowUpNew.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { colors } from "@mui/material";

const Avatar = ({ children, src, alt, allocation, color }) => (
  <div
    className={`flex items-center   pr-[6px] rounded-2xl gap-1 avatar`}
    style={{ backgroundColor: color, border: `1px solid ${color}` }}
  >
    <CalendarAvatar className="h-8 w-8 rounded-full" />
    <p className="text-sm leading-4 font-bold text-white">{allocation}</p>
  </div>
);

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

const ScrollArea = ({ children }) => (
  <div className="scroll-area">{children}</div>
);

const Tabs = ({ children, defaultValue }) => (
  <div className="tabs" data-default-value={defaultValue}>
    {children}
  </div>
);

const TimelineCalendar = () => {
  const daysInMonth = Array.from({ length: 29 }, (_, i) => ({
    day: i + 1,
    isWeekend: i % 7 === 5 || i % 7 === 6,
  }));

  const initialSections = [
    {
      id: "1",
      title: "Tema Tecnico",
      isExpanded: true,
      users: [
        {
          id: "1",
          name: "Matteo Vellone",
          title: "Tema Tecnico",
          role: "Designer",
          avatar: <Avatar />,
          colors: "#57C700",
          allocation: "40%",
          month:11,
          bars: [
            { id: "1a", startDay: 4, duration: 5, color: "#4CC9F0" },
            { id: "1b", startDay: 11, duration: 5, color: "#4CC9F0" },
          ],
        },
        {
          id: "2",
          name: "John Doe",
          title: "Tema Tecnico",
          role: "Developer",
          avatar: <Avatar />,
          colors: "#FFA903",
          allocation: "70%",
          month:11,
          bars: [
            { id: "2a", startDay: 18, duration: 5, color: "#4CC9F0" },
            { id: "2b", startDay: 25, duration: 5, color: "#4CC9F0" },
          ],
        },
        {
          id: "3",
          name: "Jane Smith",
          title: "Tema Tecnico",
          role: "UX Designer",
          avatar: <Avatar />,
          colors: "red",
          allocation: "90%",
          month:11,
          bars: [{ id: "3a", startDay: 11, duration: 5, color: "#4CC9F0" }],
        },
      ],
    },
    {
      id: "2",
      title: "Tema Design",
      isExpanded: true,
      month:11,
      users: [
        {
          id: "4",
          name: "Matteo Vellone",
          title: "Tema Design",
          role: "Designer",
          avatar: <Avatar />,
          colors: "#57C700",
          allocation: "40%",
          bars: [
            { id: "4a", startDay: 4, duration: 5, color: "#4361EE" },
            { id: "4b", startDay: 11, duration: 5, color: "#4361EE" },
          ],
        },
        {
          id: "5",
          name: "John Doe",
          title: "Tema Design",
          role: "Developer",
          avatar: <Avatar />,
          colors: "#FFA903",
          allocation: "70%",
          bars: [
            { id: "5a", startDay: 18, duration: 5, color: "#4361EE" },
            { id: "5b", startDay: 25, duration: 5, color: "#4361EE" },
          ],
        },
        {
          id: "6",
          name: "Jane Smith",
          title: "Tema Design",
          role: "UX Designer",
          avatar: <Avatar />,
          colors: "red",
          allocation: "90%",
          bars: [{ id: "6a", startDay: 11, duration: 5, color: "#4361EE" }],
        },
      ],
    },
    {
      id: "3",
      title: "Tema Tecnico",
      isExpanded: true,
      month:11,
      users: [
        {
          id: "7",
          name: "Matteo Vellone",
          title: "Tema Design",
          role: "Designer",
          avatar: <Avatar />,
          colors: "#57C700",
          allocation: "40%",
          bars: [
            { id: "7a", startDay: 4, duration: 5, color: "#7209B7" },
            { id: "7b", startDay: 11, duration: 5, color: "#7209B7" },
          ],
        },
        {
          id: "8",
          name: "John Doe",
          title: "Tema Design",
          role: "Developer",
          avatar: <Avatar />,
          colors: "#FFA903",
          allocation: "70%",
          bars: [
            { id: "8a", startDay: 18, duration: 5, color: "#7209B7" },
            { id: "8b", startDay: 25, duration: 5, color: "#7209B7" },
          ],
        },
        {
          id: "9",
          name: "Jane Smith",
          title: "Tema Design",
          role: "UX Designer",
          avatar: <Avatar />,
          colors: "red",
          allocation: "90%",
          bars: [{ id: "9a", startDay: 11, duration: 5, color: "#7209B7" }],
        },
      ],
    },
    {
      id: "4",
      title: "Tema Design",
      isExpanded: true,
      month:11,
      users: [
        {
          id: "10",
          name: "Matteo Vellone",
          title: "Tema Design",
          role: "Designer",
          avatar: <Avatar />,
          colors: "#57C700",
          allocation: "40%",
          bars: [
            { id: "10a", startDay: 4, duration: 5, color: "#E72276" },
            { id: "10b", startDay: 11, duration: 5, color: "#E72276" },
          ],
        },
        {
          id: "11",
          name: "John Doe",
          title: "Tema Design",
          role: "Developer",
          avatar: <Avatar />,
          colors: "#FFA903",
          allocation: "70%",
          bars: [
            { id: "11a", startDay: 18, duration: 5, color: "#E72276" },
            { id: "11b", startDay: 25, duration: 5, color: "#E72276" },
          ],
        },
        {
          id: "12",
          name: "Jane Smith",
          title: "Tema Design",
          role: "UX Designer",
          avatar: <Avatar />,
          colors: "red",
          allocation: "90%",
          bars: [{ id: "12a", startDay: 11, duration: 5, color: "#E72276" }],
        },
      ],
    },
  ];
 const [monthIndex, setMonthIndex] = useState(11);
  const monthss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   // Filtered sections based on the selected month
//   debugger
//   const filteredSections = initialSections.filter(
//     (section) => section.month === monthss[monthIndex]
//   );
//       console.log(filteredSections,"filteredSections",initialSections)
//   const [expandedSections, setExpandedSections] = useState(
//     filteredSections?.filter((s) => s.isExpanded).map((s) => s.id)
//   );

//   const [users, setUsers] = useState(
//     filteredSections?.flatMap((section) => section.users)
//   );
const filteredSections = initialSections.filter(
  (section) => section.month === monthss[monthIndex]
);

const [expandedSections, setExpandedSections] = useState([]);
const [users, setUsers] = useState([]);
const [sections, setSections] = useState([]);
console.log("sections",sections)

// Update expandedSections and users when filteredSections changes
useEffect(() => {
  setExpandedSections(
    filteredSections?.filter((section) => section.isExpanded).map((section) => section.id)
  );
  setUsers(filteredSections?.flatMap((section) => section.users));
  setSections(filteredSections)
}, [monthIndex]);
console.log(users,"user",expandedSections)
   
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const moveUserUp = (userId) => {
    setUsers((prevUsers) => {
      const userIndex = prevUsers.findIndex((user) => user.id === userId);
      if (userIndex > 0) {
        return [
          ...prevUsers.slice(0, userIndex - 1),
          prevUsers[userIndex],
          prevUsers[userIndex - 1],
          ...prevUsers.slice(userIndex + 1),
        ];
      }
      return prevUsers;
    });
  };

  const moveUserDown = (userId) => {
    setUsers((prevUsers) => {
      const userIndex = prevUsers.findIndex((user) => user.id === userId);
      if (userIndex < prevUsers.length - 1) {
        return [
          ...prevUsers.slice(0, userIndex),
          prevUsers[userIndex + 1],
          prevUsers[userIndex],
          ...prevUsers.slice(userIndex + 2),
        ];
      }
      return prevUsers;
    });
  };

  const handleDragStart = (e, userId, barId) => {
    e.preventDefault();
    const startX = e.clientX;
    const user = users.find((u) => u.id === userId);
    const bar = user?.bars.find((b) => b.id === barId);
    if (!user || !bar) return;

    const startDuration = bar.duration;
    const calendarElement = e.currentTarget.closest(".calendar-grid");
    const dayWidth = calendarElement
      ? calendarElement.clientWidth / daysInMonth.length
      : 0;

    const handleDrag = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      let durationChange = Math.round(deltaX / dayWidth);

      const newEndDay = bar.startDay + startDuration + durationChange - 1;
      const weekendsInNewDuration = daysInMonth
        .slice(bar.startDay - 1, newEndDay)
        .filter((d) => d.isWeekend).length;
      durationChange -= weekendsInNewDuration;

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId
            ? {
                ...u,
                bars: u.bars.map((b) =>
                  b.id === barId
                    ? {
                        ...b,
                        duration: Math.max(
                          1,
                          Math.min(
                            29 - b.startDay + 1 - weekendsInNewDuration,
                            startDuration + durationChange
                          )
                        ),
                      }
                    : b
                ),
              }
            : u
        )
      );
    };

    const handleDragEnd = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const getWeekdayDuration = (startDay, duration) => {
    return daysInMonth
      .slice(startDay - 1, startDay - 1 + duration)
      .filter((d) => !d.isWeekend).length;
  };

  const getBarStyle = (startDay, duration) => {
    const totalDays = daysInMonth.length + 1;
    console.log("totalDays", daysInMonth);
    console.log("startDate", startDay);
    const width = (duration / totalDays) * 100;
    return {
      left: `${((startDay - 0.8) / totalDays) * 100}%`,
      width: `${width - 1}%`,
    };
  };

  // August 2024
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
  const months = generateMonths(2024);

  const generateMonthsLetter = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = new Date(2024, i, 1);
      const label = month.toLocaleString("it-IT", { month: "long" }); // Italian month name
      return { label };
    });
  };

  const monthsLetter = generateMonthsLetter();
  console.log(monthsLetter, "monthsLetter");

  const selectedMonth = months[monthIndex];
  const dates = Array.from({ length: selectedMonth.days }, (_, i) => i + 1);
  // const handlePreviousMonth = () => {
  //   setMonthIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : months.length - 1
  //   );
  // };

  // const handleNextMonth = () => {
  //   setMonthIndex((prevIndex) =>
  //     prevIndex < months.length - 1 ? prevIndex + 1 : 0
  //   );
  // };
  const handleNextMonth = () => {
    setMonthIndex((prevIndex) =>
      prevIndex < months.length - 1 ? prevIndex + 1 : 0
    );
  };
  
  const handlePreviousMonth = () => {
    setMonthIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : months.length - 1
    );
  };

  console.log(filteredSections,"filtersection")

  const totalHoursPerWeek = Object.values(
    users.reduce((acc, { title, bars }) => {
      if (!acc[title]) {
        acc[title] = { title, bars: [] };
      }

      bars.forEach(({ startDay, duration, color }) => {
        const existingBar = acc[title].bars.find(
          (bar) => bar.startDay === startDay && bar.color === color
        );

        if (existingBar) {
          existingBar.duration += duration;
        } else {
          acc[title].bars.push({ startDay, duration, color });
        }
      });

      return acc;
    }, {})
  );

  const [calender, setCalender] = useState("month");
 
  const [isAscending, setIsAscending] = useState(true); // To toggle between ascending and descending

  const handelArrowUp = (id, direction) => {
    const index = sections.findIndex((section) => section.id === id);

    // Check if movement is valid
    if (
      (direction === "up" && index === 0) || // Can't move up if already at the top
      (direction === "down" && index === sections.length - 1) // Can't move down if already at the bottom
    ) {
      return;
    }

    // Calculate new index based on direction
    const newIndex = direction === "up" ? index - 1 : index + 1;

    // Swap the items
    const updatedSections = [...sections];
    [updatedSections[index], updatedSections[newIndex]] = [
      updatedSections[newIndex],
      updatedSections[index],
    ];

    // Update state
    setSections(updatedSections); // Toggle sorting order
  };
  console.log(sections, "setion");

  const [activeView, setActiveView] = useState("mese");
  const tabViews = [
    { key: "trimestre", label: "Trimestre", icon: <CalenderIcon /> },
    { key: "mese", label: "Mese", icon: <CalenderIcon /> },
    { key: "settimana", label: "Settimana", icon: <CalenderIcon /> },
    { key: "giorno", label: "Giorno", icon: <CalenderIcon /> },
  ];
  const [filterTab, setFilterTab] = useState("month");
  const handleTabClick = (view) => {
    setFilterTab(view);
    setActiveView(view);
  };
  const filterBars = (bars) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    switch (activeView) {
      case "trimestre":
        // Return bars within the current quarter
        const quarterEndMonth = Math.ceil((currentMonth + 1) / 3) * 3 - 1;
        return bars?.filter(
          (bar) => bar.startDay >= 1 && bar.startDay <= quarterEndMonth
        );
      case "mese":
        // Return bars in the current month
        return bars?.filter(
          (bar) => bar.startDay >= 1 && bar.startDay <= 30 // Adjust for actual month length
        );
      case "settimana":
        const currentDate = new Date();
        const currentWeekStart =
          currentDate.getDate() - (currentDate.getDay() || 7) + 1; // Start of the week
        const currentWeekEnd = currentWeekStart + 6; // End of the week
        return bars.filter(
          (bar) =>
            bar.startDay >= currentWeekStart && bar.startDay <= currentWeekEnd
        );
      case "giorno":
        // Return bars for the current day
        return bars.filter((bar) => bar.startDay === currentDay);
      default:
        return bars;
    }
  };

  return (
    <div className="w-full">
      <div className="flex bg-[#FAFAFA]">
        <div className="w-1/3">
          <div className="flex items-center gap-1 text-[#57C700] px-5 py-3">
            <CalenderIcon />
            <p className="text-sm leading-4 font-normal text-[#57C700]">Mese</p>
          </div>
        </div>
        <div className="w-2/3 flex items-center justify-center px-5 py-3">
          <div className="calenderGantt__header">
            <button onClick={handlePreviousMonth}>
              <ExpandLeft className="h-6 w-6" />
            </button>
            <p className="px-4 text-lg leading-5 text-[#100919] font-bold">
              {selectedMonth.label}
            </p>
            <button onClick={handleNextMonth}>
              <ExpandRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <ScrollArea>
        <div className="relative min-w-[1200px]">
          <div className="sticky top-0 z-10 flex border-b border-[#fff] bg-[#FAFAFA]">
            <div className="w-1/3 flex-none px-5 py-3">
              <Tabs defaultValue="mese">
                <div className="flex items-center gap-5">
                  {tabViews.map(({ key, label, icon }) => (
                    <div
                      key={key}
                      className={`flex gap-1 items-center cursor-pointer ${
                        activeView === key ? "text-[#57C700]" : "text-[#160A2A]"
                      }`}
                      onClick={() => handleTabClick(key)}
                    >
                      {React.cloneElement(icon, {
                        className: activeView === key ? "text-[#57C700]" : "",
                      })}
                      <p
                        className={`text-sm leading-4 font-normal ${
                          activeView === key
                            ? "text-[#57C700]"
                            : "text-[#160A2A]"
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </Tabs>
            </div>
            <div className="w-2/3 flex ">
              {dates
                .filter((x) =>
                  filterTab == "settimana"
                    ? x <= 5
                    : filterTab == "giorno"
                    ? x == 1
                    : x
                )
                .map((date) => {
                  const currentDateObj = new Date(2024, monthIndex, date);
                  const isWeekend =
                    currentDateObj.getDay() === 0 ||
                    currentDateObj.getDay() === 6;
                  return (
                    <div
                      className={`flex-1 text-center text-sm flex items-center justify-center ${
                        isWeekend ? "bg-[#FAFAFA]" : ""
                      }`}
                    >
                      {date}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Sections and users */}
          <div>
            {sections.map((section) => (
              <div key={section.id}>
                <div className="flex border-b border-[#fff]">
                  <div className="w-2/6 flex pl-1 pr-5 py-3 justify-between items-center">
                    <Button
                      className="flex items-center gap-[10px] text-base leading-5 text-[#666666] font-bold w-[calc(100% - 60px)]"
                      onClick={() => toggleSection(section.id)}
                    >
                      {expandedSections.includes(section.id) ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                      {section.title}
                    </Button>
                    <Button className="flex items-center justify-end gap-[7px] w-[60px]">
                      <ArrowUpNew
                        onClick={() => handelArrowUp(section.id, "up")}
                        className="h-6 w-6"
                      />
                      <ArrowDown
                        onClick={() => handelArrowUp(section.id, "down")}
                        className="h-6 w-6"
                      />
                    </Button>
                  </div>
                  <div className="relative flex w-2/3 calendar-grid">
                    {dates
                      .filter((x) =>
                        filterTab == "settimana"
                          ? x <= 5
                          : filterTab == "giorno"
                          ? x == 1
                          : x
                      )
                      .map((date) => {
                        const currentDateObj = new Date(2024, monthIndex, date);
                        const isWeekend =
                          currentDateObj.getDay() === 0 ||
                          currentDateObj.getDay() === 6;

                        return (
                          <div
                            key={date}
                            className={`flex-1 ${
                              filterTab == "settimana"
                                ? ""
                                : isWeekend
                                ? "bg-gray-100"
                                : ""
                            }`}
                          />
                        );
                      })}
                    {filterBars(
                      totalHoursPerWeek.find(
                        (item) => item.title === section.title
                      )?.bars
                    )?.map((bar) => {
                      return (
                        <div
                          className={`absolute top-1/2 flex h-9 -translate-y-1/2 cursor-ew-resize items-center gap-1 px-2 pl-[2px] rounded-md `}
                          style={{
                            ...getBarStyle(bar.startDay, 5),
                            borderRadius: "20px",
                            backgroundColor: bar.color,
                            ...(activeView === "settimana" && {
                              width: "89%",
                            }), // Full width for "settimana" view
                          }}
                        >
                          <div className="absolute flex items-center left-[2px]">
                            <CalendarAvatar className="h-8 w-8 rounded-full" />
                            {/* <CalendarAvatar className='h-8 w-8 rounded-full -ml-3' /> */}
                          </div>
                          <p className="text-sm font-medium text-white absolute right-3">
                            {bar.duration}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Users */}
                {expandedSections.includes(section.id) &&
                  users
                    .filter((user) =>
                      section.users.some((u) => u.id === user.id)
                    )
                    .map((user, index) => (
                      <div
                        key={user.id}
                        className="flex border-b border-[#fff]"
                      >
                        <div className="flex w-1/3 flex-none items-center gap-2 bg-[#FAFAFA] pl-4 pr-5 py-[7px]">
                          <Avatar
                            src={user.avatar}
                            alt={user.name}
                            allocation={user.allocation}
                            color={user.colors}
                          >
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <div className="min-w-0 flex-1 flex items-center">
                            <div className="w-2/4 text-base leading-5 font-normal text-[#666666]">
                              {user.name}
                            </div>
                            <div className="w-2/4 text-base leading-5 font-normal text-[#666666]">
                              {user.role}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button onClick={() => moveUserUp(user.id)}>
                              <ArrowUpNew className="h-6 w-6" />
                            </Button>
                            <Button onClick={() => moveUserDown(user.id)}>
                              <ArrowDown className="h-6 w-6" />
                            </Button>
                          </div>
                        </div>

                        <div className="relative flex w-2/3 calendar-grid">
                          {dates
                            .filter((x) =>
                              filterTab == "settimana"
                                ? x <= 5
                                : filterTab == "giorno"
                                ? x == 1
                                : x
                            )
                            .map((date) => {
                              const currentDateObj = new Date(
                                2024,
                                monthIndex,
                                date
                              );
                              const isWeekend =
                                currentDateObj.getDay() === 0 ||
                                currentDateObj.getDay() === 6;

                              return (
                                <div
                                  key={date}
                                  className={`flex-1  ${
                                    filterTab == "settimana"
                                      ? ""
                                      : isWeekend
                                      ? "bg-gray-100"
                                      : ""
                                  }`}
                                />
                              );
                            })}

                          {filterBars(user.bars).map((bar) => (
                            <div
                              key={bar.id}
                              className={`absolute top-1/2 flex h-9 -translate-y-1/2 cursor-ew-resize items-center gap-2 px-2 pl-[2px]`}
                              style={{
                                ...getBarStyle(bar.startDay, bar.duration),
                                borderRadius: "20px",
                                backgroundColor: bar.color,
                                ...(activeView === "settimana" && {
                                  width: "89%",
                                }),
                              }}
                              onMouseDown={(e) =>
                                handleDragStart(e, user.id, bar.id)
                              }
                            >
                              {/* Avatar at the start of the bar */}
                              <div className="absolute flex items-center left-[2px]">
                                <CalendarAvatar className="h-8 w-8 rounded-full" />
                              </div>

                              {/* Duration text at the right end */}
                              <p className="text-sm font-medium text-white ml-auto">
                                {bar.duration}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TimelineCalendar;
