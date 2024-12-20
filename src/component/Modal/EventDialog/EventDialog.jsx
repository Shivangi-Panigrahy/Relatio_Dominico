import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Avatar,
  Chip,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import "./EventDialog.scss"
const events = [
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "completed",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "completed",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "cancelled",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
  {
    clientName: "Nome del Cliente",
    activity: "Attività (incontro ecc. ecc.)",
    status: "incomplete",
    duration: "2h",
    avatarUrl: "/placeholder.svg"
  },
];
const statusConfig = {
  completed: {
    label: "Completato",
    color: "success",
    bgColor: "#e8f5e9",
  },
  incomplete: {
    label: "Incompleto",
    color: "warning",
    bgColor: "#fff3e0",
  },
  cancelled: {
    label: "Annullato",
    color: "error",
    bgColor: "#ffebee",
  },
};
const EventItem = styled(Paper)(({ theme, status }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: statusConfig[status].bgColor,
}));
 const  EventDialog = ({open,onClose})=> {
  return (
    <Dialog className="MainEventModel" open={open} onClose={() => onClose(false)} maxWidth="sm" fullWidth>
      <h3 className='MainEventModel__title'>
        Eventi del 28/11/2024
      </h3>
      <DialogContent className='MainEventModel__body'>
        {events.map((event, index) => (
          <EventItem className='EventItem' key={index} status={event.status}>
            <Box className="EventItem__left">
              <h5>{event.clientName}</h5>
              <p color="text.secondary">
                {event.activity}
              </p>
            </Box>
            <Box className="EventItem__user">
              <Chip className='EventItem__user__tag'
                label={statusConfig[event.status].label}
                color={statusConfig[event.status].color}
                size="small"
              />
              <h6  color="text.secondary">{event.duration}</h6>
              <Avatar src={event.avatarUrl} sx={{ width: 28, height: 28 }}>
                NC
              </Avatar>
            </Box>
          </EventItem>
        ))}
      </DialogContent>
      <div className='MainEventModel__footer'>
      </div>
    </Dialog>
  );
}
export default EventDialog;