import React, { useState } from 'react';
import Header from "../../../component/header/Header";
import MenuTab from "../../../component/tabs/MenuTab";
import Timesheet from './Timesheet'; // Assume this component exists
import Gantt from './Gantt'; // Assume this component exists

const Organizza = () => {
  const [selectedTab, setSelectedTab] = useState("Timesheet");

  const handleTabChange = (newTab) => {
    const tabMap = {
      tab1: "Timesheet",
      tab2: "Gantt",
    };
    setSelectedTab(tabMap[newTab] || "Timesheet");
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Timesheet":
        return <Timesheet />;
      case "Gantt":
        return <Gantt />;
      default:
        return <Timesheet />;
    }
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="organizza">
          <MenuTab
            onTabChange={handleTabChange}
            customClassName="organizzaTabs"
            organizza={true}
          />
          <div className="contentCard">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizza;