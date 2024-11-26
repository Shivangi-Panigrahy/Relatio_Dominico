import React, { useState } from "react";
import GanttChart from "../../component/gantt/GanttChart";
import Header from "../../component/header/Header";
import GanttCard from "../../component/gantt/GanttCard";
import MenuTab from "../../component/tabs/MenuTab";

const Gantt = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [value, setValue] = React.useState(-1);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
    setValue(-1); // Reset the value
  };
  return (
    <>
      <Header />

      <div className="calenderGantt">
        <MenuTab onTabChange={handleTabChange} gantt={true} />
        <GanttCard />
        <GanttChart />
      </div>
    </>
  );
};

export default Gantt;
