import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/hrData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./BustePage.scss";
const columns = [
  { field: "numero", headerName: "Numero", width: 400 },
  { field: "mese", headerName: "Mese", width: 400 },
  { field: "data", headerName: "Data", width: 120 },
  { field: "colaboratore", headerName: "Collaboratore", width: 120 },
  { field: "totale", headerName: "Totale", width: 120 },
  { field: "daSaladare", headerName: "Da saldare", width: 90 },
  { field: "saldato", headerName: "Saldato", width: 90 },
  { field: "autore", headerName: "Autore", width: 90 },
  { field: "modDa", headerName: "Mod. da", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Totale buste paga",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#100919",
  },
  {
    status: "Ultimo mese",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#57C700",
  },
  {
    status: "Ultimo anno",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#FFA903",
  },
];
const BustaPage = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="buste">
          <InvoiceDashboard ordini={OrdiniData} hr={true} />
          <Table
            data={tableData.hrData.busta}
            columns={columns}
            navData={"busta"}
          />
        </div>
      </div>
    </>
  );
};

export default BustaPage;
