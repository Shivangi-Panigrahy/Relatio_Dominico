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
const events = [
  {
    vehicle: "Furgone DH504JC",
    time: "dal 28/11/2024 h 15:30 a 28/11/2024 h 18:30",
    departure: "Stabilimento x",
    arrival: "Partenza da: Stabilimento x  arrivo a: stabilimento y",
    manager: "Responsabile Matteo Vellone",
    status: "completo",
    duration: "2h",
    avatarUrl: "/placeholder.svg",
  },
  {
    vehicle: "Furgone DH504JC",
    time: "dal 28/11/2024 h 15:30 a 28/11/2024 h 18:30",
    departure: "Stabilimento x",
    arrival: "Partenza da: Stabilimento x  arrivo a: stabilimento y",
    manager: "Responsabile Matteo Vellone",
    status: "completo",
    duration: "2h",
    avatarUrl: "/placeholder.svg",
  },
  {
    vehicle: "Furgone DH504JC",
    time: "dal 28/11/2024 h 15:30 a 28/11/2024 h 18:30",
    departure: "Stabilimento x",
    arrival: "Partenza da: Stabilimento x  arrivo a: stabilimento y",
    manager: "Responsabile Matteo Vellone",
    status: "incorso",
    duration: "2h",
    avatarUrl: "/placeholder.svg",
  },
  {
    vehicle: "Furgone DH504JC",
    time: "dal 28/11/2024 h 15:30 a 28/11/2024 h 18:30",
    departure: "Stabilimento x",
    arrival: "Partenza da: Stabilimento x  arrivo a: stabilimento y",
    manager: "Responsabile Matteo Vellone",
    status: "inattesa",
    duration: "2h",
    avatarUrl: "/placeholder.svg",
  },
];

const statusConfig = {
  completo: {
    label: "Completato",
    color: "white",
    bgColor: "#57C700",
    boxColor: "#160A2A1A",
  },
  incorso: {
    label: "In cosro",
    color: "white",
    bgColor: "#57C700",
    boxColor: "#57C7001A",
  },
  //   cancelled: {
  //     label: "Scaduto",
  //     color: "white",
  //     bgColor: "#DB0000",
  //     boxColor:"#DB000033"
  //   },
  inattesa: {
    label: "In attesa",
    color: "white",
    bgColor: "#FFA903",
    boxColor: "#FFA90333",
  },
};
const EventItem = styled(Paper)(({ theme, status }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: statusConfig[status].boxColor,
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: statusConfig[status].hoverColor || theme.palette.grey[200],
  },
}));

const EventLogisticDialog = ({ open, onClose }) => {
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

          return (
            <EventItem className="EventItem" key={index} status={event.status}>
              <div className="EventItem__inner">
                <Box className="EventItem__left">
                  <h1
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px", // Specify font size
                      fontFamily: "Secondario",
                      lineHeight: "17px",
                       // Specify font family
                    }}
                  >
                    {event.vehicle}
                  </h1>
                  <p color="text.secondary">{event.time}</p>
                  <p color="text.secondary">{event.arrival}</p>
                  <p color="text.secondary">{event.manager}</p>
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
            </EventItem>
          );
        })}
      </DialogContent>

      <div className="MainEventModel__footer"></div>
    </Dialog>
  );
};
export default EventLogisticDialog;
