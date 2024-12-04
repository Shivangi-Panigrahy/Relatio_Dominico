import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../../../component/header/Header.jsx";
import tableData from "../../../../utils/tableData.json";
import tableSubData from "../../../../utils/tableSubData.json";
import MenuTab from "../../../../component/tabs/MenuTab.jsx";
// import "./Dettaglio.scss";
import AnagraficaForm from "../../../../component/AnagraficaForm/AnagraficaForm.jsx";
import ProductionInfo from "../../../InvoicePage/productInfo.jsx";

const DettaglioClientiAnagrafiche = ({ Component }) => {
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
            <div className="pageTemplate documentileadDocumentiPage">
                <Grid container spacing={3}>
                    <Grid item lg={3} md={4} xs={12}>
                        <AnagraficaForm />
                    </Grid>
                    <Grid item lg={9} md={8} xs={12}>
                        <Box className="TemplateForm__right">
                            <MenuTab
                                onTabChange={handleTabChange}
                                // dettaglioForm={true}  asdasdasd
                                clientiAnagrafiche={true}
                            />
                            <Box sx={{mt:"4px"}}>
                                <ProductionInfo adminiDoc={true} />
                            </Box>



                            {Component && <Component acquisti_agenda={true} />}
                            {/* <Contatti /> */}
                            {/* <Qualificazione /> */}
                            {/* <ReactBigCalendar 
                                acquisti_agenda={true} 
                            /> */}
                            {/* <Sedi_Operative /> */}
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default DettaglioClientiAnagrafiche;
