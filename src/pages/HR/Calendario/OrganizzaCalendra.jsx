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
const OrganizzaCalendra = () => {
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

 

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="calender">
          {/* Use the MenuTab component */}
          <MenuTab
            // onTabChange={handleTabChange}
            organizzaCalender={true}
            customClassName="calenderTabs"
          />
          <div className="calenderCard">
            {/* Calendar Component */}
            <ReactBigCalendar hr={true} hrView={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizzaCalendra;
