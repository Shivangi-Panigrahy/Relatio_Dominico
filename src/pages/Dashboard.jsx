import React from "react";
import Header from "../component/header/Header";
import InvoiceDashboard from "../component/invoiceStatitics/InvoiceDashboard";
import Table from "../component/table/Table";
import tableData from "../utils/tableData.json";
import TemperatureBarChart from "../component/TemperatureBarChart/TemperatureBarChart";

const columns = [
  { field: "doc", headerName: "Doc", width: 70 },
  { field: "creatoIl", headerName: "Creato il", width: 100 },
  { field: "numero", headerName: "Numero", width: 100 },
  { field: "titolo", headerName: "Titolo", width: 300 },
  { field: "fornitori", headerName: "Fornitori", width: 250 },
  { field: "autore", headerName: "Autore", width: 80 },
  { field: "modDa", headerName: "Mod. da", width: 80 },
  { field: "dataModifica", headerName: "Data Modifica", width: 100 },
  { field: "valore", headerName: "Valore", width: 120 },
  { field: "stato", headerName: "Stato", width: 100 },
  { field: "azioni", headerName: "Azioni", width: 100 },
];
const Dashboard = () => {
  return (
    <>
      <Header />
      <InvoiceDashboard />
      <TemperatureBarChart />
      {/* <Table data={tableData.tabData.tab1} columns={columns} /> */}
    </>
  );
};

export default Dashboard;
