import React from "react";
import Table from "../../component/table/Table";
import tableData from "../../utils/hrData.json";
import InvoiceDashboard from "../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "nomeProgetto", headerName: "Nome Progetto", width: 900 },
  { field: "totaleOreLavorate", headerName: "Totale Ore Lavorate", width: 300 },
  { field: "dal", headerName: "Dal", width: 90 },
  { field: "al", headerName: "Al", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Totale allegati",
    count: 15,
    color: "#100919",
  },
  {
    status: "Totale ore lavorate",
    count: 604,
    color: "#57C700",
  },
];

const Allegati = () => {
  return (
    <div className="pageTemplate">
      <div className="allegati">
        <InvoiceDashboard ordini={OrdiniData} hr={true} />
        <Table
          data={tableData.hrData.allegati}
          columns={columns}
          navData={"allegati"}
        />
      </div>
    </div>
  );
};

export default Allegati;
