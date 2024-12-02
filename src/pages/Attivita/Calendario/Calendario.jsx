import React from "react";
import Header from "../../../component/header/Header";
import ReactBigCalendar from "../../../component/AttivitaCalendar/Calendar";

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
