import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Avatar,
  Chip,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./EventDialog.scss";
import { ReactComponent as Avatar1 } from "../../../assets/Avatar1.svg";
import CustomCheckbox from "../../table/Checkbox";
const eventsData = [
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "completed",
    duration: "2h",
    description: "Descrizione  completa del Task da fare",
    avatarUrl: "/placeholder.svg",
    checked: true,
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    description: "Descrizione  completa del Task da fare",
    avatarUrl: "/placeholder.svg",
    checked: false,
  },

  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "cancelled",
    duration: "2h",
    description: "Descrizione  completa del Task da fare",
    avatarUrl: "/placeholder.svg",
    checked: false,
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "inattesa",
    duration: "2h",
    description: "Descrizione  completa del Task da fare",
    avatarUrl: "/placeholder.svg",
    checked: false,
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    description: "Descrizione  completa del Task da fare",
    avatarUrl: "/placeholder.svg",
    checked: false,
  },
];
const statusConfig = {
  completed: {
    label: "Completato",
    color: "white",
    bgColor: "#57C700",
    boxColor:"#57C700"
  },
  incomplete: {
    label: "In cosro",
    color: "white",
    bgColor: "#57C700",
    boxColor:"#57C7001A"
  },
  cancelled: {
    label: "Scaduto",
    color: "white",
    bgColor: "#DB0000",
    boxColor:"#DB000033"
  },
  inattesa: {
    label: "In attesa",
    color: "white",
    bgColor: "#FFA903",
    boxColor:"#FFA90333"
  },
};
const EventItem = styled(Paper)(({ theme, status }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: statusConfig[status].boxColor,
}));
const EventActivitaDialog = ({ open, onClose }) => {
  const [events, setEvents] = useState(eventsData);

  // Handle checkbox toggle
  const handleCheckboxChange = (index) => {
    console.log(index, "index");
    const updatedEvents = [...events];
    updatedEvents[index].checked = !updatedEvents[index].checked;
    setEvents(updatedEvents);
  };

  return (
    <Dialog
      className="MainEventModel activaEventModel"
      open={open}
      onClose={() => onClose(false)}
      maxWidth="sm"
      fullWidth
    >
      <h3 className="MainEventModel__title">Eventi del 28/11/2024</h3>
      <DialogContent className="MainEventModel__body">
        {events.map((event, index) => {
          // Log the values for debugging
          console.log("Label:", statusConfig[event.status]?.label);
          console.log("Color:", statusConfig[event.status]?.color);

          return (
            <EventItem className="EventItem" key={index} status={event.status}>
              <div className="EventItem__inner">
                <Box className="EventItem__left">
                  <h5>{event.clientName}</h5>
                  <p color="text.secondary">{event.activity}</p>
                </Box>
                <Box className="EventItem__user">
                  <Chip
                    className="EventItem__user__tag"
                    label={statusConfig[event.status]?.label}
                 
                    sx={{
                      color: statusConfig[event.status]?.color, // Custom text color
                      backgroundColor: statusConfig[event.status]?.bgColor, // Custom background color
                    }}
                    size="small"
                  />
                  <h6 color="text.secondary">{event.duration}</h6>
                  <Avatar sx={{ width: 28, height: 28 }}>
                    <Avatar1 />
                  </Avatar>
                </Box>
              </div>
              <CustomCheckbox
                className="customChechbox"
                color="primary"
                checked={event.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <label
                className="label"
                style={{
                  textDecoration:
                    event.status === "completed" ? "line-through" : "none",
                }}
              >
                {event.description}
              </label>
            </EventItem>
          );
        })}
      </DialogContent>

      <div className="MainEventModel__footer"></div>
    </Dialog>
  );
};
export default EventActivitaDialog;
