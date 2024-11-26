import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const GanttCalendar = ({ selected, handleSelect }) => {
  return (
    <ButtonGroup
      variant="text"
      disableElevation
      disableFocusRipple
      sx={{
        "& .MuiButtonGroup-grouped:not(:last-of-type)": {
          borderRight: "none", // Removes the vertical line
        },
      }}
    >
      {["Mese", "Settimana", "Giorno"].map((option) => (
        <Button
          key={option}
          onClick={() => handleSelect(option)}
          startIcon={<CalendarMonthIcon />}
          style={{
            color: selected === option ? "green" : "#2f2f2f",
            fontWeight: selected === option ? "bold" : "normal",
          }}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default GanttCalendar;
