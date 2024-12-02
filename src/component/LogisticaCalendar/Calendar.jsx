import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/it";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, IconButton, Button, Box, Typography } from "@mui/material";
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
import EventDialog from "../../component/Modal/EventDialog/EventDialog";
import { ReactComponent as CalendarAvatar } from "../../assets/CalendarAvatar.svg";
const events = [
  {
    id: 0,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 29, 10, 0, 0),
    end: new Date(2024, 10, 29, 12, 0, 0),
    desc: "Exploring the latest in tech innovation", // Description field
    eventType: "Meeting", // Event type
    assignedTo: "Me", // Assigned to
    color: "#ED1E79", // Color
  },
  {
    id: 1,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 28, 13, 0, 0),
    end: new Date(2024, 10, 28, 15, 0, 0),
    desc: "Panel discussions with industry leaders",
    eventType: "Appointment",
    assignedTo: "Other",
    color: "#B5179E",
  },
  {
    id: 2,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 27, 15, 0, 0),
    end: new Date(2024, 10, 27, 19, 0, 0),
    desc: "Hands-on workshops",
    eventType: "Meeting",
    assignedTo: "Me",
    color: "#7209B7",
  },
  {
    id: 3,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 27, 20, 0, 0),
    end: new Date(2024, 10, 27, 22, 0, 0),
    desc: "Networking session",
    eventType: "Appointment",
    assignedTo: "Other",
    color: "#3A0CA3",
  },
  {
    id: 4,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 26, 9, 0, 0),
    end: new Date(2024, 10, 26, 17, 0, 0),
    desc: "Annual industry conference",
    eventType: "Meeting",
    assignedTo: "Me",
    color: "#4361EE",
  },
  {
    id: 5,
    title: `Tech Innovators Conference`,
    allDay: false,
    start: new Date(2024, 10, 25, 14, 0, 0),
    end: new Date(2024, 10, 25, 20, 0, 0),
    desc: "Closing ceremony",
    eventType: "Appointment",
    assignedTo: "Other",
    color: "#4AAFF0",
  },
];
// Set the locale for Italian
moment.locale("it"); // Use the Italian locale for Moment.js
const localizer = momentLocalizer(moment);
export default function ReactBigCalendar({ acquisti_agenda = false }) {
  const [eventsData, setEventsData] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [showEventOpen, setShowEventOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState(acquisti_agenda ? "agenda" : "month");
  const [particularEvent, setparticularEvent] = useState({});
  // const [openEVentDialog, setOpenEVentDialog] = useState(false);
  const [toggleEvent,setToggleEvent] = useState(false)
  console.log(toggleEvent,'setToggleEvent');
  const handleOpenDialog = (value) => {
    if (!value) {
      setparticularEvent({});
    }
    setFormOpen(value); // Open dialog when AddButton is clicked
  };
  console.log(eventsData, "eventsData");
  const handleSelect = ({ start, end }) => {
    setFormOpen(true);
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
  const dayPropGetter = (date) => {
    // Only apply the hover effect if the current view is "month"
    if (view === "month") {
      return {
        className: "calendar-day",
      };
    }
    return {}; // No additional styling for other views
  };
  const CustomEvent = ({ event }) => (
    <>
      <span>
        <span>
          <span
            className="event-dot"
            style={{
              backgroundColor:
                event.eventType === "Appointment" ? "#FFA903" : "#57C700",
            }}
          />{" "}
          <span className="custom-week-event-time">
            {moment(event.start).format("HH:mm")}- 
            {moment(event.end).format("HH:mm")}
          </span>
        </span>
        <span>{event.title}</span>
      </span>
      <button
        style={{ cursor: "crosshair" }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent calendar's event handling
          console.log("Button clicked inside CustomEvent");
        }}
      >
        Vedi tutti
      </button>
    </>
  );
  const CustomWeekEvent = ({ event }) => (
    <div className="custom-week-event" style={{ backgroundColor: event.eventType==="Appointment" && "#FFA90333" }}>
      <div className="custom-week-event-inner">
        <h2>Nome del Cliente</h2>
        <div className="userbox">
          <span>2h</span>
          <div className="userbox__img">
            <CalendarAvatar />
            <CalendarAvatar />
          </div>
        </div>
      </div>
      <p>Attività (incontro ecc. ecc. )</p>
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
    console.log("coming in here to open");
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
  return (
    <div className="calenderBlock">
      <Box className="calenderBlock__head">
        <Box className="calenderBlock__viewAction">
          {!acquisti_agenda && (
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
                        <span className="event-dot_aganda" style={{
              backgroundColor: event.eventType === "Appointment" ? "#FFA903" : "#57C700",
            }}></span>
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
          className="calendar-container"
          onSelectEvent={handleEventClick}
          onSelectSlot={handleSelect}
          toolbar={false}
          dayPropGetter={dayPropGetter}
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
      {formOpen && (
        <AddCalendarEvent
          onClose={handleOpenDialog}
          open={formOpen}
          event={particularEvent}
        />
      )}
      <EventDialog open={toggleEvent} />
    </div>
  );
}
