import React from "react";
import Table from "../../component/table/Table";
import tableData from "../../utils/progettiHrData.json";
import InvoiceDashboard from "../../component/invoiceStatitics/InvoiceDashboard";
import "./Progetti.scss";
const columns = [
  { field: "nomeProgetto", headerName: "Nome Progetto", width: 900 },
  { field: "totaleOreLavorate", headerName: "Totale Ore Lavorate", width: 300 },
  { field: "creatoIl", headerName: "Dal", width: 90 },
  { field: "al", headerName: "Al", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Totale progetti",
    count: 15,
    color: "#100919",
  },
  {
    status: "Totale ore lavorate",
    count: 604,
    color: "#57C700",
  },
];
const Progetti = () => {
  return (
    <div className="ProgettiTab">
      <InvoiceDashboard ordini={OrdiniData} hr={true} />
      <Table
        data={tableData}
        columns={columns}
        navData={"progetti"}
      />
    </div>
  );
};

export default Progetti;
