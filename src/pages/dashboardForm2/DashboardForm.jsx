import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../component/header/Header";
import Form1 from "../dashboardForm/Form1";
import tableData from "../../utils/tableData.json";
import tableSubData from "../../utils/tableSubData.json";
import MenuTab from "../../component/tabs/MenuTab";
import DashboardFormTable from "./DashboardFormTable/DashboardFormTable.jsx";
import "./DashboardForm.scss";
import { AddButton } from "../../component/button/AddButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
// import SearchField from "../../component/filter/SearchField.jsx";
const DashboardForm = () => {
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
  countTab.push(tab1, tab2, tab3, tab4);

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <Form1 />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Box className="TemplateForm__right">
              <MenuTab onTabChange={handleTabChange} dashboardForm={true} />
              {/* <MenuLink   
            subData={countTab} // Pass the counts of sub-tabs
            setSubActiveTab={setSubActiveTab}   
            value={value}   
            setValue={setValue}   
          /> */}
              <div className="tableSearchHead">
                <div className="tableSearchHead__btn">
                  <AddButton title="Aggiungi Task" />
                </div>
                <div className="tableSearchHead__field">
                  <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    label="Cerca"
                  ></TextField>
                  <SearchIcon />
                </div>
              </div>
              <DashboardFormTable />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DashboardForm;
