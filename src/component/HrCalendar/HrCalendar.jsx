import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/it";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Dialog,
  IconButton,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ReactComponent as Mese } from "../../assets/Mese.svg";
import { ReactComponent as Settimana } from "../../assets/Settimana.svg";
import { ReactComponent as Giorana } from "../../assets/Giorana.svg";
import { ReactComponent as Agenda } from "../../assets/Agenda.svg";
import AddCalendarEvent from "../Modal/AddCalendarEvent";
import "./Calendar.scss";
import CustomWeekHeader from "./CustomWeekHeader";
import CustomDayHeader from "./CustomDayHeader";
import CustomToolbar from "./CustomToolbar";
import PresenzeModal from "../Modal/Presenze";
import AddResourcesDialog from "../Modal/AddResourcesDialog";

import avatart_img from "../../assets/Img_Avatar_1.png";
import AbsentModal from "../Modal/Absent";

const events = [
  {
    id: 0,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 17, 10, 0, 0),
    end: new Date(2024, 11, 17, 15, 0, 0),
    desc: "Exploring the latest in tech innovation", // Description field
    eventType: "Meeting", // Event type
    assignedTo: "Me", // Assigned to
    color: "#ED1E79", // Color
  },
  {
    id: 1,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 16, 13, 0, 0),
    end: new Date(2024, 11, 16, 18, 0, 0),
    desc: "Panel discussions with industry leaders",
    eventType: "Call",
    assignedTo: "Other",
    color: "#B5179E",
  },
  {
    id: 2,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 4, 15, 0, 0),
    end: new Date(2024, 11, 4, 19, 0, 0),
    desc: "Hands-on workshops",
    eventType: "Meeting",
    assignedTo: "Me",
    color: "#7209B7",
  },
  {
    id: 3,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 5, 20, 0, 0),
    end: new Date(2024, 11, 5, 22, 0, 0),
    desc: "Networking session",
    eventType: "Call",
    assignedTo: "Other",
    color: "#3A0CA3",
  },
  {
    id: 4,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 6, 9, 0, 0),
    end: new Date(2024, 11, 6, 17, 0, 0),
    desc: "Annual industry conference",
    eventType: "Meeting",
    assignedTo: "Me",
    color: "#4361EE",
  },
  {
    id: 5,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 11, 27, 14, 0, 0),
    end: new Date(2024, 11, 27, 20, 0, 0),
    desc: "Closing ceremony",
    eventType: "Meeting",
    assignedTo: "Other",
    color: "#4AAFF0",
  },
];

