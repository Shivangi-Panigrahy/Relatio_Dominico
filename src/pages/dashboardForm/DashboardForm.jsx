import React, { useState } from "react";
import Header from "../../component/header/Header";
import Form1 from "../dashboardForm/Form1";
import Form2 from "../dashboardForm/Form2";
import tableData from "../../utils/tableData.json"; // Importing table data from a JSON file
import tableSubData from "../../utils/tableData.json"; // Importing sub-table data from a JSON file
// import Table from "./Table/Table.jsx";
import MenuTab from "../../component/tabs/MenuTab";
import "./DashboardForm.scss";
const DashboardForm = () => {
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
    setValue(-1); // Reset the valuea
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
      <Header />
      <div className="TemplateFormThree">
        <div className="TemplateFormThree__left">
          <Form1 />
          <Form2 />
        </div>
        <div className="TemplateFormThree__right">
          <MenuTab
            onTabChange={handleTabChange}
            customClassName="customTabForm"
          />

          {/* <Table
          /> */}
        </div>
      </div>
    </>
  );
};
export default DashboardForm;
