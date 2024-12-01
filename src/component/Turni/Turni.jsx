import React from "react";
import Table from "../../component/table/Table";
import tableData from "../../utils/turniHrData.json";
import InvoiceDashboard from "../../component/invoiceStatitics/InvoiceDashboard";
import "./Turni.scss";
const columns = [
  { field: "creatoIl", headerName: "Data", width: 900 },
  { field: "turno", headerName: "Turno", width: 30 },
  { field: "ore", headerName: "Ore", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Tuni",
    count: 15,
    color: "#100919",
  },
  {
    status: "Totale ore",
    count: 604,
    color: "#57C700",
  },
];
const Turni = () => {
  return (
    <div className="TurniTab">
      <InvoiceDashboard ordini={OrdiniData} hr={true} />
      <Table
        data={tableData}
        columns={columns}
        navData={"turni"}
      />
    </div>
  );
};

export default Turni;