// Set the locale for Italian
moment.locale("it"); // Use the Italian locale for Moment.js
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({
  acquisti_agenda = false,
  hr,
  hrView,
  hrCalendro,
}) {
  const [eventsData, setEventsData] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [showEventOpen, setShowEventOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState(hrView ? "week" : "month");
  const [particularEvent, setparticularEvent] = useState({});
  const [openModel, setOpenModel] = useState(false);
  const [absentModel, setAbsentModel] = useState(false);

  const handleOpenDialog = (value) => {
    if (!value) {
      setparticularEvent({});
    }
    setFormOpen(value); // Open dialog when AddButton is clicked

    if (formOpen) {
      setFormOpen(false);
    }
  };
  const handleOpenAbsentDialog = (value) => {
    if (!value) {
      setparticularEvent({});
    }
    setAbsentModel(value); // Open dialog when AddButton is clicked

    if (formOpen) {
      setAbsentModel(false);
    }
  };

  const handleSelect = ({ start, end }) => {
    // setFormOpen(true);
  };

  const CustomTimeGutterHeader = () => (
    <div className="custom-time-gutter-header">
      <strong>Tutto il giorno</strong>
    </div>
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventOpen(true);
  };

  const handleAddEvent = (newEvent) => {
    setEventsData([...eventsData, newEvent]);
    setFormOpen(false);
  };

  const handleClose = () => {
    setFormOpen(false);
    setShowEventOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month").toDate());
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month").toDate());
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // const dayPropGetter = (date) => {
  //   // Only apply the hover effect if the current view is "month"
  //   if (view === "month") {
  //     return {
  //       className: "calendar-day",
  //     };
  //   }
  //   return {}; // No additional styling for other views
  // };
  const handleModelopen = () => {
    setOpenModel(true);
  };

  // const CustomEvent = ({ event }) => (
  //   <div
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "flex-start",
  //       width: "100%",
  //       gap: "22px",
  //       padding: "0 28px",
  //       paddingBottom: "5px",
  //     }}
  //   >
  //     <p style={{ display: "flex", margin: "0" }}>
  //       <span
  //         className="event-dot"
  //         style={{
  //           marginTop: "4px",
  //           display: "block",
  //           backgroundColor: event.eventType === "Meeting" && "#DB0000",
  //         }}
  //       />{" "}
  //       {/* This is the colored dot */}
  //       <span style={{ display: "block" }}>
  //         <span style={{ fontWeight: "600" }}>09:00 - 13:30</span>
  //         <span style={{ display: "block" }}>Presenti</span>
  //       </span>
  //     </p>
  //     <p
  //       style={{
  //         padding: "2px 6px",
  //         backgroundColor:
  //           event.eventType === "Meeting" ? "#DB000033" : "#57C70033",
  //         color: event.eventType === "Meeting" ? "#DB0000" : "#57C700",
  //         borderRadius: "6px",
  //         margin: "0",
  //       }}
  //     >
  //       36
  //     </p>
  //   </div>
  // );
  const [isHovered, setIsHovered] = useState(false);
  const CustomEvent = () => {
    return (
      <>
        <div
          className="calenderDetailBox"
          // style={{
          //   backgroundColor: isHovered ? "#57C70033" : "transparent",
          //   transition: "background-color 0.3s ease",
          // }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setFormOpen(true)}
        >
          <div className="calenderDetailBox__inner">
            <span className="calenderDetailBox__dots"></span>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                }}
              >
                09:00 - 13:30
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#000",
                }}
              >
                Presenti
              </p>
            </div>
          </div>
          <p className="calenderDetailBox__label">36</p>
        </div>

        {/* Assenti */}
        <div
          className="calenderDetailBoxAbsent"
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          //   width: "100%",
          //   padding: "5px 28px",
          //   gap: "16px",
          // }}
          onClick={() => setAbsentModel(true)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#DB0000",
              }}
            ></span>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                }}
              >
                09:00 - 13:30
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#000",
                }}
              >
                Assenti
              </p>
            </div>
          </div>
          <p
            style={{
              padding: "2px 8px",
              backgroundColor: "#DB000033",
              color: "#DB0000",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "600",
              margin: 0,
            }}
          >
            4
          </p>
        </div>
      </>
    );
  };
  const handleCloseAbsentModal = (value) => {
    setAbsentModel(value);
  };

  const CustomWeekEvent = ({ event }) => (
    <div className="custom-week-event">
      <div>
        <span className="event-dot" /> {/* Green dot */}
        <span className="custom-week-event-time">
          {moment(event.start).format("HH:mm")}-
          {moment(event.end).format("HH:mm")}
        </span>
      </div>
      <span className="event_title">{event.title}</span>

      <div className="avatar_stack">
        <img src={avatart_img} alt="" />
        <img src={avatart_img} alt="" />
        <img src={avatart_img} alt="" />
        <img src={avatart_img} alt="" />
        <img src={avatart_img} alt="" />
      </div>
      <a
        // href="javascript:void(0)"
        className="event_link"
        onClick={handleModelopen}
      >
        Aggiungi risorse
      </a>
    </div>
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        backgroundColor: "lightgreen", // Customize the background color here
        color: "black", // Customize the text color if needed
        borderRadius: "5px", // Optional styling
        border: "none", // Remove border if present
        display: "block",
        padding: "4px", // Padding for text within the event
      },
    };
  };

  const groupedEvents = events.reduce((acc, event) => {
    const dateKey = event.start.toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});

  console.log(
    Object.entries(groupedEvents)
      .sort()
      .map(([dateKey, dayEvents]) =>
        console.log(dateKey, dayEvents, "dayEvents_dateKeys")
      ),
    "groupedEvents"
  );

  // Format time from Date object
  const formatTime = (date) => {
    return date.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const handleOpenEventDialog = (event) => {
    setparticularEvent(event);
    setFormOpen(true);
  };

  // Format date for header
  const formatDate = (date) => {
    const days = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];
    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const month = date.getMonth() + 1;
    return `${day} ${dateNum}/${month}`;
  };

  useEffect(() => {
    hrView
      ? setView("week")
      : window.location.pathname === "/hr/colaboratory/sub-colaboratory/Agenda"
      ? setView("agenda")
      : setView("month");
  }, [hrView]);

  // const dayPropGetter = (date) => {
  //   // Only apply the hover effect if the current view is "month"
  //   if (view === "month") {
  //     return {
  //       className: "calendar-day",
  //     };
  //   }
  //   return {}; // No additional styling for other views
  // };

  return (
    <div className="calenderBlock">
      <Box className="calenderBlock__head">
        <Box className="calenderBlock__viewAction">
          {!acquisti_agenda && !hr && !hrCalendro && (
            <>
              <Button
                startIcon={<Mese />}
                onClick={() => setView("month")}
                className={
                  view === "month" ? `viewButton_active` : `viewButton`
                }
              >
                Mese
              </Button>

              <Button
                startIcon={<Settimana />}
                onClick={() => setView("week")}
                className={view === "week" ? `viewButton_active` : `viewButton`}
              >
                Settimana
              </Button>
              <Button
                startIcon={<Giorana />}
                onClick={() => setView("day")}
                className={view === "day" ? `viewButton_active` : `viewButton`}
              >
                Giorno
              </Button>
              <Button
                startIcon={<Agenda />}
                onClick={() => setView("agenda")}
                className={
                  view === "agenda" ? `viewButton_active` : `viewButton`
                }
              >
                Agenda
              </Button>
            </>
          )}
          {hr && (
            <Button
              startIcon={<Mese />}
              onClick={() => setView("month")}
              className={view === "month" ? `viewButton_active` : `viewButton`}
            >
              Mese
            </Button>
          )}
       
        </Box>

        <Box className="calenderBlock__title">
          <IconButton onClick={handlePrevMonth}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className="mainTitle">
            {moment(currentDate).format("MMMM YYYY")}
          </Typography>
          <IconButton onClick={handleNextMonth}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box className="calenderBlock__filter">
          <Button
            variant="contained"
            onClick={handleToday}
            className="greenBtn"
          >
            Oggi
          </Button>

          <IconButton className="iconBtn">
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>
      {view === "agenda" ? (
        <div className="calendar_aganda">
          <div className="calendar_aganda_month">Martedì</div>
          {Object.entries(groupedEvents)
            .sort()
            .map(([dateKey, dayEvents]) => (
              <div key={dateKey} className="day-container_aganda">
                <h2 className="date-header_aganda">
                  {formatDate(new Date(dateKey))}
                </h2>
                <div className="events-container_aganda">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="event-item_aganda"
                      onClick={() => handleOpenEventDialog(event)}
                    >
                      <span className="event-time_aganda">
                        {event.allDay
                          ? "All Day"
                          : `${formatTime(event.start)}-${formatTime(
                              event.end
                            )}`}
                      </span>
                      <div className="event-content_aganda">
                        <span className="event-dot_aganda"></span>
                        <div className="event-details_aganda">
                          <span className="event-title_aganda">
                            {event.title}
                          </span>
                          {/* {event.desc && (
                            <p className="event-description_aganda">
                              {event.desc}
                            </p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="calendar_aganda-addBtn"
                  onClick={() => setFormOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>
      ) : (
        <Calendar
          views={["day", "agenda", "week", "month"]}
          selectable
          localizer={localizer}
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          view={view}
          onView={setView}
          defaultDate={new Date()}
          events={eventsData}
          className="calendar-container CustomCalender"
          onSelectEvent={handleEventClick}
          onSelectSlot={handleSelect}
          toolbar={false}
          // dayPropGetter={dayPropGetter}
          eventPropGetter={eventStyleGetter} // Apply the custom styles to events
          components={{
            event: view === "month" ? CustomEvent : CustomWeekEvent,
            timeGutterHeader: CustomTimeGutterHeader,
            week: {
              header: CustomWeekHeader, // Use CustomWeekHeader in week view header
            },
            day: {
              header: (props) => (
                <CustomToolbar {...props} date={currentDate} />
              ), // Pass the currentDate as date prop
            },
          }}
        />
      )}
      {formOpen &&
        (hr ? (
          hrView ? (
            <AddResourcesDialog handleClose={() => setFormOpen(false)} />
          ) : (
            <PresenzeModal open={formOpen} handleClose={handleOpenDialog} />
          )
        ) : (
          <AddCalendarEvent
            onClose={handleOpenDialog}
            open={formOpen}
            event={particularEvent}
          />
        ))}

      {openModel && (
        <AddResourcesDialog handleClose={() => setOpenModel(false)} />
      )}
      {absentModel && (
        <AbsentModal open={absentModel} handleClose={handleCloseAbsentModal} />
      )}
    </div>
  );
}
