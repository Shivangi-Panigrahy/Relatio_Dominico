import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/preventiviData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";



const preventiviData = [
  {
    status: "Totale",
    count: 325,
    amount: "20.350.043.55€",
    color: "#100919",
    iconColor: "#57C700",
  },
  {
    status: "Approvati",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
    iconColor: "#57C700",
  },
  {
    status: "Da approvare",
    count: 325,
    amount: "20.350.043.55€",
    color: "#FFA903",
    iconColor: "#FFA903",
  },
  {
    status: "Rifiutati",
    count: 325,
    amount: "20.350.043.55€",
    color: "#DB0000",
    iconColor: "#DB0000",
  },
];
const Preventivi = () => {
  const location = useLocation();

  const columns = [
    { field: "doc", headerName: "Doc", width: 65 },
    { field: "creatoIl", headerName: "Creato il", width: 95 },
    { field: "numero", headerName: "Numero", width: 95 },
    { field: "titolo", headerName: "Titolo", width: 505 },
    ...(location.pathname !== "/vendite/sub-lead/Documenti"
      ? [{ field: "fornitori", headerName: "Cliente/Lead", width: 340 }]
      : []),
    { field: "autore", headerName: "Autore", width: 85 },
    { field: "modDa", headerName: "Mod. da", width: 85 },
    { field: "dataModifica", headerName: "Data Modifica", width: 130 },
    { field: "valore", headerName: "Valore", width: 120 },
    { field: "stato", headerName: "Stato", width: 142 },
    { field: "azioni", headerName: "Azioni", width: 95 },
  ];

  const isSubLeadDocumenti = location.pathname === "/vendite/sub-lead/Documenti";
  const isProgettiDocumenti = location.pathname === "/attivita/progetti/Documenti";



  return (
    <>
      {!isSubLeadDocumenti && !isProgettiDocumenti && <Header />}

      <div className="pageTemplate">
        {!isSubLeadDocumenti && !isProgettiDocumenti && (
          <InvoiceDashboard preventivi={preventiviData} />
        )}

        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"preventivi"}
        />
      </div>
    </>
  );
};

export default Preventivi;