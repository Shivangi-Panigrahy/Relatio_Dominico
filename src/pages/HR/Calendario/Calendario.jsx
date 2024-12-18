import React from "react";
import Header from "../../../component/header/Header";
import ReactBigCalendar from "../../../component/HrCalendar/HrCalendar";
import MenuTab from "../../../component/tabs/MenuTab";
import { ReactComponent as Mese } from "../../../assets/Mese.svg";

import Table from "../../../component/table/Table";
import tableData from "../../../utils/hrTurniData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "nomeTurno", headerName: "Nome del turno", width: 1150 },
  { field: "tipologia", headerName: "Tipologia", width: 132 },
  { field: "stato", headerName: "Stato", width: 125 },
  { field: "creatoil", headerName: "Scadenza", width: 160 },
  { field: "utente", headerName: "Utente", width: 85 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];
const Calendario = () => {
  const [selectedTab, setSelectedTab] = React.useState("Calendario");

  const handleTabChange = (newTab) => {
    const tabMap = {
      tab1: "Calendario",
      tab2: "Organizza",
    };
    setSelectedTab(tabMap[newTab] || "Calendario");
  };
  const OrdiniData = [
    {
      status: "Totale Turni",
      count: 53,
      subfix: "h",
      color: "#100919",
    },
    {
      status: "Attivi",
      count: 12,
      subfix: "h",
      color: "#57C700",
    },
    {
      status: "Inattivi",
      count: 32,
      subfix: "h",
      color: "#FFA903",
    },
  ];

 console.log(selectedTab==="Calendario","selectedTab")

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="calender">
          {/* Use the MenuTab component */}
          <MenuTab
            onTabChange={handleTabChange}
            hrcalendario={true}
            customClassName="calenderTabs"
          />
          {selectedTab==="Calendario" ? (
            <div className="calenderCard">
              {/* Calendar Component */}
              <ReactBigCalendar hr={true} />
            </div>
          ) : (
            <div className="feriePermisse">
              <InvoiceDashboard turni={OrdiniData} />
              <Table data={tableData} columns={columns} navData={"Turni"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calendario;

// import React from "react";
// import Header from "../../../component/header/Header";
// import ReactBigCalendar from '../../../component/HrCalendar/HrCalendar'
// import { ReactComponent as Mese } from "../../../assets/Mese.svg";
// import { Tab, Tabs } from "@mui/material";

// const Calendario = () => {
//   const [value, setValue] = React.useState("Calendario");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Header />
//       <div className="pageTemplate">
//         <div className="calender">
//           <Tabs value={value} onChange={handleChange} textColor="primary">
//             <Tab value="Calendario" label="Calendario" icon={<Mese />} />
//             <Tab value="Organizza" label="Organizza" icon={<Mese />} />
//           </Tabs>
//           <div className="calenderCard">
//             {/* Calendar Component */}
//             <ReactBigCalendar hr={true} hrView={value === "Organizza"} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calendario;
