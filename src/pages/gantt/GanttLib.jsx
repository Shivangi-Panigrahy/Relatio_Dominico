import React, { useState } from "react";
import Header from "../../component/header/Header";
import GanttChartLibrary from "../../component/gantt/ganttLibrary";
import MenuTab from "../../component/tabs/MenuTab";
import GanttCard from "../../component/gantt/GanttCard";
import GanttCalendar from "../../component/gantt/GanttCalendar";

const GanttLib = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [value, setValue] = React.useState(-1);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
    setValue(-1); // Reset the value
  };
  const [selected, setSelected] = useState("Mese");

  const handleSelect = (option) => {
    setSelected(option);
  };
  console.log(selected, "dfhdh");
  return (
    <>
      <Header />

      <div className="calenderGantt">
        <MenuTab onTabChange={handleTabChange} gantt={true} />
        <GanttCard />
        <GanttCalendar selected={selected} handleSelect={handleSelect} />
        <GanttChartLibrary selected={selected} />
      </div>
    </>
  );
};

export default GanttLib;
