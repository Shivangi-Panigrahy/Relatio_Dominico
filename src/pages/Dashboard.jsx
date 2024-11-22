import React, { useState } from "react";
import Table from "../component/table/Table"; // Importing the Table component for displaying data
import InvoiceDashboard from "../component/invoiceStatitics/InvoiceDashboard"; // Importing the InvoiceDashboard component
import MenuTab from "../component/tabs/MenuTab"; // Importing the MenuTab component for tab navigation
import MenuLink from "../component/tabs/MenuLink"; // Importing the MenuLink component for sub-tab navigation
import Header from "../component/header/Header"; // Importing the Header component
import tableData from "../utils/tableData.json"; // Importing table data from a JSON file
import tableSubData from "../utils/tableSubData.json"; // Importing sub-table data from a JSON file

const Dashboard = () => {
  // State to track the active main tab
  const [activeTab, setActiveTab] = useState("tab1");
  // State to track the active sub-tab
  const [activeSubTab, setSubActiveTab] = useState("");
  // State to track the selected value
  const [value, setValue] = React.useState(-1);

  // Function to handle tab changes
  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
    setSubActiveTab(""); // Reset the active sub-tab
    setValue(-1); // Reset the value
  };

  let countTab = []; // Array to hold the count of sub-tab data
  const tableDataLength = tableData.tabData[activeTab]; // Get data length for the active tab
  const tab1 = tableSubData.tabData["tab1"]?.length; // Get length of sub-data for tab1
  const tab2 = tableSubData.tabData["tab2"]?.length; // Get length of sub-data for tab2
  const tab3 = tableSubData.tabData["tab3"]?.length; // Get length of sub-data for tab3
  const tab4 = tableSubData.tabData["tab4"]?.length; // Get length of sub-data for tab4
  countTab.push(tab1, tab2, tab3, tab4); // Push sub-tab lengths into the countTab array

  return (
    <>
      {/* Render the header */}
      <Header />
      <div className="pageTemplate">
        {/* Render the main tab navigation */}
        <MenuTab onTabChange={handleTabChange} />
        {/* Render the invoice dashboard */}
        <InvoiceDashboard />
        {/* Render the sub-tab navigation with counts */}
        {/* <MenuLink
        subData={countTab} // Pass the counts of sub-tabs
        setSubActiveTab={setSubActiveTab} // Function to update the active sub-tab
        value={value} // Pass the current value
        setValue={setValue} // Function to update the value
      /> */}
        {/* Render the table with appropriate data based on active sub-tab or main tab */}
        <Table
          data={
            activeSubTab
              ? tableSubData.tabData[activeSubTab] // Use sub-tab data if active
              : tableData.tabData[activeTab] // Use main tab data otherwise
          }
        />
      </div>
    </>
  );
};

export default Dashboard; // Export the Dashboard component
