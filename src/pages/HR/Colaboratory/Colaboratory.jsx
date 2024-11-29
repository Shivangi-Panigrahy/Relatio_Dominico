import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/hrData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "colaboratore", headerName: "Colaboratore", width: 500 },
  { field: "ruolo", headerName: "Ruolo", width: 180 },
  { field: "livello", headerName: "Livello", width: 90 },
  { field: "trattamento", headerName: "Trattamento", width: 180 },
  { field: "attivo", headerName: "Attivo", width: 120 },
  { field: "inixio", headerName: "Inixio", width: 120 },
  { field: "fine", headerName: "Fine", width: 120 },
  { field: "utente", headerName: "Utente", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Totale Collaboratori",
    count: 53,
    color: "#100919",
  },
  {
    status: "Attivi",
    count: 12,
    color: "#57C700",
  },
  {
    status: "Inattivi",
    count: 32,
    color: "#FFA903",
  },
  {
    status: "Ruoli",
    count: 4,
    color: "#DB0000",
  },
];
const Colaboratory = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="colaboratory">
          <InvoiceDashboard ordini={OrdiniData} hr={true} />
          <Table
            data={tableData.hrData.hrCollaborator}
            columns={columns}
            navData={"colaboratory"}
          />
        </div>
      </div>
    </>
  );
};

export default Colaboratory;
