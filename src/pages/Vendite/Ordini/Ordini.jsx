import React from "react";
import Header from "../../../component/header/Header";
import { useLocation } from "react-router-dom";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/ordini.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "doc", headerName: "Doc", width: 65 },
  { field: "creatoIl", headerName: "Creato il", width: 92 },
  { field: "numero", headerName: "Numero", width: 92 },
  { field: "fornitori", headerName: "Cliente/Lead", width: 844 },
  { field: "autore", headerName: "Autore", width: 85 },
  { field: "modDa", headerName: "Mod. da", width: 85 },
  { field: "dataModifica", headerName: "Data Modifica", width: 130 },
  { field: "valore", headerName: "Valore", width: 120 },
  { field: "stato", headerName: "Stato", width: 142 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];

const OrdiniData = [
  {
    status: "Totale ",
    count: 325,
    amount: "20.350.043.55€",
    color: "#100919",
    iconColor: "#100919",
  },
  {
    status: "Evasi",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
    iconColor: "#57C700",
  },
  {
    status: "Evasi parzialmente",
    count: 325,
    amount: "20.350.043.55€",
    color: "#FFA903",
    iconColor: "#FFA903",
  },
  {
    status: "Da evadere",
    count: 325,
    amount: "20.350.043.55€",
    color: "#DB0000",
    iconColor: "#DB0000",
  },
];

const Ordini = () => {
  const location = useLocation();

  const isSubLeadDocumenti =
    location.pathname === "/vendite/sub-lead/Documenti";

  return (
    <>
      {!isSubLeadDocumenti && <Header />}

      <div className="pageTemplate">
        {!isSubLeadDocumenti && <InvoiceDashboard ordini={OrdiniData} />}

        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"ordini"}
        />
      </div>
    </>
  );
};

export default Ordini;
