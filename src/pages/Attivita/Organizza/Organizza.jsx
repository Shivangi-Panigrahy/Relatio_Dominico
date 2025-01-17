import React, { useState } from 'react';
import Header from "../../../component/header/Header";
import MenuTab from "../../../component/tabs/MenuTab";
import Timesheet from './Timesheet'; // Assume this component exists
import Gantt from './Gantt'; // Assume this component exists
import InvoiceDashboard from '../../../component/invoiceStatitics/InvoiceDashboard';

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
        return ;
    }
  };

  const OrganizzaData = [
    {
      status: "Collaboratori",
      count: 53,
      color: "#100919",
    },
    {
      status: "Livello di occupazione complessivo",
      count: '85%',
      color: "#57C700",
    },
    {
      status: "Progetti",
      count: 32,
      color: "#FFA903",
    },
    {
      status: "Ore pianificate",
      count: 280,
      color: "#DB0000",
    },
  ];
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
          <InvoiceDashboard ordini={OrganizzaData} />
          <div className="contentCard">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizza;