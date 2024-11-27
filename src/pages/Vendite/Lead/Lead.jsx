import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/leedData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "creatoIl", headerName: "Creato il", width: 90 },
  { field: "ragioneSociale", headerName: "Ragione sociale", width: 1200 },
  { field: "assegnatoA", headerName: "Assegnato a", width: 130 },
  { field: "autore", headerName: "Autore", width: 85 },
  { field: "stato", headerName: "Stato", width: 142 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const leadData = [
  {
    status: "Da contattare",
    count: "",
    amount: "34/120",
    color: "#57C700",
    iconColor: "#57C700",
  },
  {
    status: "Contattati",
    count: "",
    amount: "86/120",
    color: "#FFA903",
    iconColor: "#FFA903",
  },
  {
    status: "In trattativa",
    count: "",
    amount: "5/86",
    color: "#DB0000",
    iconColor: "#DB0000",
  },
];
const Leed = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <InvoiceDashboard lead={leadData} />
        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"leed"}
        />
      </div>
    </>
  );
};

export default Leed;
