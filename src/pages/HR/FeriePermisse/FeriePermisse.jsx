import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/hrData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./FeriePermisse.scss";

const columns = [
  { field: "colaboratore", headerName: "Colaboratore", width: 400 },
  { field: "evento", headerName: "Evento", width: 400 },
  { field: "da", headerName: "Da", width: 120 },
  { field: "a", headerName: "A", width: 120 },
  { field: "totOre", headerName: "Tot ore", width: 120 },
  { field: "autore", headerName: "Autore", width: 90 },
  { field: "modDa", headerName: "Mod. da", width: 90 },
  { field: "stato", headerName: "Stato", width: 120 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Ferie",
    count: 234,
    subfix: "h",
    color: "#100919",
  },
  {
    status: "Permisse",
    count: 234,
    subfix: "h",
    color: "#57C700",
  },
  {
    status: "Straordinari",
    count: 234,
    subfix: "h",
    color: "#FFA903",
  },
  {
    status: "Malattia",
    count: 23,
    subfix: "G",
    color: "#DB0000",
  },
];
const FeriePermisse = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="feriePermisse">
          <InvoiceDashboard ordini={OrdiniData} hr={true} />
          <Table
            data={tableData.hrData.feriePermisse}
            columns={columns}
            navData={"feriePermisse"}
          />
        </div>
      </div>
    </>
  );
};

export default FeriePermisse;
