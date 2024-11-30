import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import "./AddCalendarEvent.scss";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ReactComponent as RightCheck } from "../../assets/RightCheck.svg";
import InfoIcon from "@mui/icons-material/Info";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddCalendarEvent = ({ open, onClose, event = {} }) => {
  const colors = [
    "#ED1E79",
    "#B5179E",
    "#7209B7",
    "#3A0CA3",
    "#4361EE",
    "#4AAFF0",
  ];
  const [circleInd, setCircleInd] = useState(colors.indexOf(event?.color) || 0);
  const [isAllDay, setIsAllDay] = useState(event?.allDay || false);

  return (
    <Dialog
      className="calenderEventModel"
      open={open}
      onClose={() => onClose(false)}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className="calenderEventModel__header">
        {event.title || "Nuovo evento"}
      </DialogTitle>

      <DialogContent className="calenderEventModel__content">
        {/* Event type */}
        <div className="customFieldBox">
          <FormControl
            className="customSearchField"
            fullWidth
            margin="normal"
            variant="outlined"
          >
            {" "}
            {/* <InputLabel>Tipo di evento</InputLabel>{" "}
            <Select label="eventType" value={event?.eventType||""}>
              {" "}
              <MenuItem value="meeting">Meeting</MenuItem>{" "}
              <MenuItem value="call">Call</MenuItem>{" "}
            </Select>{" "} */}
            <InputLabel>Tipo di evento</InputLabel>
            <Select
              label="Tipo di evento"
              defaultValue={event?.eventType?.toLowerCase() || ""}
            >
              <MenuItem value="meeting">Meeting</MenuItem>
              <MenuItem value="call">Call</MenuItem>
            </Select>
          </FormControl>
          <div className="info_text">
            <InfoIcon />
            <Typography>Caption text, description, notification</Typography>
          </div>
        </div>

        {/* Assigned to */}
        <div className="customFieldBox">
          <FormControl
            className="customSearchField"
            fullWidth
            margin="normal"
            variant="outlined"
          >
            <InputLabel>Assegnato a</InputLabel>
            <Select
              label="Assegnato a"
              defaultValue={event?.assignedTo?.toLowerCase() || ""}
            >
              <MenuItem value="me">Me</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <div className="info_text">
            <InfoIcon />
            <Typography>Caption text, description, notification</Typography>
          </div>
        </div>

        {/* Title */}
        <div className="customFieldBox">
          <TextField
            className="customSearchField"
            fullWidth
            label="Titolo"
            variant="outlined"
            margin="normal"
            defaultValue={event?.title || ""}
          />
          <div className="info_text">
            <InfoIcon />
            <Typography>Caption text, description, notification</Typography>
          </div>
        </div>

        {/* Description */}
        <div className="customFieldBox">
          <TextField
            className="customSearchField"
            fullWidth
            label="Descrizione"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            defaultValue={event?.desc || ""}
          />
        </div>

        {/* All-day switch */}
        <div className="customCheckBox">
          <FormControlLabel
            control={
              <Switch
                checked={isAllDay}
                onChange={(e) => setIsAllDay(e?.target?.checked)}
              />
            }
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#57c700",
              },
            }}
            label="Tutto il giorno"
            className="all-day-toggle"
          />
        </div>

        {/* Start date/time */}
        <div className="customFieldBox">
          <TextField
            className="customSearchField"
            fullWidth
            label="Inizio"
            type="datetime-local"
            margin="normal"
            defaultValue={
              event?.start ? event?.start.toISOString().slice(0, 16) : ""
            }
            InputLabelProps={{ shrink: true }} // Keeps label "Fine" in place
            inputProps={{
              style: { cursor: "pointer" }, // Adds cursor pointer on the text field
            }}
            onClick={(e) => e.target.showPicker && e.target.showPicker()} // Opens picker on click
          />
          <div className="info_text">
            <InfoIcon />
            <Typography>Caption text, description, notification</Typography>
          </div>
        </div>

        {/* End date/time */}
        <div className="customFieldBox">
          <TextField
            className="customSearchField"
            fullWidth
            label="Fine"
            type="datetime-local"
            margin="normal"
            defaultValue={
              event?.end ? event?.end.toISOString().slice(0, 16) : ""
            }
            InputLabelProps={{ shrink: true }} // Keeps label "Fine" in place
            inputProps={{
              style: { cursor: "pointer" }, // Adds cursor pointer on the text field
            }}
            onClick={(e) => e.target.showPicker && e.target.showPicker()} // Opens picker on click
          />
          <div className="info_text">
            <InfoIcon />
            <Typography>Caption text, description, notification</Typography>
          </div>
        </div>

        {/* Color selector */}
        <Box className="circleContainer">
          {colors.map((color, index) => (
            <Box className="circleContainer__inner" key={index}>
              <div
                className={`circle ${
                  index === circleInd ? "circleShadow" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setCircleInd(index)}
              >
                {index === circleInd && <RightCheck className="checkIcon" />}
              </div>
            </Box>
          ))}
        </Box>
      </DialogContent>

      <DialogActions className="calenderEventModel__footer">
        <Button
          className="greenButton"
          style={{
            fontFamily: '"Public Sans", sans-serif',
          }}
        >
          Salva
        </Button>
        <Button
          onClick={() => onClose(false)}
          variant="outlined"
          style={{
            borderColor: "#DB0000",
            color: "#DB0000",
            fontFamily: '"Public Sans", sans-serif',
          }}
          color="error"
        >
          Cancella
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCalendarEvent;
