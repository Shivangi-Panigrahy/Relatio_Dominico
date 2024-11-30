import React from "react";
import Header from "../../../component/header/Header";
import ReactBigCalendar from '../../../component/HrCalendar/HrCalendar'
import { ReactComponent as Mese } from "../../../assets/Mese.svg";
import { Tab, Tabs } from "@mui/material";

const Calendario = () => {
  const [value, setValue] = React.useState("Calendario");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="calender">
          <Tabs value={value} onChange={handleChange} textColor="primary">
            <Tab value="Calendario" label="Calendario" icon={<Mese />} />
            <Tab value="Organizza" label="Organizza" icon={<Mese />} />
          </Tabs>
          <div className="calenderCard">
            {/* Calendar Component */}
            <ReactBigCalendar hr={true} hrView={value === "Organizza"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;
