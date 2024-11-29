import React from "react";
import { Box, Card, Container } from "@mui/material";
import Header from "../../../component/header/Header";
import ReactBigCalendar from "../../../component/calendar/Calendar"; // Updated import for the Calendar component
import "./Calendario.scss";

const Calendario = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="calenderCard">
          {/* Calendar Component */}
          <ReactBigCalendar />
        </div>
      </div>
    </>
  );
};

export default Calendario;
