import React from "react";
import moment from "moment";
import "./Calendar.scss";

const CustomWeekHeader = ({ date }) => {
  const dayName = moment(date).format("dddd"); // Example: "Monday"
  const dayDate = moment(date).format("DD/MM"); // Example: "11/11"
  
  return (
    <div className="custom-week-header">
      <span className="day-name">{dayName} </span>
      <span className="date">{dayDate}</span>
    </div>
  );
};

export default CustomWeekHeader;
